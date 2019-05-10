'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var dom = React.createElement;
var CONFIG = {
  profA: {
    contactInformation: true,
    productFilter: function productFilter(products) {
      return products;
    },
    prices: false
  },
  profB: {
    contactInformation: false,
    productFilter: function productFilter(products) {
      return products;
    },
    prices: false
  },
  domA: {
    contactInformation: false,
    productFilter: function productFilter(products) {
      return products;
    },
    prices: true
  },
  domB: {
    contactInformation: false,
    productFilter: function productFilter(products) {
      return products;
    },
    prices: false
  }
};
console.log("profA", CONFIG["profA"]);

var Tag = function Tag(label, key, className) {
  return dom("span", {
    className: "tag ".concat(className || ''),
    key: key
  }, label);
};

var Section = function Section(title, paragraph, prepend) {
  return dom("div", {
    className: "section-container"
  }, dom("h4", {
    className: "section-name"
  }, title), dom("p", {
    className: "section-body"
  }, prepend, paragraph));
};

var Product = function Product(product, key) {
  return dom("div", {
    className: "product-container"
  }, dom("h3", {
    className: "product-name"
  }, product.name), dom("div", {
    className: "product-body"
  }, dom("p", {
    className: "product-short-desc"
  }, product.shortDesc), Section('Descripción', product.fullDesc), product.application && Section('Aplicación', product.application), product.actives && Section('Activos', product.actives.join(', '), product.ph && Tag("PH ".concat(product.ph), null, 'is-ph'))));
};

var Category = function Category(category, products) {
  return dom("table", {
    className: "category-container table is-fullwidth"
  }, dom("thead", {
    className: "category",
    id: category[TAG]
  }, dom("tr", null, dom("th", null, dom("h2", {
    className: "category-name"
  }, category[LABEL])))), dom("tbody", null, products.map(function (p, i) {
    return dom("tr", null, dom("td", null, Product(p, i)));
  })), dom("tfoot", null, dom("tr", null, dom("td", null, dom("div", {
    class: "footer-space",
    height: "20px"
  }, "\xA0")))));
};

var ToC = function ToC(categories, products) {
  return dom("table", {
    className: "toc-table table is-fullwidth"
  }, dom("thead", null, dom("tr", null, dom("th", null, dom("h2", null, "Indice")))), dom("tbody", null, categories.map(function (category, i) {
    return dom("tr", null, dom("td", null, dom("div", {
      className: "toc-section"
    }, dom("div", null, dom("a", {
      href: "#".concat(category[TAG]),
      className: "toc-title"
    }, category[LABEL], dom("img", {
      src: "images/arrow.png",
      className: "toc-goto"
    }))), products[category[LABEL]].map(function (product) {
      return dom("div", {
        className: "toc-content"
      }, product.name);
    }))));
  })));
};

var Vademecum = function Vademecum(categories, products) {
  return categories.map(function (categoryName, i) {
    return dom("div", {
      key: i
    }, Category(categoryName, products[categoryName[LABEL]]));
  });
};

var domContainer = document.querySelector('#vademecum');
var LABEL = 0,
    TAG = 1;

var VademecumData =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VademecumData, _React$Component);

  function VademecumData(props) {
    var _this;

    _classCallCheck(this, VademecumData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VademecumData).call(this, props));
    _this.state = {
      categories: [["Higiene", "higiene"], ["Máscaras", "mascaras"], ["Ácido Hialurónico", "acido-hialuronico"], ["Peeling", "peeling"], ["Corporales", "corporales"], ["Hombres", "hombres"], ["Protección Intensiva", "proteccion-intensiva"], ["Monodosis", "monodosis"], ["Activos Concentrados", "activos-concentrados"], ["Protección Solar", "proteccion-solar"]],
      products: null
    };
    return _this;
  }

  _createClass(VademecumData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('data/products-by-category.json').then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          products: data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          categories = _this$state.categories,
          products = _this$state.products;

      if (products) {
        return dom("div", null, ToC(categories, products), Vademecum(categories, products));
      } else {
        return dom("div", null);
      }
    }
  }]);

  return VademecumData;
}(React.Component);

ReactDOM.render(dom(VademecumData), domContainer);