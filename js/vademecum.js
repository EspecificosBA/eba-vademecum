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
        <h4 className="product-name">
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
    <div className="divider"></div>
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
    <div class="col s8">
      {
        categories.map((category, i) => (
          <div>
            <div>
              <a href={`#${category[TAG]}`}> 
                <h5>{category[LABEL]} <i className="material-icons">chevron_right</i></h5>
              </a>
            </div>
            {
              products[category[LABEL]].map(product => (
                <div>
                  { product.name }
                </div>
              ))
            }
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
    if (products) {
      return ( 
        <div>
          { ToC(categories, products) }
          { Vademecum(categories, products, config.prices) }
        </div>
      )
    } else {
      return (<div></div>);
    }
  }  
}

ReactDOM.render(dom(VademecumData), domContainer);
