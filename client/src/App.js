import ProductsForm from './components/Products/ProductsForm';
import ProductsView from './components/Products/ProductsView';
import PermissionContext from './context/permission-context';
import './App.module.css';
import { useState } from 'react';


function App() {

  const [shouldRerender, setShouldRerender] = useState(false);

  const addingHandler = () => {
    return setShouldRerender((prevState) => prevState = !shouldRerender)
  }

  return (
    <PermissionContext.Provider value={{
      CREATE: true,
      READ: true,
      UPDATE: true,
      DELETE: true,
      RERENDER: addingHandler,
    }} className="App" >
      <ProductsForm onAddedProduct={addingHandler} />
      <ProductsView />
    </PermissionContext.Provider >

  );
}

export default App;
