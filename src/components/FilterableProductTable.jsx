import './styles/filterableProductTable.css';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = () =>{


    return(
        <>
        <div id="product-table">
        <SearchBar/>
        <ProductTable/>
        </div>
        </>
    )
}

export default FilterableProductTable;