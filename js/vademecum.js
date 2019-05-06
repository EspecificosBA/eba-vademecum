'use strict';

const dom = React.createElement;

const Tag = (label, key, className) => (
  <span className={`tag ${className||''}`} key={key}>{label}</span>
);

const Section = (title, paragraph, prepend) => (
  <div className="section-container">
    <h4 className="section-name">
      { title }
    </h4>
    <p className="section-body">
      { prepend }{ paragraph }
    </p>
  </div>
);

const Product = (product, key) => (
  <div className="product-container">
    <h3 className="product-name">
      {product.name}
    </h3>
    <div className="product-body">
      <p className="product-short-desc">
        {product.shortDesc}
      </p>
      {
        Section('Descripción', product.fullDesc)
      }
      {
        product.application && Section('Aplicación', product.application)
      }
      {
        product.actives &&
          Section(
            'Activos',
            product.actives.join(', '),
            product.ph && Tag(`PH ${product.ph}`, null, 'is-ph')
          )
      }
    </div>
  </div>
);

const Category = (category, products) => (
  <table className="category-container table is-fullwidth">
    <thead className="category" id={category[TAG]}>
      <tr>
        <th>
          <h2 className="category-name">{category[LABEL]}</h2>
        </th>
      </tr>
    </thead>
    <tbody>
      {
        products.map((p, i) => (
          <tr><td>
            { Product(p, i) }
          </td></tr>
        ))
      }
    </tbody>
    <tfoot><tr><td>
      <div class="footer-space" height="20px">&nbsp;</div>
    </td></tr></tfoot>
  </table>
);

const ToC = (categories, products) => (
  <table className='toc-table table is-fullwidth'>
    <thead>
      <tr><th><h2>Indice</h2></th></tr>
    </thead>
    <tbody>
    {
      categories.map((category, i) => (
        <tr><td>
          <div className='toc-section'>
            <div>
              <a href={`#${category[TAG]}`} className='toc-title'>{category[LABEL]} 
                <img src="images/arrow.png" className="toc-goto"/>
              </a>
            </div>
            {
              products[category[LABEL]].map(product => (
                <div className='toc-content'>
                  { product.name }
                </div>
              ))
            }
          </div>
        </td></tr>
      ))
    }  
    </tbody>
  </table>
)


const Vademecum = (categories, products) => {
  return categories.map((categoryName, i) => (
    <div key={i}>
      {
        Category(categoryName, products[categoryName[LABEL]])
      }
    </div>
  ))
}

const domContainer = document.querySelector('#vademecum');

const LABEL = 0,
      TAG = 1;

fetch('data/products-by-category.json').then(response => response.json()).then(data => {
  console.log('data', data);
});

class VademecumData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ],
      products: null,
    }
  }

  componentDidMount() {
    fetch('data/products-by-category.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data,
        })
    })
  }

  render() {
    const { categories, products } = this.state;
    if (products) {
      return ( 
        <div>
          { ToC(categories, products) }
          { Vademecum(categories, products) }
        </div>
      )
    } else {
      return (<div></div>);
    }
  }  
}

ReactDOM.render(dom(VademecumData), domContainer);

