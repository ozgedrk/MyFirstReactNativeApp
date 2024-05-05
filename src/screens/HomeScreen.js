import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Ana Sayfa </Text>
       <Button
         title="Kurslarim"
         onPress={() => navigation.navigate('Kurslarim')}
       />
         <Button
         title="Kurs Bilgilerim"
         onPress={() => navigation.navigate('KursBilgilerim')}
       />
    </View>
  )
}

const styles = StyleSheet.create({})