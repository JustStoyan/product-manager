import ProductsForm from './components/Products/ProductsForm';
import ProductsView from './components/Products/ProductsView';
import PermissionContext from './context/permission-context';
import styles from './App.module.css';
import { useState } from 'react';


function App() {

  const [shouldRerender, setShouldRerender] = useState(false);

  const addingHandler = () => {
    return setShouldRerender((prevState) => prevState = !shouldRerender)
  }

  return (

    <div className={styles.wrapper}>
      <PermissionContext.Provider value={{
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
        RERENDER: addingHandler,
      }}>
        <ProductsForm onAddedProduct={addingHandler} />
        <ProductsView />
      </PermissionContext.Provider >
    </div>

  );
}

export default App;
