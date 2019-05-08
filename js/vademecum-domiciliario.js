const dom = React.createElement;

const LABEL = 0,
			TAG = 1;

const Tag = (label, key, className) => (
	<span className={`tag ${className||''}`} key={key}>{label}</span>
);

const Product = (product, withPrice) => (
	<div className="container sell-product-container">
		<div className="columns">
			<div className="column is-10">
				<h4>{ product.name }</h4>
				<p>{ product.shortDesc || product.fullDesc}</p>
				<div className="tags">
					{
						product.ph && Tag(`PH ${product.ph}`, null, 'is-ph')
					}
					{
						product.actives.map(a => Tag(a))
					}
				</div>
			</div>
			<div className="column is-2">
					<div className="price-tag">
						<h5>
							<span className="price-symbol">$</span> 
							<span className="price-total">{product.variants[0].sellPrice}</span>
							<sup className="price-decimal">00</sup>
						</h5>
					</div>
					<div className="product-size">Cont. {product.variants[0].content}</div>
			</div>
		</div>
	</div>
);

const ProductList = (products, categories) => (
	<div>
		{
			categories.map(category => (
				<table id={category[TAG]}>
					<thead>
						<tr><th>
							<h2>{category[LABEL]}</h2>
						</th></tr>
					</thead>
					<tbody>
						{
							products[category[LABEL]].map(product => (
								<tr><td>
									{ Product(product) }
								</td></tr>
							))
						}
					</tbody>
				</table>
			))
		}
	</div>
);

class VademecumDomiciliario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
					categories: [
						[ "Higiene", "higiene" ],
						[ "Ácido Hialurónico", "acido-hialuronico" ],
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
			fetch('data/products-home.json')
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
						{ ProductList(products, categories) }
					</div>
				)
			} else {
				return (<div></div>);
			}
		}
}

const domContainer = document.querySelector('#vademecum-domiciliario');

ReactDOM.render(React.createElement(VademecumDomiciliario), domContainer);