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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dom = React.createElement;
var CONFIG = {
  "prof-a": {
    contactInformation: true,
    productFilter: function productFilter(products) {
      return products;
    },
    prices: false,
    categories: [["Higiene", "higiene"], ["Máscaras", "mascaras"], ["Ácido Hialurónico", "acido-hialuronico"], ["Peeling", "peeling"], ["Corporales", "corporales"], ["Hombres", "hombres"], ["Protección Intensiva", "proteccion-intensiva"], ["Monodosis", "monodosis"], ["Activos Concentrados", "activos-concentrados"], ["Protección Solar", "proteccion-solar"]]
  },
  "prof-b": {
    contactInformation: false,
    productFilter: function productFilter(products) {
      return products;
    },
    prices: false,
    categories: [["Higiene", "higiene"], ["Máscaras", "mascaras"], ["Ácido Hialurónico", "acido-hialuronico"], ["Peeling", "peeling"], ["Corporales", "corporales"], ["Hombres", "hombres"], ["Protección Intensiva", "proteccion-intensiva"], ["Monodosis", "monodosis"], ["Activos Concentrados", "activos-concentrados"], ["Protección Solar", "proteccion-solar"]]
  },
  "dom-a": {
    contactInformation: false,
    productFilter: function productFilter(products) {
      return Object.keys(products).reduce(function (acc, x) {
        var filtered = products[x].filter(function (p) {
          var v = p.variants.filter(function (v) {
            return v.code < 2000;
          });
          return v.length || p.category.includes('Protección Solar');
        });
        return _objectSpread({}, acc, _defineProperty({}, x, filtered));
      }, {});
    },
    prices: true,
    categories: [["Higiene", "higiene"], ["Ácido Hialurónico", "acido-hialuronico"], ["Corporales", "corporales"], ["Hombres", "hombres"], ["Protección Intensiva", "proteccion-intensiva"], ["Monodosis", "monodosis"], ["Protección Solar", "proteccion-solar"]]
  },
  "dom-b": {
    contactInformation: false,
    productFilter: function productFilter(products) {
      return products;
    },
    prices: false,
    categories: [["Higiene", "higiene"], ["Ácido Hialurónico", "acido-hialuronico"], ["Corporales", "corporales"], ["Hombres", "hombres"], ["Protección Intensiva", "proteccion-intensiva"], ["Monodosis", "monodosis"], ["Protección Solar", "proteccion-solar"]]
  }
};

var Tag = function Tag(label, key, className) {
  return dom("div", {
    className: "chip ".concat(className || ''),
    key: key
  }, label);
};

var Section = function Section(title, paragraph, prepend) {
  return dom("div", {
    className: "section-container"
  }, dom("h4", {
    className: "section-name"
  }, title), dom("p", {
    className: "section-body",
    lang: "es"
  }, prepend, paragraph));
};

var Product = function Product(product, key, prices) {
  return dom("div", {
    className: "product-container"
  }, dom("div", {
    className: "row"
  }, dom("div", {
    class: "col s2"
  }, prices ? dom("img", {
    src: "images/_img/".concat(product.variants[0].img || product.img, ".png"),
    className: "responsive-img"
  }) : dom("img", {
    src: "images/_img/".concat(product.img || product.variants[0].img, ".png"),
    className: "responsive-img"
  })), dom("div", {
    class: "col s10"
  }, dom("h4", {
    className: "primary-title"
  }, product.name), dom("div", {
    className: "product-body"
  }, dom("p", {
    className: "product-short-desc",
    lang: "es"
  }, product.shortDesc), prices && dom("div", {
    className: "product-price"
  }, dom("div", {
    className: "price-tag"
  }, dom("h5", null, dom("span", {
    className: "price-symbol"
  }, "$"), dom("span", {
    className: "price-total"
  }, product.variants[0].sellPrice), dom("sup", {
    className: "price-decimal"
  }, "00"))), dom("div", {
    className: "product-size"
  }, "Cont. ", product.variants[0].content))))), dom("div", null, product.fullDesc && Section('Descripción', product.fullDesc), product.application && Section('Aplicación', product.application), product.actives && Section('', product.actives.map(function (p) {
    return Tag(p);
  }), product.ph && Tag("PH ".concat(product.ph), null, 'is-ph'))));
};

