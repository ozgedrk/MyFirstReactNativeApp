import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Information from '../../Components/Information';

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
        <Information 
          title="Angular Egitimi" 
          imageSource={require('../../assets/angular.jpg')} 
          desc="Kapsamli Angular Egitimi"
        />
         <Information 
          title="Bootstrap5 Egitimi" 
          imageSource={require('../../assets/bootstrap5.png')} 
          desc="Kapsamli Bootstrap Egitimi"
        />
         <Information 
          title="C Programlama Egitimi" 
          imageSource={require('../../assets/c.png')} 
          desc="Kapsamli C Programlama Egitimi"
        />

    </ScrollView>
  )
}

const styles = StyleSheet.create({})