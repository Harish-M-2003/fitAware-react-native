import { useEffect, useState } from "react";
import {TouchableOpacity } from "react-native";

import { 
    Text ,
    View ,
    StyleSheet ,
    TextInput,
} from "react-native";

export default function Login({navigation}){

    // const [email , setEmail] = useState("");
    // const [password , setPassword] = useState("");

    // useEffect(()=> {

    // function loginUser(){
    //     fetch("http://AswinM007.pythonanywhere.com/login" , {
    //         method : "POST",
    //         headers : {
    //             'Content-Type' : "application/json"
    //         },
    //         body : JSON.stringify({
    //             email : email,
    //             password : password,
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
            
    //         if ( data.error === "false" && data.email === email){
    //             navigation.navigate("Home" , {email : email})
    //         }
    //     })
    //     .catch(err => console.log(err))

    // } , [])
    // }

    return (
        <View style={style.rootDiv}>
            <View style={{height : "20%"}}/>
            <Text style={{fontSize : 50 , fontWeight : "bold",marginBottom : 50 }}>Login</Text>
            <TextInput style={style.input} placeholder="Username" onChangeText={(e) => setEmail(e)}/>
            <TextInput secureTextEntry={true} style={style.input} onChangeText={(e) => setPassword(e)} placeholder="Password"/>
            <TouchableOpacity style={style.button} onPress={loginUser}>
                <Text  style={{color : "white" , fontWeight : "bold" , fontSize : 15  }}>Login</Text>
            </TouchableOpacity>
            <View style={{flex : 1 , justifyContent : "flex-end"}}>
                <Text style={{marginBottom : 25}} >Take a break, prioritize your well-being! Remember to stretch and stay hydrated. 💻🌿</Text>
            </View>
        </View>
    );

}

const style = StyleSheet.create({
    rootDiv : {
        flex : 1,
        justifyContent : "center",
        gap : 30,
        padding : 15, 
        backgroundColor : "white"
    },

    input : {
        padding : 10,
        fontSize : 20,
        borderRadius : 10,
        backgroundColor : "rgba(225,225,225,0.25)",
    },

    button : {
        fontSize : 20,
        padding : 15,
        borderRadius : 5,
        backgroundColor : "#f64d41",
        justifyContent : "center",
        alignItems: "center",
    }
})

