import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error('Błąd pobierania danych:', error);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList products={products} />
    },
    {
      path: "details/:id",
      element: <ProductDetail products={products} />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;