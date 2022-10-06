import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import './Country.scss';
import { useEffect, useState } from 'react';
import { searchByCode } from '../../api';
import getData from '../../utils/getDataFromResponse';
import countryPage from '../../utils/pathCountryPage';

const Country = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [load, setLoad] = useState(false);
  const [information, setInformation] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);

  const { name, flag, capital, population, region, nativeName, subregion, currencies, languages, topLevelDomain } =
    information;

  const leftColumn = [
    { key: 'Native Name', values: nativeName },
    { key: 'Population', values: population },
    { key: 'Region', values: region },
    { key: 'Sub Region', values: subregion },
    { key: 'Capital', values: capital },
  ];

  const rightColumn = [
    { key: 'Top Level Domain', values: getData(topLevelDomain).join(',') },
    { key: 'Currencies', values: getData(currencies).join(',') },
    { key: 'Languages', values: getData(languages).join(',') },
  ];

  useEffect(() => {
    setLoad(true);
    searchByCode(location.state.codeCountryAndBorders)
      .then(({ data }) => {
        const [currentCountry, ...other] = data;
        setInformation(currentCountry);
        setBorderCountries(other);
        setLoad(false);
      })
      .catch(err => new Error(err.message));
  }, [location.state.codeCountryAndBorders]);

  return (
    <div className="country-page">
      <button onClick={() => navigate(-1)}>
        <IoArrowBack className="arrow" />
        Back
      </button>
      {load ? (
        <h3>Load...</h3>
      ) : (
        <div className="country-page__body">
          <img src={flag} alt={name} />
          <div className="body-content">
            <h1 className="content-title">{name}</h1>
            <div className="content-list">
              <ul className="list-left">
                {leftColumn.map(item => (
                  <li key={item.key}>
                    {item.key}: {item.values}
                  </li>
                ))}
              </ul>

              <ul className="list-right">
                {rightColumn.map(item => (
                  <li key={item.key}>
                    {item.key}: {item.values}
                  </li>
                ))}
              </ul>
            </div>
            <div className="content-footer">
              <span>Border Countries:</span>
              {borderCountries.map(item => (
                <Link
                className='link'
                  key={item.alpha3Code}
                  to={'/' + countryPage(item.name)}
                  state={{ codeCountryAndBorders: [item.alpha3Code, ...item.borders] }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
