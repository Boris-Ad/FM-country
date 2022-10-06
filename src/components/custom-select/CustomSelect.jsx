import './CustomSelect.scss';
import { IoChevronDown, IoClose } from 'react-icons/io5';
import { useState } from 'react';

const CustomSelect = ({ select, onSelect, regions, defaultSelect }) => {
  const [dropSelect, setDropSelect] = useState(false);
  const [value,setValue] = useState(defaultSelect)

  const setRegion = (regionValue,regionTitle) => {
    onSelect(regionValue)
    setValue(regionTitle)
    setDropSelect(false)
  }

  const onDefaultSelect = (e) => {
    e.stopPropagation()
    setValue(defaultSelect)
    onSelect(null)
  }

  return (
    <div className="custom-select">
      <div className="select" onClick={() => setDropSelect(prev => !prev)}>
        <span>{value}</span>
        {select !== null && <IoClose onClick={onDefaultSelect} />}
        
        <div className="border"></div>
        <IoChevronDown />
      </div>
      {dropSelect && (
        <ul className="dropdown-list">
          {regions.map(item => (
            <li key={item.value} onClick={() => setRegion(item.value,item.title)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
