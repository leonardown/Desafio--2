import {useEffect, useState} from 'react';
import Product from '../../components/Product';
import {API_URL} from '../../App';

function Home({ urlAPI }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = async () => {
    const response = await fetch(`${API_URL}/produtos`);
    const data = await response.json();
    setProducts(data);
  }

  return (
		<div>
			<h2>Produtos</h2>
			<ul className="list">
				{products.map(product => (
					<Product key={product.id} product={product} loadProducts={loadProducts} />
				))}
			</ul>
		</div>
	)
}

export default Home