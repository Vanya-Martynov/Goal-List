import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, NativeSyntheticEvent, TextInputChangeEventData, Modal, Image } from 'react-native';
const imageGoal = require("../../assets/goal.png")

export default function ControlGoal({ saveMyGoal, visible, onCancel }) {
    const [enteredGoal, setEnteredGoal] = useState("");
  
    const storeUserGoal = (typedGoal: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setEnteredGoal((typedGoal.target as any).value);
    }
    return <Modal visible={ visible } animationType="slide">
      <View style={ styles.goalsControl }>
        <Image style={ styles.image } source={ imageGoal }></Image>
        <TextInput onChange={ storeUserGoal } style={ styles.goalsInput } placeholder='My goal' />
        <View style={ styles.buttonContainer }>
          <View style={ styles.button }>
            <Button onPress={() => saveMyGoal(enteredGoal)} color="#b180f0" title='Add My goal'/>
          </View>
          <View style={ styles.button }>
            <Button title='Cancel' color={"#f31282"} onPress={ onCancel }></Button>
          </View>
        </View>
      </View>
    </Modal>
}

const styles = StyleSheet.create({
    goalsControl: {
      padding: 8,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#311b6b"
    },
    image: {
      height: 100,
      width: 100,
      margin: 20
    },
    button: {
      width: "100",
      marginHorizontal: 5
    },
    buttonContainer: {
      marginTop: 5,
      flexDirection: "row"
    },
    goalsInput: {
      borderWidth: 1,
      width: "100%",
      borderColor: "#e4d0ff",
      backgroundColor: "#e4d0ff",
      borderRadius: 4,
      color: "#120438",
      padding: 16
    },
  });