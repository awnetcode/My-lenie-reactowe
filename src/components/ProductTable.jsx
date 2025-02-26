import './styles/productTable.css';

import { useState, useEffect } from 'react';


import data from '../assets/data.json';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = () =>{

    const [productsArray, setProductsArray] = useState([]);

   useEffect(()=>{
    setProductsArray(data.products);
    },[]);



    return(
        <>
        <ProductCategoryRow/>
        <ProductRow productsArray={productsArray}/>
        </>
    )
}



export default ProductTable;