'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('../../utils/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var ui = this.context.ui;

      this.setState({
        tabbar: ui.getTabbar()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var fixNavbar = _props.fixNavbar;
      var fixTabbar = _props.fixTabbar;
      var fixToolbar = _props.fixToolbar;
      var className = _props.className;
      var navbar = _props.navbar;
      var toolbar = _props.toolbar;
      var theme = _props.theme;

      var props = _objectWithoutProperties(_props, ['children', 'fixNavbar', 'fixTabbar', 'fixToolbar', 'className', 'navbar', 'toolbar', 'theme']);

      var tabbar = this.state.tabbar;

      var classes = (0, _classnames2.default)(_defineProperty({
        'page': true,
        'navbar-fixed': fixNavbar && navbar,
        'toolbar-fixed': fixToolbar && toolbar || tabbar !== 'none',
        'no-navbar': !navbar,
        'tabbar-labels-fixed': fixTabbar && tabbar === 'label'
      }, 'theme-' + theme, theme), className);
      return _react2.default.createElement(
        'div',
        _extends({ className: classes }, props),
        fixNavbar && navbar,
        _react2.default.createElement(
          'div',
          { className: 'page-content' },
          !fixNavbar && navbar,
          children,
          !fixToolbar && toolbar
        ),
        fixToolbar && toolbar
      );
    }
  }]);

  return Page;
}(_react.Component);

Page.propTypes = {
  fixNavbar: _react.PropTypes.bool,
  fixToolbar: _react.PropTypes.bool,
  fixTabbar: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  navbar: _react.PropTypes.node,
  toolbar: _react.PropTypes.node,
  theme: _react.PropTypes.oneOf((0, _theme.getThemes)())
};
Page.defaultProps = {
  fix: true
};
Page.contextTypes = {
  ui: _react.PropTypes.object
};
exports.default = Page;