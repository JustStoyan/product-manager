import { useContext } from 'react';

import PermissionContext from '../../context/permission-context'
import Products from './Products';
import styles from './ProductsView.module.css'


const ProductsView = props => {


    const permissionsTo = useContext(PermissionContext)

    return (
        <>
            {
                permissionsTo.READ && < div className={styles.wrapper}>
                    <ul className={styles.list} ><Products /></ul>
                </div >
            }
        </>
    )
}

export default ProductsView;