'use strict';

const dom = React.createElement;

const CONFIG = {
  "prof-a": {
      title: "Vademecum Profesional",
      contactInformation: true,
      productFilter: products => products,
      prices: false,
      categories: [
        [ "Higiene", "higiene" ],
        [ "Máscaras", "mascaras" ],
        [ "Ácido Hialurónico", "acido-hialuronico" ],
        [ "Peeling", "peeling" ],
        [ "Corporales", "corporales" ],
        [ "Hombres", "hombres" ],
        [ "Protección Intensiva", "proteccion-intensiva" ],
        [ "Monodosis", "monodosis" ],
        [ "Activos Concentrados", "activos-concentrados" ],
        [ "Protección Solar", "proteccion-solar" ]
      ]
  },
  "prof-b": {
      title: "Vademecum Profesional",
      contactInformation: false,
      productFilter: products => products,
      prices: false,
      categories: [
        [ "Higiene", "higiene" ],
        [ "Máscaras", "mascaras" ],
        [ "Ácido Hialurónico", "acido-hialuronico" ],
        [ "Peeling", "peeling" ],
        [ "Corporales", "corporales" ],
        [ "Hombres", "hombres" ],
        [ "Protección Intensiva", "proteccion-intensiva" ],
        [ "Monodosis", "monodosis" ],
        [ "Activos Concentrados", "activos-concentrados" ],
        [ "Protección Solar", "proteccion-solar" ]
      ]
  },
  "dom-a": {
      title: "Vademecum Apoyo Domiciliario",
      contactInformation: false,
      productFilter: products => Object.keys(products).reduce((acc, x) => {
        var filtered = products[x].filter(p => {
                let v = p.variants.filter(v => v.code < 2000 );
                return v.length || p.category.includes('Protección Solar');
            });
        return {
            ...acc,
            [x]: filtered, 
        }
    }, {}),
      prices: true,
      categories: [
        [ "Higiene", "higiene" ],
        [ "Ácido Hialurónico", "acido-hialuronico" ],
        [ "Corporales", "corporales" ],
        [ "Hombres", "hombres" ],
        [ "Protección Intensiva", "proteccion-intensiva" ],
        [ "Monodosis", "monodosis" ],
        [ "Protección Solar", "proteccion-solar" ]
      ]
  },
  "dom-b": {
      title: "Vademecum Apoyo Domiciliario",
      contactInformation: false,
      productFilter: products => products,
      prices: false,
      categories: [
        [ "Higiene", "higiene" ],
        [ "Ácido Hialurónico", "acido-hialuronico" ],
        [ "Corporales", "corporales" ],
        [ "Hombres", "hombres" ],
        [ "Protección Intensiva", "proteccion-intensiva" ],
        [ "Monodosis", "monodosis" ],
        [ "Protección Solar", "proteccion-solar" ]
      ]
  },
};

const Tag = (label, key, className) => (
  <div className={`chip ${className||''}`} key={key}>{label}</div>
);

const Section = (title, paragraph, prepend) => (
  <div className="section-container">
    <h4 className="section-name">
      { title }
    </h4>
    <p className="section-body" lang="es">
      { prepend }{ paragraph }
    </p>
  </div>
);

const Product = (product, key, prices) => (
  <div className="product-container">
    <div className="row valign-wrapper">
      <div class="col s2">
      {
        prices ? (
          <img 
            src={`images/_img/${product.variants[0].img || product.img}.png`}
            className="responsive-img"
          />
        ) : (
          <img 
            src={`images/_img/${product.img || product.variants[0].img}.png`}
            className="responsive-img"
          />
        )
      }
      </div>
      <div class="col s10">
        <h4 className="primary-title">
          {product.name}
        </h4>
        <div className="product-body">
          <p className="product-short-desc" lang="es">
            {product.shortDesc}
          </p>
          {
            prices && (
              <div className="product-price">
                <div className="price-tag">
                  <h5>
                    <span className="price-symbol">$</span> 
                    <span className="price-total">{product.variants[0].sellPrice}</span>
                    <sup className="price-decimal">00</sup>
                  </h5>
                </div>
                <div className="product-size">Cont. {product.variants[0].content}</div>
              </div>
            )
          }
        </div>
      </div>
    </div>
    <div>
      {
        product.fullDesc && Section('Descripción', product.fullDesc)
      }
      {
        product.application && Section('Aplicación', product.application)
      }
      {
        product.actives &&
        Section(
          '', 
          product.actives.map(p => Tag(p)),
          product.ph && Tag(`PH ${product.ph}`, null, 'is-ph')
        )
      }
    </div>
  </div>
);

