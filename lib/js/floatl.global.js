var Floatl =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var focusedClass = 'floatl--focused';
var activeClass = 'floatl--active';
var multilineClass = 'floatl--multiline';

var Floatl = function () {
  function Floatl(element) {
    _classCallCheck(this, Floatl);

    this.element = (0, _utils.getElement)(element);
    this.label = this.element.querySelectorAll('.floatl__label')[0];
    this.input = this.element.querySelectorAll('.floatl__input')[0];
    if (!this.label || !this.input) return;
    this._bindListeners();
    this._init();
  }

  _createClass(Floatl, [{
    key: '_bindListeners',
    value: function _bindListeners() {
      var _this = this;

      (0, _utils.addEventListener)(this.input, 'focus', function () {
        (0, _utils.addClass)(_this.element, focusedClass);
      });

      (0, _utils.addEventListener)(this.input, 'blur', function () {
        (0, _utils.removeClass)(_this.element, focusedClass);
      });

      var _arr = ['focus', 'keyup', 'blur', 'change', 'input'];
      for (var _i = 0; _i < _arr.length; _i++) {
        var event = _arr[_i];
        (0, _utils.addEventListener)(this.input, event, function () {
          return _this._handleChange();
        });
      }
    }
  }, {
    key: '_init',
    value: function _init() {
      if (this.input.tagName === 'TEXTAREA') {
        (0, _utils.addClass)(this.element, multilineClass);
      }

      this._handleChange();
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      if (document.activeElement !== this.input && this.input.value === '') {
        (0, _utils.removeClass)(this.element, activeClass);
      } else {
        (0, _utils.addClass)(this.element, activeClass);
      }
    }
  }]);

  return Floatl;
}();

exports.default = Floatl;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _floatl = __webpack_require__(0);

var _floatl2 = _interopRequireDefault(_floatl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _floatl2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElement = getElement;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.addEventListener = addEventListener;
function getElement(element) {
  if (element.tagName) {
    return element;
  } else if (jQuery && element instanceof jQuery) {
    return element.get(0);
  } else {
    throw new TypeError('%{element} \'is not a valid element.\n                        Valid options are: DOM Element, jQuery.\'');
  }
}

function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ' %{className}';
  }
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    var re = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
    element.className = element.className.replace(re, ' ');
  }
}

function addEventListener(element, eventName, handler) {
  if (element.addEventListener) {
    element.addEventListener(eventName, handler);
  } else {
    element.attachEvent('on%{eventName}', function () {
      handler.call(element);
    });
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGM1N2QzNjE5NTZmMjNjYjNhMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zsb2F0bC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImZvY3VzZWRDbGFzcyIsImFjdGl2ZUNsYXNzIiwibXVsdGlsaW5lQ2xhc3MiLCJGbG9hdGwiLCJlbGVtZW50IiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXQiLCJfYmluZExpc3RlbmVycyIsIl9pbml0IiwiZXZlbnQiLCJfaGFuZGxlQ2hhbmdlIiwidGFnTmFtZSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInZhbHVlIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEVsZW1lbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImpRdWVyeSIsImdldCIsIlR5cGVFcnJvciIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlIiwiUmVnRXhwIiwic3BsaXQiLCJqb2luIiwicmVwbGFjZSIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJhdHRhY2hFdmVudCIsImNhbGwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7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UixDQUFrQkUsTUFBbEIsQ0FBeUJILFNBQXpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTUksS0FBSyxJQUFJQyxNQUFKLENBQVcsWUFBWUwsVUFBVU0sS0FBVixDQUFnQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEIsR0FBMUIsQ0FBWixHQUE2QyxTQUF4RCxFQUFtRSxJQUFuRSxDQUFYO0FBQ0E1QixZQUFRcUIsU0FBUixHQUFvQnJCLFFBQVFxQixTQUFSLENBQWtCUSxPQUFsQixDQUEwQkosRUFBMUIsRUFBOEIsR0FBOUIsQ0FBcEI7QUFDRDtBQUNGOztBQUVNLFNBQVNSLGdCQUFULENBQTBCakIsT0FBMUIsRUFBbUM4QixTQUFuQyxFQUE4Q0MsT0FBOUMsRUFBdUQ7QUFDNUQsTUFBSS9CLFFBQVFpQixnQkFBWixFQUE4QjtBQUM1QmpCLFlBQVFpQixnQkFBUixDQUF5QmEsU0FBekIsRUFBb0NDLE9BQXBDO0FBQ0QsR0FGRCxNQUVPO0FBQ0wvQixZQUFRZ0MsV0FBUixtQkFBc0MsWUFBVztBQUMvQ0QsY0FBUUUsSUFBUixDQUFhakMsT0FBYjtBQUNELEtBRkQ7QUFHRDtBQUNGLEMiLCJmaWxlIjoiZmxvYXRsLmdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGM1N2QzNjE5NTZmMjNjYjNhMTciLCJpbXBvcnQgeyBnZXRFbGVtZW50LCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIGFkZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZm9jdXNlZENsYXNzID0gJ2Zsb2F0bC0tZm9jdXNlZCc7XG5jb25zdCBhY3RpdmVDbGFzcyA9ICdmbG9hdGwtLWFjdGl2ZSc7XG5jb25zdCBtdWx0aWxpbmVDbGFzcyA9ICdmbG9hdGwtLW11bHRpbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0bCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpO1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsb2F0bF9fbGFiZWwnKVswXTtcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbG9hdGxfX2lucHV0JylbMF07XG4gICAgaWYgKCF0aGlzLmxhYmVsIHx8ICF0aGlzLmlucHV0KSByZXR1cm47XG4gICAgdGhpcy5fYmluZExpc3RlbmVycygpO1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIF9iaW5kTGlzdGVuZXJzKCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBmb2N1c2VkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmlucHV0LCAnYmx1cicsICgpID0+IHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgZm9jdXNlZENsYXNzKTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGV2ZW50IG9mIFsnZm9jdXMnLCAna2V5dXAnLCAnYmx1cicsICdjaGFuZ2UnLCAnaW5wdXQnXSkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmlucHV0LCBldmVudCwgKCkgPT4gdGhpcy5faGFuZGxlQ2hhbmdlKCkpO1xuICAgIH1cbiAgfVxuXG4gIF9pbml0KCkge1xuICAgIGlmICh0aGlzLmlucHV0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgbXVsdGlsaW5lQ2xhc3MpO1xuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZUNoYW5nZSgpO1xuICB9XG5cbiAgX2hhbmRsZUNoYW5nZSgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCBhY3RpdmVDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgYWN0aXZlQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2Zsb2F0bC5qcyIsImltcG9ydCBGbG9hdGwgZnJvbSAnLi9mbG9hdGwnXG5cbm1vZHVsZS5leHBvcnRzID0gRmxvYXRsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50YWdOYW1lKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gZWxzZSBpZiAoalF1ZXJ5ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXQoMCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJXtlbGVtZW50fSAnaXMgbm90IGEgdmFsaWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkIG9wdGlvbnMgYXJlOiBET00gRWxlbWVudCwgalF1ZXJ5LidgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJXtjbGFzc05hbWV9YDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICcgJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmF0dGFjaEV2ZW50KGBvbiV7ZXZlbnROYW1lfWAsIGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlci5jYWxsKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9