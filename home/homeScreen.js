import React from "react";
import { useState } from "react";

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    TouchableOpacity,
    View,
    Button,
  } from 'react-native';

 

 
  export default function HomeScreen({}){

    const [weightKG,setWeightKG] = useState();
    const[height,setHeight] = useState();
    const[info,setInfo] = useState();
    const[bmi,setBMI] = useState();
    const[open,setOpen] = useState(false);
    const[weightPounds,setWeightPounds] = useState();
   
    const[heightInch,setHeightInch] = useState();


    const handleBmi = () => {
        let val = (
          [weightKG / height / height] * 10000  
        ).toFixed(1);
        setBMI(val);
       
        if (val < 18.5) {
          setInfo("Under Weight");
        } else if (val > 18.5 && val <= 24.9) {
          setInfo("Healthy");
        } else if (val > 24.9 && val < 30) {
          setInfo("Overweight");
        } else {
          setInfo("Obese");
        }
      };

      const handleBmiPounds = () => {
        let val = (
          (weightPounds * 703) / (heightInch * heightInch)
        ).toFixed(1);
        setBMI(val);
       
        if (val < 18.5) {
          setInfo("Under Weight");
        } else if (val > 18.5 && val <= 24.9) {
          setInfo("Healthy");
        } else if (val > 24.9 && val < 30) {
          setInfo("Overweight");
        } else {
          setInfo("Obese");
        }
      };



      const handleMetricMeasure = () => {
        setOpen(true)
        
      }
      const handleStandardMeasure = () => {
        setOpen(false)
      }
 

    
  
    
   

    return(
        <SafeAreaView
        style={{
            marginHorizontal:'4%'
        }}>
            <View
            style={styles.header}> 
                <Text
                style={{
                    fontSize:20,
                    fontWeight:'700'
                    }}>Calculate your BMI</Text>
                    <View
                    style={{
                        flexDirection:'row'
                    }}>
                        <Button
                        title="Standard"
                        onPress={handleStandardMeasure}
                        />
                        <Button
                        title="Metric"
                        onPress={handleMetricMeasure}/>
                    </View>

            </View>

            {  open === true ? <View>
                <View>
                    <Text
                    style={{
                        marginVertical:5
                    }}>Please enter weight in KG:</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={(e) => setWeightKG(e)}
                    placeholder="Weight in KG"
                    />
                </View>

                <View>
                    <Text
                    style={{
                        marginVertical:5
                    }}>Please enter height in cm:</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={(e) => setHeight(e)}
                    placeholder="Height in cm"/>
                </View>

                <Button
                             
                onPress={handleBmi}
                title="Compute your BMI"
            />

            <Text
            style={{
                marginTop:20,
                fontSize:20,
                padding:50,
                fontWeight:'bold'
            }}> Your Bmi is {bmi} {"\n"} You're classified {info}</Text>

            </View>: null}

            {open === false ? <View>
                <View>
                    <Text
                    style={{
                        marginVertical:5
                    }}>Please enter weight in lbs:</Text>
                    <TextInput
                    placeholder="Weight in lb"
                    style={styles.input}
                    onChangeText={(e) => setWeightPounds(e)}
                    />
                </View>

                <View>
                    <Text
                    style={{
                        marginVertical:5
                    }}>Please enter height in inches:</Text>
                  
                   
                    <TextInput
                    placeholder="Height in inches"
                    style={styles.input}
                    onChangeText={(e) => setHeightInch(e)}/>
                    
                </View>

             
            <Button   
                onPress={handleBmiPounds}
                title="Compute your BMI"
            />

            <Text
            style={{
                marginTop:20,
                fontSize:20,
                padding:50,
                fontWeight:'bold'
            }}> Your Bmi is {bmi} {"\n"} You're classified {info}</Text>

            </View> : null}

            {/* <TouchableOpacity
            style={styles.touch}>
                <Text
                style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'blue'
                }}
                onPress={handleBmi}>Compute your BMI</Text>
            </TouchableOpacity>

            <Text
            style={{
                marginTop:20,
                fontSize:20,
                padding:50,
                fontWeight:'bold'
            }}> Your Bmi is {bmi} {"\n"} You're classified {info}</Text> */}
        </SafeAreaView>
    )
  }


  const styles = StyleSheet.create({
    header:{
        alignItems:'center',
    },
    input:{
        borderWidth:2,
       padding:15,
        fontSize:20,
        marginBottom:30
    },
  
  })