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

                    <div className={styles.productsList} >
                        <h2 className={styles.title}>Products</h2>
                        <Products />
                    </div>
                </div >
            }
        </>
    )
}

export default ProductsView;