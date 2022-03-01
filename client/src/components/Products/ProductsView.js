import { useEffect } from 'react';
import Product from './Product';


const ProductsView = props => {

    const products = [];

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => data.forEach(product => products.push(product)))

    })



    return (
        <div>
            {products.map(product => {

                return <Product key={product.id} name={product.name} price={product.price} currency={product.currency} />
            })}
        </div>

    )
}

export default ProductsView;