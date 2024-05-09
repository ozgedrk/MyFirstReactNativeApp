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
        <Button
         title="Sayac Uygulamasi"
         onPress={() => navigation.navigate('Sayac')}
       />
        <Button
         title="Kutu Uygulamasi"
         onPress={() => navigation.navigate('Kutu Uygulamasi')}
       />
        <Button
         title="Renk Degistir"
         onPress={() => navigation.navigate('Renk Degistir')}
       />
        <Button
         title="Sifre Ekrani"
         onPress={() => navigation.navigate('Sifre Ekrani')}
       />
               <Button
         title="Design Ekrani"
         onPress={() => navigation.navigate('Design Ekrani')}
       />
    </View>
  )
}

const styles = StyleSheet.create({})