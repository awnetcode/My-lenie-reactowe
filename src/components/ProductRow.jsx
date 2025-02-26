import './styles/productRow.css';

import PropTypes from 'prop-types';

const ProductRow = ({productsArray}) =>{
    

     console.log(productsArray)

    return(
        <>
        <ul className='product-list'>
        {productsArray.map((product, index) => (
                <li key={index} className='product-item'>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                </li>
            ))}
        </ul>
        </>
    )
}

ProductRow.propTypes = {
    productsArray: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductRow;