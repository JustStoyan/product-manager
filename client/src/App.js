import ProductsForm from './components/Products/ProductsForm';
import ProductsView from './components/Products/ProductsView';
import PermissionContext from './context/permission-context';
import './App.module.css';





function App() {
  return (
    <PermissionContext.Provider value={{
      "CREATE": true,
      "READ": true,
      "UPDATE": true,
      "DELETE": true
    }} className="App">

      <ProductsForm />
      <ProductsView />
    </PermissionContext.Provider>
  );
}

export default App;
