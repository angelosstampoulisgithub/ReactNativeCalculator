import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const MAX_NUMBERS = 10;

export default function Calculator() {
  // Initialize inputs as array of empty strings
  const [lblReadout,setlblReadout] = useState('')
 
  const handle = (e:any) => {
    if (e === "9"){
           setlblReadout(lblReadout + "9");
    }
    if (e === "8"){
           setlblReadout(lblReadout + "8");
    }
    if (e === "7"){
           setlblReadout(lblReadout + "7");
    }
    if (e === "6"){
           setlblReadout(lblReadout + "6");
    }
    if (e === "5"){
           setlblReadout(lblReadout + "5");
    }
    if (e === "4"){
           setlblReadout(lblReadout + "4");
    }
    if (e === "3"){
           setlblReadout(lblReadout + "3");
    }
    if (e === "2"){
           setlblReadout(lblReadout + "2");
    }
    if (e === "1"){
           setlblReadout(lblReadout + "1");
    }
     if (e === "0"){
           setlblReadout(lblReadout + "0");
    }
    if (e === "."){
           setlblReadout(lblReadout + ".");
    }
    if (e === "="){
           setlblReadout(eval(lblReadout));
    }
     if (e === "/"){
           setlblReadout(lblReadout + "/");
    }
    if (e === "*"){
           setlblReadout(lblReadout + "*");
    }
    if (e === "-"){
           setlblReadout(lblReadout + "-");
    }
    if (e === "+"){
           setlblReadout(lblReadout + "+");
    }
  };
const wordSelected = () => {
     setlblReadout("9")
  };
  return (
             <SafeAreaView style={styles.container}>
             <Text style={{backgroundColor:'orange',textAlign: 'right',width:'98%',height:'5%',padding:5,marginBottom:24,}}> {lblReadout}</Text>
             <View style={styles.row}>
                  <TouchableOpacity style={styles.clearButton} onPress={
                    () => handle('9')} >
                         <Text>9</Text>
                   </TouchableOpacity>
                  <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('8')} >
                        <Text>8</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('7')} >
                        <Text>7</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('/')} >
                        <Text>/</Text>
                    </TouchableOpacity>
             </View>
              <View style={styles.row}>
                  <TouchableOpacity style={styles.clearButton} onPress={
                    () => handle('6')} >
                         <Text>6</Text>
                   </TouchableOpacity>
                  <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('5')} >
                        <Text>5</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('4')} >
                        <Text>4</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('*')} >
                        <Text>*</Text>
                    </TouchableOpacity>
             </View>
              <View style={styles.row}>
                  <TouchableOpacity style={styles.clearButton} onPress={
                    () => handle('3')} >
                         <Text>3</Text>
                   </TouchableOpacity>
                  <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('2')} >
                        <Text>2</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('1')} >
                        <Text>1</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('-')} >
                        <Text> - </Text>
                    </TouchableOpacity>
             </View>
               <View style={styles.row}>
                  <TouchableOpacity style={styles.clearButton} onPress={
                    () => handle('0')} >
                         <Text>0</Text>
                   </TouchableOpacity>
                  <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('.')} >
                        <Text>.</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('=')} >
                        <Text>=</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.clearButton} onPress={
                      () => handle('+')} >
                        <Text> + </Text>
                    </TouchableOpacity>
             </View>
            </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  container: {
    flex: 4, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
    backgroundColor: '#f0f4f8',
    marginHorizontal: "auto",
    width: 400,

  },
  title: {
    fontSize: 28, fontWeight: '700', marginBottom: 20, color: '#1e293b',
  },
  input: {
    backgroundColor: 'white',
    fontSize: 18,
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#94a3b8',
  },
  buttonsContainer: {
    flexDirection: 'row', justifyContent: 'space-around',
    width: '100%', marginBottom: 24,
  },
 
  clearButton: {
    flex: 4, 
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight:'2%',
    backgroundColor: 'blue',
    width: '55%',
    height: '35%',
    color: 'white',
  },
  clearButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
});