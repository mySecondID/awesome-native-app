import React from 'react'
import {
  View, 
  Text, 
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  ScrollViewBase,
  ScrollView
} from 'react-native'
import FlatCard from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'


const styles = StyleSheet.create({
  outer:{
  }
})


function App(): JSX.Element{
  const isDark = useColorScheme() === "dark"
  return (
    <SafeAreaView style = {styles.outer}>
      <ScrollView>
      <FlatCard/>
      <ElevatedCards/>
      <ElevatedCards/>
      <ElevatedCards/>
      <ElevatedCards/>
      <FancyCards/>
      <FancyCards/>
      <ActionCard/>
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;
