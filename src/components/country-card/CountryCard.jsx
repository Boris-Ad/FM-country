import { useNavigate } from 'react-router-dom';
import countryPage from '../../utils/pathCountryPage';
import './CountryCard.scss';

const CountryCard = ({ flag, name, population, region, capital, alpha3Code, borders = [] }) => {
  const navigate = useNavigate();
  const codeCountryAndBorders = [alpha3Code, ...borders];

  return (
    <div className="card" onClick={() => navigate('/' + countryPage(name), { state: { codeCountryAndBorders } })}>
      <img src={flag} alt={name} />
      <div className="card-body">
        <div className="card-title">{name}</div>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
