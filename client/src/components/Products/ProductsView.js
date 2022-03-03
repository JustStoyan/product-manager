import {useContext } from 'react';
import PermissionContext from '../../context/permission-context';

import Products from './Products';


const ProductsView = props => {


    const permissionsTo = useContext(PermissionContext)

    return (
        <>
            {permissionsTo.READ && <ul> <Products /></ul>}
        </>
    )
}

export default ProductsView;