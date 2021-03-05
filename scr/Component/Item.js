import React from "react";
import {View,TextInput,StyleSheet,Text,TouchableOpacity} from  "react-native";
import CounterStore from "../Stores/CounterStore"
import {observer} from "mobx-react";

const styles = StyleSheet.create({
    motherCollum:{
        flexWrap:'nowrap',
        position:'relative',
        top:'5%',
        left:'2.5%',
    },
    firstInput:{
        fontSize: 24,
        borderColor:'#000000',
        borderWidth: 1,
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        width:'90%',
        height:'50%',
        margin: 10,
        backgroundColor:'#ffffff'

    },
    lastInput:{
        backgroundColor:'#ffffff',
        textAlign: 'center',
        margin: 10,
        fontSize: 30,
        height: 60,
        width: 60,
        borderColor:'#000000',
        borderWidth: 1,
    },
    textStyles:{
        textAlign:'center',
        position:'relative',
        left:'30%',
        top:'5%',
        fontSize: 26,
    },
    buttonStyles:{
        alignItems: "center",
        backgroundColor: "#5577cd",
        padding: 20,
        height:90,
        width:'70%',
        borderRadius: 10,
        elevation: 8,
        paddingHorizontal: 12,
        position:'relative',
        top: 10,
    },
    textButtonStyles: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        textAlign:'center',
    },
    textSmsStyles: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
        textTransform: "uppercase",
        textAlign:'center',
        position:'relative',
        top:35
    }
});

export default observer(() => {
    const {getAmountText,setText,setSymbolNumber,result}=CounterStore
    const handlePress=()=>{
        getAmountText()
    }
    return(<>
        <View style ={
            styles.motherCollum
        }>
            <TextInput
                style={
                    styles.firstInput
                }
                onChangeText={(text)=>setText(text)}
                placeholder="Enter your message!"
                multiline={true} // Перенос строк
            />
            <View style={{
                flexDirection: 'row'
            }}>
                <TextInput
                    style={
                        styles.lastInput
                    }
                    onChangeText={(text)=>setSymbolNumber(text)}

                />
                <Text style={
                    styles.textStyles
                }>Symbols</Text>
            </View>
            <View style={{
                alignItems:'center'
            }}>
                <TouchableOpacity
                    style={styles.buttonStyles}
                     onPress={handlePress}
                >
                    <Text style={
                        styles.textButtonStyles
                    }>Calculate the number of SMS</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={
                    styles.textSmsStyles
                }>Need SMS: {result}</Text>
            </View>
        </View>
    </>)
})

