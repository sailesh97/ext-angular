
import { Component, OnInit, ChangeDetectorRef, ViewChild, ViewContainerRef,ElementRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import {navTreeRoot} from '../../../examples';

import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { VERSION } from '@angular/core';
import { Subject } from "rxjs";
import { getFiles } from "./code_preview_helper";
import hljs, { highlightBlock } from 'highlightjs';

// JSX syntax highlighting
import H_js from './H_js';
hljs.registerLanguage('js', H_js);

declare var Ext: any;

declare var _code: any;
 const generateBreadcrumb = (node) => {
  const path = [];

  do {
    path.unshift({
      isLeaf: !node.childNodes.length,
      text: node.get("text"),
      path: node.get("id"),
      divider: '&nbsp;>&nbsp;'
    });

  } while (node = node.parentNode)

  path[path.length-1].divider = ''
  return path
};

@Component({
  selector: 'app-root',
  templateUrl: 'landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  showCode: boolean = false;
  files: Array<any> = [];
  menuhidden: any
  routerhidden: any
  ANGULAR_VERSION: any = VERSION.full
  node: any
  node$: any = new Subject()
  breadcrumb: Array<any>
  isDesktop: boolean = Ext.os.is.Desktop;

  filterRegex: any
  filterVal: any
  showTreeFlag: any = true


  blockstyle: any = {'background':'top','display':'block','text-align':'center'}

  treeStore: any = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: navTreeRoot
  })

  theDataview: any
  tpl: any = `
  <div class="app-thumbnail">
    <div class="app-thumbnail-icon-wrap">
      <div class="app-thumbnail-icon {navIcon}"></div>
    </div>
    <div className="app-thumbnail-text" >{text}</div>
  </div>`

  toggleCode = () => {
    this.showCode = !this.showCode;
  }

  dataviewReady = (event) => {
    console.log("dataviewReady");
    this.theDataview = event.ext;
  }

  doClick = (event) => {
    //if( window.console ) console.log('dataView.click(%o,%o,%o,%o)',view,index,node,event);
    console.log("doClick. ID: " + event.location.record.data.id);
    var id = event.location.record.data.id
    this.navigate(id)
  }

  theDataviewToolbar: any

  tplToolbar: any = `
  <div class="app-toolbar">
    {text} <span>{divider}</span>
  </div>`

  dataviewToolbarReady = (event) => {
    console.log("dataviewToolbarReady");
    this.theDataviewToolbar = event.ext
  }

  doClickToolbar = (event) => {
    console.log('click')
    console.log(event.location.record.data)
    var id = event.location.record.data.path
    this.navigate(id)
  }

  constructor(private router: Router) {
    console.log('constructor')

    this.node$.subscribe(({
      next: (v) => {
        this.node = v;
        this.files = getFiles(v, _code);
        this.highlightCode();
        console.log("Generating breadcrumb for ID: " + v.id);
        this.breadcrumb = generateBreadcrumb(v);
        console.log(`BREADCRUMB: ${JSON.stringify(this.breadcrumb.map(b => b.text))}`);
        if(this.node.childNodes.length == 0) {
          this.menuhidden = true
          this.routerhidden = false
        }
        else {
          this.menuhidden = false
          this.routerhidden = true
          if (this.theDataview != undefined) {
            this.theDataview.setData(this.node.childNodes)
          }
        }
        if (this.theDataviewToolbar != undefined) {
          this.theDataviewToolbar.setData(this.breadcrumb)
        }
      },
    }));
    
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        //console.log(`location.path(true): ${location.path(true)}`);
        console.log(`val: ${val}`);
        console.log(`nodeId: ${val.url}`);
        var localNode = this.treeStore.getNodeById(val.url);
        console.log("Node changed: " + this.node.id);
        console.log("Children el length : " + this.node.childNodes.length);

        if (localNode) {
          this.node$.next(localNode);
        } else {
          console.log("Not a valid node. Probably looking at resources");
        }
      }
    });
  }

  navigate(location) {
    console.log('navigate')
    this.router.navigateByUrl(location);
  }

  highlightCode() {
    document.querySelectorAll(".code").forEach((el) => {
      highlightBlock(el);
    });
  }

  ngOnInit() {
    var localNode = this.treeStore.getNodeById(location.pathname);
    if(localNode) {
      this.node = localNode;
      this.node$.next(this.treeStore.getNodeById(location.pathname));
    }
    else {
      console.log("Not a valid node. Probably looking at resources");
    }
  } 

  selectionChanged(event) {
    console.log('selectionChanged')
    var record = event.record;
    if(record && record.data && record.data.id) {
      var componentSelectedId = record.data.id;
      console.log("selectionChanged ID: " + componentSelectedId);
      this.router.navigate([componentSelectedId]);
    }
  }

  toggleTree = function(){
    this.showTreeFlag = !this.showTreeFlag;
  }

  filterNav = function(event) {
    var oldValue = event.oldValue;
    var newValue = event.newValue;
    this.filterVal = newValue;
    console.log("In filterNav.oldValue : " + oldValue + " newValue: " + newValue);
    const store = this.treeStore;
    var escapeRegex = Ext.String.escapeRegex(newValue);
    console.log(escapeRegex);
    this.filterRegex = new RegExp(escapeRegex, 'i');
    store.filterBy(record => this.containsMatches(record));
  }

  containsMatches(node) {
    const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
    if (found) node.expand();
    node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">' + this.filterVal + '</span>')
    return found;
  }
}

@Component({
  selector: 'dummy-component',
  template: ``,
  styles: [``]
})
export class DummyComponent implements OnInit {
  ngOnInit() {
  }
}
