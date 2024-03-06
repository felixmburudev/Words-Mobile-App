
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
// import CustomHeader from '../components/CustomHeader';
const HomeScreen = () => {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState("")     
  const [isConnected, setIsConnected] = useState(null);
  // const [meaning, setMeaning] = useState('');
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    fetchWords();
  }, []);
  useEffect(()=>{
    getTheMeaning(word)
  },[word])

  const fetchWords = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=20');
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  };
  const getTheMeaning = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
  
      const heading = `Meaning of "${word}":`;
      const definition = data[0]?.meanings[0]?.definitions[0]?.definition || 'Meaning not found';
      const example = data[0]?.meanings[0]?.definitions[0]?.example || 'No example found';
  
      const customAlertMessage = `${heading}\n${definition}\n\nExample: ${example}`;
  
      alert(customAlertMessage);
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  };
  

  const renderItem = ({ item }) => (
    
      
    <View style={styles.item}>
      <Text style={styles.textS} 
      onPress={() => {
        setWord(item);
      }} 
      >{item}</Text>
      
    </View>
  );

  return (
    <View style={styles.container}>      
       {/* <CustomHeader/> */}
      {isConnected ? (
        <>
        <Button style={styles.buttonStyle} title="reload" onPress={fetchWords} />
        <FlatList
          data={words}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        /></>
      ) : (
        <Text >LOADING ...</Text>
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  textS:{
    fontSize: 20,
    backgroundColor: '#fff',
  },
  buttonStyle :{
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#3F51B5',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    minWidth: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
  },
});


export default HomeScreen;
