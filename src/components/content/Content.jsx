import { useEffect, useState } from 'react';
import { allCountry, searchByRegion } from '../../api';
import searchCountry from '../../utils/searchCountry';
import CountryCard from '../country-card/CountryCard';
import Navbar from '../navbar/Navbar';
import './Content.scss';

const Content = () => {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState(null);
  const [cards, setCards] = useState([]);
  const regions = [
    { title: 'Africa', value: 'africa' },
    { title: 'America', value: 'americas' },
    { title: 'Europe', value: 'europe' },
    { title: 'Asia', value: 'asia' },
    { title: 'Oceania', value: 'oceania' },
  ];
  const defaultSelect = 'Filter by region';

  const onSearch = value => {
    setSearch(value);
  };

  const onSelect = value => {
    setSelect(value);
  };

  useEffect(() => {
    (select ? searchByRegion(select) : allCountry).then(({data}) => {
      setCards(searchCountry(data, search));
     
    });
  }, [select, search]);

  return (
    <div className="content">
      <Navbar
        onSearch={onSearch}
        search={search}
        onSelect={onSelect}
        select={select}
        regions={regions}
        defaultSelect={defaultSelect}
      />
      <div className="content-body">
        {cards.map(item => (
          <CountryCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
