import React, {useState} from 'react';
import {Button, TextInput, StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
    setEnteredGoalText('');
  };

  const getPastelColor = (index) => {
    const colors = ['#B4B4B8', '#C7C8CC', '#E3E1D9', '#F2EFE5', '#B5C0D0', '#CCD3CA', '#F5E8DD']; //pwede palitan ibang colors
    return { backgroundColor: colors[index % colors.length] };
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='My Goal'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="My Goal" onPress={addGoalHandler} />
      </View>

      <FlatList data = {courseGoals}
       renderItem={({item, index }) => (
          <View style={[styles.goalsContainer, getPastelColor(index)]}>
            <Text style={styles.textMod}>&bull;<Text>{item}</Text></Text> 
          </View> //text with bullet
        )}
        keyExtractor={ (index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderColor: '#CCCC',
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    paddingTop: 20,
    padding: 10,
    marginTop: 5,
  },
  textMod: {
    fontSize:20,
  }
});
