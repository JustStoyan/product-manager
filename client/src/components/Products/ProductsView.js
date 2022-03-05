import { useContext } from 'react';

import PermissionContext from '../../context/permission-context'
import Products from './Products';
import styles from './ProductsView.module.css'


const ProductsView = props => {


    const permissions = useContext(PermissionContext)

    return (
        <>
            {
                permissions.permissions.READ && < div className={styles.wrapper}>

                    <ul className={styles.productList} >
                        <h2 className={styles.title}>Products</h2>
                        <Products />
                    </ul>
                </div >
            }
        </>
    )
}

export default ProductsView;