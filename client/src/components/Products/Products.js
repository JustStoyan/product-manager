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

    return (
        <>
            <table className={styles.wrapper}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Currency</th>

                    </tr>
                </thead>
                <tbody>
                    {productList && productList.map(product => {
                        return (
                            <tr className={styles.liItem} key={product.id} id={product.id} >
                                <td className={styles.productName}>{product.name}</td>
                                <td className={styles.productPrice}>{product.price}</td>
                                <td className={styles.productCurrency}>{product.currency}</td>
                                <td className={styles.productActions}>
                                    {permissionsTo.permissions.UPDATE && <EditButton />}
                                    {permissionsTo.permissions.DELETE && <DeleteButton onDelete={onDeleteHandler} />}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>

    )



}

export default Products;