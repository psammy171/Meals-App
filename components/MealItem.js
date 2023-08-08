import { Text, Pressable, View, Image, StyleSheet } from "react-native";
import MealInfo from "./MealInfo";

const styles = StyleSheet.create({
    image:{
        flex:1,
        width:'100%',
        height:200,
    },
    title:{
        fontSize:20,
        fontFamily:'commisioner-bold',
        fontWeight:'bold',
        textAlign:'center',
        margin:8,
    },
    container:{
        margin:16,
        backgroundColor:'white',
        borderRadius:8,
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:6,
        },
        shadowRadius:6,
        shadowOpacity:0.5,
    },
    innerContainer:{
        overflow:'hidden',
        borderRadius:8,
    },
    buttonPressed:{
        opacity:0.5,
    }
})

const MealItem = ({title, imageUri, duration, affordability, complexity, onPress}) => {

    return (
        <View style={styles.container}>
            <Pressable style={({pressed}) =>[styles.innerContainer, pressed ? styles.buttonPressed: null]} onPress={onPress}>
                <View>
                    <Image source={{uri : imageUri}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealInfo duration={duration} affordability={affordability} complexity={complexity}/>
            </Pressable>
        </View>
    )
}

export default MealItem;