import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // using async & awaits as .get() is asynchronous function - substitute is .then()
  const searchApi = async (searchTerm) => {
    console.log('he');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          //term: term,
          //term, // we can condense upper param to this thanks to es2015
          term: searchTerm,
          location: 'warsaw',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
