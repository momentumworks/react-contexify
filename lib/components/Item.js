'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      _this.props.disabled ? e.stopPropagation() : _this.props.onClick({
        event: _this.props.nativeEvent,
        ref: _this.props.refsFromProvider,
        data: _this.props.data,
        dataFromProvider: _this.props.dataFromProvider
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          disabled = _props.disabled,
          style = _props.style,
          children = _props.children,
          data = _props.data,
          refsFromProvider = _props.refsFromProvider,
          dataFromProvider = _props.dataFromProvider,
          nativeEvent = _props.nativeEvent;


      var cssClasses = (0, _classnames2.default)(_styles2.default.item, className, _defineProperty({}, '' + _styles2.default.itemDisabled, typeof disabled === 'function' ? disabled({
        event: nativeEvent,
        ref: refsFromProvider,
        data: data,
        dataFromProvider: dataFromProvider
      }) : disabled));

      return _react2.default.createElement(
        'div',
        {
          className: cssClasses,
          style: style,
          onClick: this.handleClick,
          role: 'presentation'
        },
        _react2.default.createElement(
          'div',
          { className: _styles2.default.itemContent },
          children
        )
      );
    }
  }]);

  return Item;
}(_react.Component);

Item.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  nativeEvent: _propTypes2.default.object,
  disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
  onClick: _propTypes2.default.func,
  data: _propTypes2.default.any,
  dataFromProvider: _propTypes2.default.any,
  refsFromProvider: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.arrayOf(_propTypes2.default.object)])
};
Item.defaultProps = {
  className: null,
  style: {},
  disabled: false,
  onClick: function onClick() {},
  nativeEvent: {},
  data: null,
  refsFromProvider: [],
  dataFromProvider: null
};
exports.default = Item;