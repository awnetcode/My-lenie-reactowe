import './styles/productRow.css';

import products from '../assets/data.json';


const ProductRow = () =>{
    
    //console.log(products.products);
     

    return(
        <>
        <ul>
            {products.products.map((item, index) =>{
                    <li key={index}>lol</li>
                })
}
        </ul>
        </>
    )
}

export default ProductRow;