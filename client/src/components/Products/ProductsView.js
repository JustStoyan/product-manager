import { useEffect, useState } from 'react';
import Product from './Product';


const ProductsView = props => {

    const [productList, setProductList] = useState(null)



    useEffect(() => {


        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => { setProductList(data) });

    }, [])



    return (
        <div>
            {productList && productList.map(product => {

                return <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    currency={product.currency}
                />
            })}
        </div>

    )
}

export default ProductsView;