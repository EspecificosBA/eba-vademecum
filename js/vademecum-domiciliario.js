const dom = React.createElement;

const LABEL = 0,
			TAG = 1;

const Tag = (label, key, className) => (
	<span className={`tag ${className||''}`} key={key}>{label}</span>
);

const Product = (product, withPrice) => (
	<div className="container sell-product-container">
		<div className="columns">
			<div className="column is-2">
				<img src={`images/_img/${product.variants[0].img || 'not-found'}.png`}/>
			</div>
			<div className="column is-8">
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
				<table id={category[TAG]} className="domi-prod">
					<thead>
						<tr><th>
							<h2 className="domi-h2">{category[LABEL]}</h2>
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
						[ "Protección Solar", "proteccion-solar" ]
					],
          products: null,
        }
    }

    componentDidMount() {
			fetch('data/products-by-category.json')
				.then(response => response.json())
				.then(data => {
					const categories = Object.keys(data);
					return categories.reduce((products, categoryName) => {
						const filtered = data[categoryName].filter(product => {
							const valid = product.variants.filter(v => v.code < 2000);
							return valid.length || product.category.includes('Protección Solar'); // Sunscreens are also required for this Vademecum
						});
						return {
							...products,
							[categoryName]: filtered
						}
					}, {})
				})
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