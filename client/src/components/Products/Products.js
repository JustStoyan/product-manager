import { useEffect, useState, useContext } from "react";
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';
import PermissionContext from "../../context/permission-context";
import styles from './Products.module.css'




const Products = props => {
    const [productList, setProductList] = useState([]);
    const permissionsTo = useContext(PermissionContext);


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/products')
                .then(res => res.json())
                .then(data => { setProductList([...data]) });
        }, 100)


    }, [permissionsTo.RERENDER]);


    const onDeleteHandler = id => {
        const newProductList = productList.filter(product => product.id !== Number(id));
        setProductList(newProductList);
    }

    const onEditHandler = id => {

    }

    return (
        <>

            {productList && productList.map(product => {
                return (
                    <li className={styles.liItem} key={product.id} id={product.id} >
                        Name:<span id="product-name">{product.name}</span>
                        Price:<span id="product-price">{product.price}</span>
                        <span id="product-currency">{product.currency}</span>
                        {permissionsTo.permissions.UPDATE && <EditButton onEdit={onEditHandler} />}
                        {permissionsTo.permissions.DELETE && <DeleteButton onDelete={onDeleteHandler} />}
                    </li>
                )
            })}
        </>
    )



}

export default Products;