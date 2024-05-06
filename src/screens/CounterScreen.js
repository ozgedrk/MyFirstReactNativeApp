import { StyleSheet, Text, View , Button} from 'react-native'
import React, {useState} from 'react'

export default function CounterScreen() {
    const [counter, setCounter] = useState(0)
  return (
    <View>
        <Button title='Arttir' onPress={()=>{
            setCounter(counter + 1);
        }}/>
        <Button title='Azalt' onPress={()=>{
            setCounter(counter - 1);
        }}/>
        <Text>Sayi: {counter} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})