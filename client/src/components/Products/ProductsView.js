import { useEffect, useState, useContext } from 'react';
import PermissionContext from '../../context/permission-context';
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';
import Product from './Product';



const ProductsView = props => {

    const [productList, setProductList] = useState(null);



    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => { setProductList(data) });

    }, [])

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Currency</th>
                <th>Actions</th>
            </tr>

            {productList && productList.map(product => {
                return (
                    <>
                        <Product
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            currency={product.currency}
                            actions={[<EditButton />, <DeleteButton />]}
                        />
                    </>
                )
            })}
        </table>

    )
}

export default ProductsView;