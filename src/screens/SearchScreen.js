import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('term submitted')}
      />
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