var Category = function Category(category, products, prices) {
  return dom("section", {
    id: category[TAG],
    className: "container"
  }, dom("h2", {
    className: "category-name"
  }, category[LABEL]), dom("div", {
    className: "collection"
  }, products.map(function (p, i) {
    return dom("div", {
      className: "collection-item"
    }, Product(p, i, prices));
  })));
};

var ToC = function ToC(categories, products) {
  return dom("section", {
    id: "eba-toc",
    className: "container"
  }, dom("h2", {
    className: "pagebreak"
  }, "Indice"), dom("div", {
    className: ""
  }, categories.map(function (category, i) {
    return dom("div", null, dom("div", null, dom("a", {
      href: "#".concat(category[TAG])
    }, dom("h5", null, category[LABEL], " ", dom("i", {
      className: "material-icons"
    }, "chevron_right")))), dom("div", null, products[category[LABEL]].map(function (product) {
      return Tag(product.name, null, 'toc-tag');
    })));
  })));
};

var Vademecum = function Vademecum(categories, products, prices) {
  console.log("prices?", prices);
  return categories.map(function (categoryName, i) {
    return dom("div", {
      key: i
    }, Category(categoryName, products[categoryName[LABEL]], prices));
  });
};

var ContactInformation = function ContactInformation() {
  return dom("section", {
    id: "contact-information"
  }, dom("div", {
    className: "container"
  }, dom("h2", {
    class: "pagebreak"
  }, "Contacto"), dom("div", {
    class: "collection"
  }, dom("div", {
    class: "collection-item"
  }, dom("h4", {
    className: "primary-title"
  }, "Argentina"), dom("div", {
    class: "section-container"
  }, dom("h4", {
    class: "section-name"
  }, "Direcci\xF3n"), dom("p", {
    class: "section-body"
  }, "Leopoldo Marechal 914, Ciudad Aut\xF3noma de Buenos Aires")), dom("div", {
    class: "section-container"
  }, dom("h4", {
    class: "section-name"
  }, "Telefono"), dom("p", {
    class: "section-body"
  }, "(+5411) 4139-6860/1")), dom("div", {
    class: "section-container"
  }, dom("h4", {
    class: "section-name"
  }, "Email"), dom("p", {
    class: "section-body"
  }, "consultas@especificosba.com.ar"))), dom("div", {
    className: "collection-item"
  }, dom("h4", {
    className: "primary-title"
  }, "M\xE9xico"), dom("div", {
    class: "section-container"
  }, dom("h4", {
    class: "section-name"
  }, "Tel\xE9fono"), dom("p", {
    class: "section-body"
  }, "(+5255)4170-8856")), dom("div", {
    class: "section-container"
  }, dom("h4", {
    class: "section-name"
  }, "Email"), dom("p", {
    class: "section-body"
  }, "contactos@skin-connect.com.mx"))), dom("div", {
    className: "collection-item"
  }, dom("h4", {
    className: "primary-title"
  }, "Ecuador"), dom("div", {
    class: "section-container"
  }, dom("h4", {
    class: "section-name"
  }, "Direcci\xF3n"), dom("p", {
    class: "section-body"
  }, "Av. Felipe II s/n, Via Mall del R\xEDo")), dom("div", {
    class: "section-container"
  }, dom("h4", {
    class: "section-name"
  }, "Tel\xE9fono"), dom("p", {
    class: "section-body"
  }, "(+593)07245-5143 (+593)07288-6258")), dom("div", {
    class: "section-container"
  }, dom("h4", {
    class: "section-name"
  }, "Email"), dom("p", {
    class: "section-body"
  }, "kasanacorp@hotmail.com"))))));
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
    var config = CONFIG["dom-a"];
    _this.state = {
      config: config,
      categories: config.categories,
      products: null
    };
    console.log(config);
    return _this;
  }

  _createClass(VademecumData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('data/products-by-category.json').then(function (response) {
        return response.json();
      }).then(this.state.config.productFilter).then(function (data) {
        console.log("data", data);

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
          products = _this$state.products,
          config = _this$state.config;

      if (products) {
        return dom("div", null, ToC(categories, products), Vademecum(categories, products, config.prices), config.contactInformation && ContactInformation());
      } else {
        return dom("div", null);
      }
    }
  }]);

  return VademecumData;
}(React.Component);

ReactDOM.render(dom(VademecumData), domContainer);
