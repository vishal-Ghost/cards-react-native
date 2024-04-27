import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FixedCards from './Component/FixedCards'
import ElevatedCards from './Component/ElevatedCards'
import TouchBotton from './Component/TouchBotton'
import Infocards from './Component/Infocards'

const App = () => {
  return (
<SafeAreaView>
  <ScrollView>
  <FixedCards/>
  <ElevatedCards/>
  <Infocards/>
  <Infocards/>
  </ScrollView>
</SafeAreaView>
  )
}

export default App