const Category = (category, products, prices) => (
  <section id={category[TAG]} className={`container ${prices ? 'dom' : 'prof'}`}>
    <h2 className="category-name">{category[LABEL]}</h2>
    <div className="collection">
      {
        products.map((p, i) => (
          <div className="collection-item">
            { Product(p, i, prices) }
          </div>
        ))
      }
    </div>
  </section>
);

const ToC = (categories, products) => (
  <section id="eba-toc" className="container">
    <h2 className="pagebreak">Indice</h2>
      <div className="">
        {
          categories.map((category, i) => (
            <div>
              <div>
                <a href={`#${category[TAG]}`}> 
                  <h5>{category[LABEL]} <i className="material-icons">chevron_right</i></h5>
                </a>
              </div>
              <div>
                {
                  products[category[LABEL]].map(product => Tag(product.name, null, 'toc-tag'))
                }
              </div>
            </div>
          ))
        }
      </div>
  </section>
)


const Vademecum = (categories, products, prices) => {
  console.log("prices?", prices);
  return categories.map((categoryName, i) => (
    <div key={i}>
      {
        Category(categoryName, products[categoryName[LABEL]], prices)
      }
    </div>
  ))
}

const ContactInformation = () => (
  <section id="contact-information">
    <div className="container">
      <h2 class="pagebreak">Contacto</h2>

      <div class="collection">
        <div class="collection-item">
          <h4 className="primary-title">Argentina</h4>
          <div class="section-container">
            <h4 class="section-name">
              Dirección
            </h4>
            <p class="section-body">
              Leopoldo Marechal 914, Ciudad Autónoma de Buenos Aires
            </p>
          </div>
          <div class="section-container">
            <h4 class="section-name">
              Telefono
            </h4>
            <p class="section-body">
              (+5411) 4139-6860/1
            </p>
          </div>
          <div class="section-container">
            <h4 class="section-name">
              Email
            </h4>
            <p class="section-body">
              consultas@especificosba.com.ar
            </p>
          </div>
        </div>

        <div className="collection-item">
          <h4 className="primary-title">México</h4>
          <div class="section-container">
            <h4 class="section-name">
              Teléfono
            </h4>
            <p class="section-body">
              (+5255)4170-8856
            </p>
          </div>
          <div class="section-container">
            <h4 class="section-name">
              Email
            </h4>
            <p class="section-body">
              contactos@skin-connect.com.mx
            </p>
          </div>
        </div>

        <div className="collection-item">
          <h4 className="primary-title">Ecuador</h4>
          <div class="section-container">
            <h4 class="section-name">
              Dirección
            </h4>
            <p class="section-body">
              Av. Felipe II s/n, Via Mall del Río
            </p>
          </div>
          <div class="section-container">
            <h4 class="section-name">
              Teléfono
            </h4>
            <p class="section-body">
              (+593)07245-5143
              (+593)07288-6258
            </p>
          </div>
          <div class="section-container">
            <h4 class="section-name">
              Email
            </h4>
            <p class="section-body">
              kasanacorp@hotmail.com
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
)
const domContainer = document.querySelector('#vademecum');

const LABEL = 0,
      TAG = 1;

class VademecumData extends React.Component {
  constructor(props) {
    super(props);
    const config = CONFIG[process.env.MODE];
    this.state = {
      config: config,
      categories: config.categories,
      products: null,
    }
    console.log(config);
  }

  componentDidMount() {
    fetch('data/products-by-category.json')
      .then(response => response.json())
      .then(this.state.config.productFilter)
      .then(data => {
        console.log("data", data)
        this.setState({
          products: data,
        })
    })
  }

  render() {
    const { categories, products, config } = this.state;
    if (products) {
      return ( 
        <div>
          { ToC(categories, products) }
          { Vademecum(categories, products, config.prices) }
          { config.contactInformation && ContactInformation() }
        </div>
      )
    } else {
      return (<div></div>);
    }
  }  
}

ReactDOM.render(dom(VademecumData), domContainer);
