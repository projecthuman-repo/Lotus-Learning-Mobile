import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'

//MAIN APP COMPONENT
export default function WordMatch() {
  const [wordMatches, setWordMatches] = useState([
    {
      id: 'simple',
      title: 'Simple',
    },
    {
      id: 'apple',
      title: 'Apple',
    },
    {
      id: 'pear',
      title: 'Pear',
    },
    {
      id: 'existentialism',
      title: 'Existentialism',
    },
    {
      id: 'human-city',
      title: 'UNICEF',
    }
  ]);
  const [wordGuesses, setWordGuesses] = useState([
    {
      id: 'simple',
      title: 'To be uncomplicated.'
    },
    {
      id: 'apple',
      title: 'A red fruit with a yellow interior.'
    },
    {
      id: 'pear',
      title: 'Often green, but can be yellow. A fruit.'
    },
    {
      id: 'existentialism',
      title: 'A philosophical theory'
    },
    {
      id: 'human-city',
      title: 'An initiative built on sustainability.'
    }
  ]);

  const [wordStore, setWordStore] = useState(null);
  const swapFunction = (first_id) => {
    if(first_id != wordStore || first_id != 0){
      let old = wordGuesses;
      let temp = old[first_id];

      
      old[first_id] = old[wordStore];
      old[wordStore] = temp;

      setWordGuesses(old)
    }
    setWordStore(null)
  };

  const [corrections, setCorrections] = useState(true);

  const validateWords = (guess, match) => {
    let corr = true;
    setCorrections(true);
    let arr = [];

    for(let i=0; i<guess.length; i++){
      if(guess[i].id !== match[i].id){
        corr = false;
        setCorrections(false);
        arr.push(i);
      }
    }

    if(corr!==true){
      let output = ' ';

      arr.forEach((n,i) => {
        output += n;

        // last item in array
        if (arr.length - 1 !== i) output += ', ';
      });

      Alert.alert("answers are incorrect" + output)
    }
    else{
      Alert.alert("answers are correct")
    }

  }

  return (
    <View style={styles.viewport}>

      <View style={styles.content_frame}>
        <View style={styles.words_container}>
          {wordMatches.map((item,index)=>
            <View style={styles.words_frame} key={item.id}>
                <Text style={styles.words_text}>{item.title}</Text>
            </View>
          )}
        </View>

        <View style={styles.guesses_container}>
          {wordGuesses.map((item,index)=>
            <View style={styles.guesses_frame} key={item.id}>

              <TouchableOpacity onPress={()=> wordStore===null ? setWordStore(index) : swapFunction(index)}>
                <Text style={[styles.guesses_text, {color: wordStore==index ? '#777' : '#000'}]}>{item.title}</Text>
              </TouchableOpacity>

            </View>
          )}
        </View>

      </View>
      

      <View style={styles.problem_selection}>
        <Text style={styles.problem_desc}>Match the Words</Text>
      </View>

      <View style={styles.button_container}>
        <TouchableOpacity onPress={()=>validateWords(wordMatches, wordGuesses)}>
          <Text style={styles.button_submit}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
     
      <StatusBar style="auto" />
  

    </View>
  );
}

const styles = StyleSheet.create({
  guesses_container: {
    height: '100%',
    width: '50%',
    position: 'absolute',
    justifyContent: 'center',
    right: '2%',
    marginTop: 14
  },
  guesses_frame: {
    marginBottom: 40
  },
  words_container: {
    height: '100%',
    width: '50%',
    left: '-17.5%',
    justifyContent: 'center'
  },
  words_frame: {
    borderWidth: 0,
    marginBottom: 40,
    flexDirection: 'row',
  },
  words_text: {
    color: '#2699FB',
    fontSize: 20,
    fontWeight: '800'
  },
  viewport: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#FFFFFF',
    alignItems: 'center',
  },
  content_frame:{
    marginTop: 60,
    height: 450,
    width: 342,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  problem_selection: {
    flexDirection: 'row',
    top: '5%',
    width: 327,
    height: 42,
    alignItems: 'center',
    backgroundColor: '#E5EFF5',
    borderRadius: 5
  },
  problem_desc: {
    color: '#2699FB',
    marginHorizontal: '33%',
    width: 327,
  },
  button_container: {
    top: '5%',
    width: 327,
    height: 48,
    backgroundColor: '#2699FB',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button_submit: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 18
  }
});
