
import CustomSelect from '../custom-select/CustomSelect'
import Search from '../search/Search'
import './Navbar.scss'

const Navbar = ({onSearch,search,onSelect,select,regions,defaultSelect}) => {
    
return (
    <nav className="navbar">
        <Search  onSearch={onSearch} search={search}/>
        <CustomSelect onSelect={onSelect} select={select} regions={regions} defaultSelect={defaultSelect} />
    </nav>
)
}

export default Navbar