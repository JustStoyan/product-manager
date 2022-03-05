import ProductsForm from './components/Products/ProductsForm';
import ProductsView from './components/Products/ProductsView';
import PermissionContext from './context/permission-context';
import PermissionManager from './components/PermissionManager/PermissionManager';
import styles from './App.module.css';
import { useEffect, useState } from 'react';


function App() {

  const [shouldRerender, setShouldRerender] = useState(false);
  const [rights, setRights] = useState({});
  

  const addingHandler = () => {
    return setShouldRerender((prevState) => prevState = !shouldRerender)
  }

  useEffect(() => {
    fetch('http://localhost:8000/permissions', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => setRights((prevRights) => prevRights = { ...res }))
  }, [shouldRerender]);


  return (

    <div className={styles.wrapper}>
      <PermissionContext.Provider value={{
        permissions: rights,
        RERENDER: addingHandler,
      }}>
        <PermissionManager  permissions={rights} />
        <ProductsForm onAddedProduct={addingHandler} />
        <ProductsView />
      </PermissionContext.Provider >
    </div>

  );
}

export default App;
