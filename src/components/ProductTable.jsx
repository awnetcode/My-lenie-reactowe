import './styles/productTable.css';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

import products from '../assets/data.json';

const ProductTable = () =>{

    console.log(products);

    const name = products.name;
    return(
        <>
        <ProductCategoryRow/>
        <ProductRow name={name}/>
        </>
    )
}

export default ProductTable;