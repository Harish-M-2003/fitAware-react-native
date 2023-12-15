// import {  } from "react-native";
import { Button, ImageBackground, TouchableOpacity } from "react-native";
import { 
    Text ,
    View ,
    StyleSheet ,
    TextInput,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Login(){

    return (
        <View style={style.rootDiv}>
            {/* <LinearGradient 
            style={{flex : 3, justifyContent : "center" , gap : 30 , padding : 15}}
                colors={['rgba(0,0,0,0.4)','rgba(0,0,0,0.9)']}> */}
            <View style={{height : "20%"}}/>
            <Text style={{fontSize : 50 , fontWeight : "bold",marginBottom : 50 }}>Login</Text>
            <TextInput style={style.input} placeholder="Username" />
            <TextInput secureTextEntry={true} style={style.input} placeholder="Password"/>
            {/* <Button title="Login" style={style.button}/> */}
            <TouchableOpacity style={style.button}>
                <Text  style={{color : "black" , fontWeight : "bold" , fontSize : 15 }}>Login</Text>
            </TouchableOpacity>
            <View style={{flex : 1 , justifyContent : "flex-end"}}>
                <Text style={{marginBottom : 25}} >Take a break, prioritize your well-being! Remember to stretch and stay hydrated. 💻🌿</Text>
            </View>
            {/* </LinearGradient> */}
            
         
        
        </View>
        // <ImageBackground source={require("../../login-bg-1.jpg")} style={style.rootDiv}>

        //     <View style={{backgroundColor : "rgba(0,0,0,0.5)" , flex : 1 }}>
        //         <TextInput placeholder="Username" style={style.input} />
        //         <TextInput placeholder="Password" secureTextEntry={true} style={style.input}/>
        //         <TouchableOpacity style={style.button}>
        //             <Text style={{color : "white" , fontWeight : "bold" , fontSize : 15}}>Login</Text>
        //         </TouchableOpacity>

        //     </View>

        // </ImageBackground>
    );

}

const style = StyleSheet.create({
    rootDiv : {
        flex : 1,
        justifyContent : "center",
        gap : 30,
        // objectFit : "cover",
        padding : 15, 
        // gap : 20,
        // alignItems : "center"
    },

    input : {
        padding : 10,
        fontSize : 20,
        borderRadius : 10,
        backgroundColor : "rgba(225,225,225,0.25)",
        // color : "white",
    },

    button : {
        fontSize : 20,
        padding : 15,
        borderRadius : 5,
        backgroundColor : "#f64d41",
        // flex : 1,
        justifyContent : "center",
        alignItems: "center",
        // color : "white",
    }
})

