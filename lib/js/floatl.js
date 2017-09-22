module.exports =
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDI4NTE2NmFjMzIzYjJjMDFiOTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zsb2F0bC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImZvY3VzZWRDbGFzcyIsImFjdGl2ZUNsYXNzIiwibXVsdGlsaW5lQ2xhc3MiLCJGbG9hdGwiLCJlbGVtZW50IiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXQiLCJfYmluZExpc3RlbmVycyIsIl9pbml0IiwiZXZlbnQiLCJfaGFuZGxlQ2hhbmdlIiwidGFnTmFtZSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInZhbHVlIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEVsZW1lbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImpRdWVyeSIsImdldCIsIlR5cGVFcnJvciIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlIiwiUmVnRXhwIiwic3BsaXQiLCJqb2luIiwicmVwbGFjZSIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJhdHRhY2hFdmVudCIsImNhbGwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7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UixDQUFrQkUsTUFBbEIsQ0FBeUJILFNBQXpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTUksS0FBSyxJQUFJQyxNQUFKLENBQVcsWUFBWUwsVUFBVU0sS0FBVixDQUFnQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEIsR0FBMUIsQ0FBWixHQUE2QyxTQUF4RCxFQUFtRSxJQUFuRSxDQUFYO0FBQ0E1QixZQUFRcUIsU0FBUixHQUFvQnJCLFFBQVFxQixTQUFSLENBQWtCUSxPQUFsQixDQUEwQkosRUFBMUIsRUFBOEIsR0FBOUIsQ0FBcEI7QUFDRDtBQUNGOztBQUVNLFNBQVNSLGdCQUFULENBQTBCakIsT0FBMUIsRUFBbUM4QixTQUFuQyxFQUE4Q0MsT0FBOUMsRUFBdUQ7QUFDNUQsTUFBSS9CLFFBQVFpQixnQkFBWixFQUE4QjtBQUM1QmpCLFlBQVFpQixnQkFBUixDQUF5QmEsU0FBekIsRUFBb0NDLE9BQXBDO0FBQ0QsR0FGRCxNQUVPO0FBQ0wvQixZQUFRZ0MsV0FBUixtQkFBc0MsWUFBVztBQUMvQ0QsY0FBUUUsSUFBUixDQUFhakMsT0FBYjtBQUNELEtBRkQ7QUFHRDtBQUNGLEMiLCJmaWxlIjoiZmxvYXRsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkMjg1MTY2YWMzMjNiMmMwMWI5MiIsImltcG9ydCB7IGdldEVsZW1lbnQsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgYWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBmb2N1c2VkQ2xhc3MgPSAnZmxvYXRsLS1mb2N1c2VkJztcbmNvbnN0IGFjdGl2ZUNsYXNzID0gJ2Zsb2F0bC0tYWN0aXZlJztcbmNvbnN0IG11bHRpbGluZUNsYXNzID0gJ2Zsb2F0bC0tbXVsdGlsaW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRsIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvYXRsX19sYWJlbCcpWzBdO1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsb2F0bF9faW5wdXQnKVswXTtcbiAgICBpZiAoIXRoaXMubGFiZWwgfHwgIXRoaXMuaW5wdXQpIHJldHVybjtcbiAgICB0aGlzLl9iaW5kTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgX2JpbmRMaXN0ZW5lcnMoKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsIGZvY3VzZWRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKHRoaXMuaW5wdXQsICdibHVyJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCBmb2N1c2VkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgZm9yICh2YXIgZXZlbnQgb2YgWydmb2N1cycsICdrZXl1cCcsICdibHVyJywgJ2NoYW5nZScsICdpbnB1dCddKSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKHRoaXMuaW5wdXQsIGV2ZW50LCAoKSA9PiB0aGlzLl9oYW5kbGVDaGFuZ2UoKSk7XG4gICAgfVxuICB9XG5cbiAgX2luaXQoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBtdWx0aWxpbmVDbGFzcyk7XG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlQ2hhbmdlKCk7XG4gIH1cblxuICBfaGFuZGxlQ2hhbmdlKCkge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSB0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGFjdGl2ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvZmxvYXRsLmpzIiwiaW1wb3J0IEZsb2F0bCBmcm9tICcuL2Zsb2F0bCdcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9hdGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCJleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSBlbHNlIGlmIChqUXVlcnkgJiYgZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgIHJldHVybiBlbGVtZW50LmdldCgwKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAle2VsZW1lbnR9ICdpcyBub3QgYSB2YWxpZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWQgb3B0aW9ucyBhcmU6IERPTSBFbGVtZW50LCBqUXVlcnkuJ2ApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAle2NsYXNzTmFtZX1gO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyAnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoYG9uJXtldmVudE5hbWV9YCwgZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=