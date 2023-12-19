
import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import {
    View ,
    Text , 
    StyleSheet , 

} from "react-native";


export default function Signup({navigation}){

    
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    // useEffect(() => {
    //     fetch("http://AswinM007.pythonanywhere.com/signup" , {
    //         method : 'POST',
    //         headers : {
    //             'Content-Type' : "application/json"
    //         },
    //         body : JSON.stringify({
    //             email : email,
    //             password : password,
    //             x : "",
    //             y : "",
    //             z : "",
    //             distance : "",
    //             steps  : ""
    //         })
    //     })
    // } , [])

    return (
        <View style={style.rootDiv}>
            <View style={{height : "20%"}}/>
            <Text style={{fontSize : 50 , fontWeight : "bold",marginBottom : 50 }}>SignUp</Text>
            <TextInput style={style.input} placeholder="Username" onChangeText={(e) => setEmail(e)}/>
            <TextInput secureTextEntry={true} style={style.input} onChangeText={(e) => setPassword(e)} placeholder="Password"/>
            <TouchableOpacity style={style.button} onPress={() => navigation.navigate("Home")}>
                <Text  style={{color : "white" , fontWeight : "bold" , fontSize : 15  }}>SignUp</Text>
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

