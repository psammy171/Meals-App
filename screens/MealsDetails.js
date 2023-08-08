import { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import MealInfo from "../components/MealInfo";

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:350,
    },
    title:{
        textAlign:'center',
        color:'white',
        fontSize:24,
        margin:10,
        fontFamily:'commisioner-bold'
    },
    subTitle:{
        textAlign:'center',
        color:'white',
        fontSize:18,
        margin:10,
        fontFamily:'commisioner-bold'
    },
    listContainer:{
        alignItems:'center',
    },
    list:{
        width:'70%',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:8,
    },
    listItem:{
        marginVertical:5,
        fontFamily:'commisioner'
    }
})

const MealsDetails = ({route, navigation}) => {
    const meal = route.params

    const headerRightClickHandler = () => {
        console.log("Clicked")
    }

    useEffect(() => {
        navigation.setOptions({
            title:meal.title,
            headerRight:() => {
                return (
                    <Button title="Tap here" onPress={headerRightClickHandler}/>
                )
            }
        })
    },[])

    return (
        <ScrollView>
            <Image source={{uri:meal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{meal.title}</Text>
            <MealInfo
                duration={meal.duration}
                complexity={meal.complexity}
                affordability={meal.affordability}
                textStyle={{color:'white',fontSize:14}}
            />
            <Text style={styles.subTitle}>Ingredients</Text>
            <View style={styles.listContainer}>
                <View style={styles.list}>{meal.ingredients.map((ing) => (
                    <Text style={styles.listItem} key={ing}>{ing}</Text>
                ))}
                </View>
            </View>
            <Text style={styles.subTitle}>Steps</Text>
            <View style={[styles.listContainer,{marginBottom:40}]}>
                <View style={styles.list}>{meal.steps.map((step) => (
                    <Text style={styles.listItem} key={step}>{step}</Text>
                ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default MealsDetails;