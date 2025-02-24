import './styles/searchBar.css';

const SearchBar = () =>{

    return(
        <>
        <div id="search-bar">
            <input type="text" placeholder='Search...' className='search-input'/>
            <label htmlFor="onStock">
            <input type="checkbox" id='onStock' className='stock-box'/>
                Only show products in stock
            </label>
        </div>
        
        </>
    )
}

export default SearchBar