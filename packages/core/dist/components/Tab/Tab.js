"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabsContext = require("../TabsContext");

var _StyledTab = require("./StyledTab");

var _excluded = ["active", "className", "tabId", "disabled", "onClick", "onKeyPress"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tab = function Tab(_ref) {
  var active = _ref.active,
      className = _ref.className,
      tabId = _ref.tabId,
      disabled = _ref.disabled,
      onClickProp = _ref.onClick,
      onKeyPressProp = _ref.onKeyPress,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_TabsContext.TabsContext),
      handleChange = _useContext.handleChange,
      handleKeyPress = _useContext.handleKeyPress; // this will preferentially use the passed onChange prop


  var onClick = onClickProp || function () {
    return handleChange(tabId);
  }; // this will preferentially use the passed onKeyPress prop


  var onKeyPress = onKeyPressProp || function (event) {
    return handleKeyPress(tabId, event);
  };

  return /*#__PURE__*/_react["default"].createElement(_StyledTab.StyledTab, _extends({}, props, {
    active: active,
    className: (0, _classnames["default"])(["bcl-tab", {
      "bcl-tab-active": active
    }, className]),
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onKeyPress: disabled ? undefined : onKeyPress,
    tabIndex: disabled ? -1 : 0
  }));
};

exports.Tab = Tab;