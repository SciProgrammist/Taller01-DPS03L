import { useEffect, useState } from 'react';
import { Header } from './components/Headers';
import { ProductList } from './components/ProductList'; 
import './App.css';

function App() {
  //Hooks
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  //Para que los elementos solo se rendericen una vez
  useEffect(() => {

  }, [])

  return (
    <>
    <Header
     allProducts = {allProducts}
     setAllProducts = {setAllProducts}
     total = {total}
     setTotal = {setTotal}
     countProducts={countProducts}
     setCountProducts = {setCountProducts}
    />
    <ProductList
     allProducts = {allProducts}
     setAllProducts = {setAllProducts}
     total = {total}
     setTotal = {setTotal}
     countProducts = {countProducts}
     setCountProducts = {setCountProducts}
    />
    </>
  );
}

export default App;
