'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require('@babel/polyfill');

class ExtWebpackPlugin {
  constructor(options) {
    this.plugin = require(`./pluginUtil`)._constructor(options);
  }

  apply(compiler) {
    require('./pluginUtil').logv(this.plugin.options, 'FUNCTION apply');

    if (!compiler.hooks) {
      console.log('not webpack 4');
      return;
    }

    compiler.hooks.thisCompilation.tap(`ext-this-compilation`, compilation => {
      require('./pluginUtil').logv(this.plugin.options, 'HOOK thisCompilation');

      if (this.plugin.vars.pluginErrors.length > 0) {
        compilation.errors.push(new Error(this.plugin.vars.pluginErrors.join("")));
      }
    });

    if (this.plugin.vars.pluginErrors.length > 0) {
      return;
    }

    if (this.plugin.vars.framework == 'extjs') {
      compiler.hooks.compilation.tap(`ext-compilation`, compilation => {
        require('./pluginUtil').logv(this.plugin.options, 'HOOK compilation (empty)');
      });
      compiler.hooks.afterCompile.tap('ext-after-compile', compilation => {
        require('./pluginUtil').logv(this.plugin.options, 'HOOK afterCompile');

        require(`./extjsUtil`)._afterCompile(compilation, this.plugin.vars, this.plugin.options);
      });
    } else {
      compiler.hooks.compilation.tap(`ext-compilation`, compilation => {
        require('./pluginUtil').logv(this.plugin.options, 'HOOK compilation');

        require(`./pluginUtil`)._compilation(compiler, compilation, this.plugin.vars, this.plugin.options);
      });
      compiler.hooks.afterCompile.tap('ext-after-compile', compilation => {
        require('./pluginUtil').logv(this.plugin.options, 'HOOK afterCompile');

        require(`./pluginUtil`)._afterCompile(compiler, compilation, this.plugin.vars, this.plugin.options);
      });
    }

    if (this.plugin.options.treeshake == true && this.plugin.options.environment == 'production' || this.plugin.options.treeshake == false && this.plugin.options.environment != 'production') {
      compiler.hooks.emit.tapAsync(`ext-emit`, (compilation, callback) => {
        require('./pluginUtil').logv(this.plugin.options, 'HOOK emit');

        require(`./pluginUtil`).emit(compiler, compilation, this.plugin.vars, this.plugin.options, callback);
      });
    }

    compiler.hooks.done.tap(`ext-done`, () => {
      require('./pluginUtil').logv(this.plugin.options, 'HOOK done');

      require(`./pluginUtil`)._done(this.plugin.vars, this.plugin.options);

      require('./pluginUtil').log(this.plugin.vars.app + `Completed ext-webpack-plugin processing`);
    });
  }

}

