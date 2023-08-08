import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        borderColor:'#d9d9d9',
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowRadius:6,
        shadowOffset:{
            width:0,
            height:2,
        },
        overflow:Platform.OS === 'ios' ? 'visible' : 'hidden',
    },
    button:{
        flex:1,
    },
    buttonPressed:{
        opacity:0.25,
    },
    innerContainer:{
        flex:1,
        padding:16,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontFamily:'commisioner-bold'
    }
})

const CategoryGridTile = ({title, color, onPress}) => {
    return (
        <View style={[styles.gridItem, ]}>
            <Pressable 
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}    
            >
                <View style={[styles.innerContainer, {backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;