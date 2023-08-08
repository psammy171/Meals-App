import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';



const Categories = ({navigation}) => {
    const renderCategoryItem = (itemData) => {

        const pressHandler = () => {
            navigation.navigate('mealsOverview',{
                categoryId:itemData.item.id
            })
        }

        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default Categories;