
import { IoSearch } from 'react-icons/io5';
import './Search.scss';

const Search = ({onSearch,search}) => {
  
return (
    <div className="search">
      <IoSearch />
      <input type="text" placeholder='Search for a country' value={search} onChange={e => onSearch(e.target.value)} />
    </div>
  );
};

export default Search;
