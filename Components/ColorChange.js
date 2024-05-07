import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function ColorChange({color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`${color} arttir`} onPress={() =>onIncrease()}/> 
      <Button title={`${color} azalt`} onPress={() =>onDecrease()}/> 
    </View>
  )
}

const styles = StyleSheet.create({})