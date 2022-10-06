import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://restcountries.com/v2',
});

const params = {
  fields: 'name,flag,capital,population,region,borders,alpha3Code',
};
const paramsForCode =
  'name,flag,capital,population,region,nativeName,subregion,borders,currencies,languages,topLevelDomain,alpha3Code';

const allCountry = instance({ url: '/all', params });
const searchByRegion = region => instance({ url: '/region/' + region, params });
const searchByCode = codes => instance({ url: '/alpha/', params: { codes: codes.join(','), fields: paramsForCode } });

export { allCountry, searchByRegion, searchByCode };

