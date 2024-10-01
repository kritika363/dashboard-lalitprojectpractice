'use client'
import React from 'react';
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import styles from "./product.module.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Products = ({ prod }: any) => {

   const [productData, setProductData] = useState <any[]>(prod || []);
   const [SearchProduct, setSearchProduct] =useState<string>("");
  //  const [limit, setLimit] = useState< null | number>(null);
  //  const [isLoading, setLoading] = useState(false)

   useEffect(() => {
        const fetchProduct = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json(); // Await the result of res.json()
        
        // Check if products exist in the response
        if (data && data.products) {
          setProductData(data.products); // Safely set product data if it exists
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProduct();
    setProductData(prod);
      },[]);



  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(e.target.value.toLowerCase());
  };

  // Filter products based on the search term
  const filteredProducts = productData?.filter(product =>
    product.title.toLowerCase().includes(SearchProduct) 
  );

  return (
    <>
      <Breadcrumb pageName="Products" />
      <div className="search__input flex  justify-end mb-5">
        <input type="text"  value={SearchProduct} onChange={handleSearchChange} id="inputId" placeholder="Search product" className="px-4 py-3 rounded border-2 border-solid border-slate-500  bg-green outline-none border-none " /></div>

        <div className='products-box grid grid-cols-3 gap-4'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: any) => (
            <div className={styles.productinner} key={product.id}>
              <h2 className={styles.heading}>
                <Link href="">{product.title}</Link>
              </h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>



  )
}

export default Products
