import { useEffect, useState, useContext } from "react";
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';
import PermissionContext from "../../context/permission-context";
import DeleteProductPopUp from '../PopUps/DeleteProductPopUp';




const Products = props => {
    const [productList, setProductList] = useState([]);
    const permissionsTo = useContext(PermissionContext);


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/products')
                .then(res => res.json())
                .then(data => { setProductList(data) });
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
                    <li key={product.id} id={product.id} >
                        {product.name} {product.price} {product.currency} {permissionsTo.UPDATE && <EditButton onEdit={onEditHandler} />} {permissionsTo.DELETE && <DeleteButton onDelete={onDeleteHandler} />}
                    </li>
                )
            })}
        </>
    )



}

export default Products;