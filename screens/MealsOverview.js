import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
})

const MealsOverview = ({route, navigation}) => {

    // alternative way to access route
    // const route = useRoute();

    const catId = route.params.categoryId

    //dynamically set navigation parameters (can use useLayoutEffect)
    useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title:categoryTitle
        })
    },[ navigation])

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    const renderMealItem = (itemData) => {
        const mealProperties = {
            title:itemData.item.title,
            imageUri:itemData.item.imageUrl,
            affordability:itemData.item.affordability,
            complexity:itemData.item.complexity,
            duration:itemData.item.duration
        }

        const onPressHandler = () => {
            navigation.navigate('mealsDetails', itemData.item)
        }

        return <MealItem {...mealProperties} onPress={onPressHandler}/>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverview;
