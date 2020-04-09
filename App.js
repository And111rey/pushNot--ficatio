import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { database } from "./src/firebase"

export default function App() {
  const [data, setData] = useState(null)
  const [newData, setNewData] = useState("")




  useEffect(() => {
    database.ref('/').on("child_added", (snapshot) => {
      console.log("Hello", snapshot.val())
      setData(snapshot.val())
    })
  }, [])



  
  
  const hundleSubmty = () => {
    database.ref('/AMAZINGNEWDATA/lalala/')
        //.child("AMAZINGNEWDATA") // in firebase we will see { "AMAZINGNEWDATA": newData }
        //.push(newData)
        .set(newData)     // with this method we can set some data to { "AMAZINGNEWDATA": "..some data..." }
  }
  
  return (
    <View style={styles.container}>

  <Text>{JSON.stringify(data, null, 2)}</Text>
    <View>
      <TextInput value={newData} onChangeText={setNewData}/>  
    </View>
      <Button title="BTN" onPress={hundleSubmty} />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
