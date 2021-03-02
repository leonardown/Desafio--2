import './Product.css';
import Button from '../Button';
import {API_URL} from '../../App';

function Product({ product, loadProducts }) {
  const incrementRating = async (id) => {
    await fetch(`${API_URL}/produtos/${id}`, {method: 'PUT'})
      .then(_ => {
        loadProducts();
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  return (
    <li className="product">
      <picture>
        <img alt={product.title} src={product.image} />
      </picture>
      <h3>{product.title}</h3>
      <p>{`Descrição: ${product.description}`}</p>
      <p>{`Categoria: ${product.category}`}</p>
      <p><small>{`Pontuação: ${product.rating / 100}`}</small></p>
      <Button onClick={() => incrementRating(product.id)}>Tenho interesse</Button>
    </li>
  )
}

export default Product