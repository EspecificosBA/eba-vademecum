'use strict';

const dom = React.createElement;

const CONFIG = {
  "prof-a": {
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
      contactInformation: false,
      productFilter: products => products,
      prices: true,
  },
  "dom-a": {
      contactInformation: false,
      productFilter: products => products,
      prices: false,
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

const Product = (product, key) => (
  <div className="product-container">
    <div className="row valign-wrapper">
      <div class="col s2">
        <img 
          src={`images/_img/${product.img || product.variants[0].img}.png`}
          className="responsive-img"
        />
      </div>
      <div class="col s10">
        <h4 className="primary-title">
          {product.name}
        </h4>
        <div className="product-body">
          <p className="product-short-desc" lang="es">
            {product.shortDesc}
          </p>
        </div>
      </div>
    </div>
    <div>
      {
        Section('Descripción', product.fullDesc)
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
  <section id={category[TAG]} className="container">
    <h2 className="category-name">{category[LABEL]}</h2>
    <div className="collection">
      {
        products.map((p, i) => (
          <div className="collection-item">
            { Product(p, i) }
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
              Luis Cordero 1254, Cuenca, Azuay
            </p>
          </div>
          <div class="section-container">
            <h4 class="section-name">
              Teléfono
            </h4>
            <p class="section-body">
              (+593)07283-5550
              (+593)07284-1207
            </p>
          </div>
          <div class="section-container">
            <h4 class="section-name">
              Email
            </h4>
            <p class="section-body">
              casamonickaventas@yahoo.com
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
        this.setState({
          products: data,
        })
    })
  }

  render() {
    const { categories, products, config } = this.state;
    console.log(config.contactInformation);
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