exports.default = ExtWebpackPlugin;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRXh0V2VicGFja1BsdWdpbiIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBsdWdpbiIsIl9jb25zdHJ1Y3RvciIsImFwcGx5IiwiY29tcGlsZXIiLCJsb2d2IiwiaG9va3MiLCJjb25zb2xlIiwibG9nIiwidGhpc0NvbXBpbGF0aW9uIiwidGFwIiwiY29tcGlsYXRpb24iLCJ2YXJzIiwicGx1Z2luRXJyb3JzIiwibGVuZ3RoIiwiZXJyb3JzIiwicHVzaCIsIkVycm9yIiwiam9pbiIsImZyYW1ld29yayIsImFmdGVyQ29tcGlsZSIsIl9hZnRlckNvbXBpbGUiLCJfY29tcGlsYXRpb24iLCJ0cmVlc2hha2UiLCJlbnZpcm9ubWVudCIsImVtaXQiLCJ0YXBBc3luYyIsImNhbGxiYWNrIiwiZG9uZSIsIl9kb25lIiwiYXBwIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUNBQSxPQUFPLENBQUMsaUJBQUQsQ0FBUDs7QUFDZSxNQUFNQyxnQkFBTixDQUF1QjtBQUNwQ0MsRUFBQUEsV0FBVyxDQUFDQyxPQUFELEVBQVU7QUFDbkIsU0FBS0MsTUFBTCxHQUFjSixPQUFPLENBQUUsY0FBRixDQUFQLENBQXdCSyxZQUF4QixDQUFxQ0YsT0FBckMsQ0FBZDtBQUNEOztBQUVERyxFQUFBQSxLQUFLLENBQUNDLFFBQUQsRUFBVztBQUNkUCxJQUFBQSxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCUSxJQUF4QixDQUE2QixLQUFLSixNQUFMLENBQVlELE9BQXpDLEVBQWlELGdCQUFqRDs7QUFDQSxRQUFJLENBQUNJLFFBQVEsQ0FBQ0UsS0FBZCxFQUFxQjtBQUFDQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQTZCO0FBQU87O0FBRTFESixJQUFBQSxRQUFRLENBQUNFLEtBQVQsQ0FBZUcsZUFBZixDQUErQkMsR0FBL0IsQ0FBb0Msc0JBQXBDLEVBQTREQyxXQUFELElBQWlCO0FBQzFF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QixJQUFtQyxZQURqRixFQUVBO0FBQ0VwQixNQUFBQSxRQUFRLENBQUNFLEtBQVQsQ0FBZW1CLElBQWYsQ0FBb0JDLFFBQXBCLENBQThCLFVBQTlCLEVBQXlDLENBQUNmLFdBQUQsRUFBY2dCLFFBQWQsS0FBMkI7QUFDbEU5QixRQUFBQSxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCUSxJQUF4QixDQUE2QixLQUFLSixNQUFMLENBQVlELE9BQXpDLEVBQWlELFdBQWpEOztBQUNBSCxRQUFBQSxPQUFPLENBQUUsY0FBRixDQUFQLENBQXdCNEIsSUFBeEIsQ0FBNkJyQixRQUE3QixFQUF1Q08sV0FBdkMsRUFBb0QsS0FBS1YsTUFBTCxDQUFZVyxJQUFoRSxFQUFzRSxLQUFLWCxNQUFMLENBQVlELE9BQWxGLEVBQTJGMkIsUUFBM0Y7QUFDRCxPQUhEO0FBSUQ7O0FBRUR2QixJQUFBQSxRQUFRLENBQUNFLEtBQVQsQ0FBZXNCLElBQWYsQ0FBb0JsQixHQUFwQixDQUF5QixVQUF6QixFQUFvQyxNQUFNO0FBQ3hDYixNQUFBQSxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCUSxJQUF4QixDQUE2QixLQUFLSixNQUFMLENBQVlELE9BQXpDLEVBQWlELFdBQWpEOztBQUNBSCxNQUFBQSxPQUFPLENBQUUsY0FBRixDQUFQLENBQXdCZ0MsS0FBeEIsQ0FBOEIsS0FBSzVCLE1BQUwsQ0FBWVcsSUFBMUMsRUFBZ0QsS0FBS1gsTUFBTCxDQUFZRCxPQUE1RDs7QUFDQUgsTUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3QlcsR0FBeEIsQ0FBNEIsS0FBS1AsTUFBTCxDQUFZVyxJQUFaLENBQWlCa0IsR0FBakIsR0FBd0IseUNBQXBEO0FBQ0QsS0FKRDtBQUtEOztBQXJEbUMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbnJlcXVpcmUoJ0BiYWJlbC9wb2x5ZmlsbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRXZWJwYWNrUGx1Z2luIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMucGx1Z2luID0gcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuX2NvbnN0cnVjdG9yKG9wdGlvbnMpXG4gIH1cblxuICBhcHBseShjb21waWxlcikge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnRlVOQ1RJT04gYXBwbHknKVxuICAgIGlmICghY29tcGlsZXIuaG9va3MpIHtjb25zb2xlLmxvZygnbm90IHdlYnBhY2sgNCcpO3JldHVybn1cblxuICAgIGNvbXBpbGVyLmhvb2tzLnRoaXNDb21waWxhdGlvbi50YXAoYGV4dC10aGlzLWNvbXBpbGF0aW9uYCwgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0hPT0sgdGhpc0NvbXBpbGF0aW9uJylcbiAgICAgIGlmICh0aGlzLnBsdWdpbi52YXJzLnBsdWdpbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCBuZXcgRXJyb3IodGhpcy5wbHVnaW4udmFycy5wbHVnaW5FcnJvcnMuam9pbihcIlwiKSkgKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHRoaXMucGx1Z2luLnZhcnMucGx1Z2luRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICggdGhpcy5wbHVnaW4udmFycy5mcmFtZXdvcmsgPT0gJ2V4dGpzJykge1xuICAgICAgY29tcGlsZXIuaG9va3MuY29tcGlsYXRpb24udGFwKGBleHQtY29tcGlsYXRpb25gLCAoY29tcGlsYXRpb24pID0+IHtcbiAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGNvbXBpbGF0aW9uIChlbXB0eSknKVxuICAgICAgfSlcbiAgICAgIGNvbXBpbGVyLmhvb2tzLmFmdGVyQ29tcGlsZS50YXAoJ2V4dC1hZnRlci1jb21waWxlJywgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyBhZnRlckNvbXBpbGUnKVxuICAgICAgICByZXF1aXJlKGAuL2V4dGpzVXRpbGApLl9hZnRlckNvbXBpbGUoY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMpXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbXBpbGVyLmhvb2tzLmNvbXBpbGF0aW9uLnRhcChgZXh0LWNvbXBpbGF0aW9uYCwgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyBjb21waWxhdGlvbicpXG4gICAgICAgIHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLl9jb21waWxhdGlvbihjb21waWxlciwgY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMpXG4gICAgICB9KVxuICAgICAgY29tcGlsZXIuaG9va3MuYWZ0ZXJDb21waWxlLnRhcCgnZXh0LWFmdGVyLWNvbXBpbGUnLCAoY29tcGlsYXRpb24pID0+IHtcbiAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGFmdGVyQ29tcGlsZScpXG4gICAgICAgIHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLl9hZnRlckNvbXBpbGUoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZigodGhpcy5wbHVnaW4ub3B0aW9ucy50cmVlc2hha2UgPT0gdHJ1ZSAmJiB0aGlzLnBsdWdpbi5vcHRpb25zLmVudmlyb25tZW50ID09ICdwcm9kdWN0aW9uJykgfHxcbiAgICAgICAodGhpcy5wbHVnaW4ub3B0aW9ucy50cmVlc2hha2UgPT0gZmFsc2UgJiYgdGhpcy5wbHVnaW4ub3B0aW9ucy5lbnZpcm9ubWVudCAhPSAncHJvZHVjdGlvbicpKVxuICAgIHtcbiAgICAgIGNvbXBpbGVyLmhvb2tzLmVtaXQudGFwQXN5bmMoYGV4dC1lbWl0YCwgKGNvbXBpbGF0aW9uLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0hPT0sgZW1pdCcpXG4gICAgICAgIHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLmVtaXQoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zLCBjYWxsYmFjaylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcGlsZXIuaG9va3MuZG9uZS50YXAoYGV4dC1kb25lYCwgKCkgPT4ge1xuICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGRvbmUnKVxuICAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuX2RvbmUodGhpcy5wbHVnaW4udmFycywgdGhpcy5wbHVnaW4ub3B0aW9ucylcbiAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZyh0aGlzLnBsdWdpbi52YXJzLmFwcCArIGBDb21wbGV0ZWQgZXh0LXdlYnBhY2stcGx1Z2luIHByb2Nlc3NpbmdgKVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==