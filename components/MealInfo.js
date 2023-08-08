import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    detailsView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    details:{
        margin:5,
        fontFamily:'commisioner',
    },
})

const MealInfo = ({duration, complexity, affordability, style, textStyle}) => {
    return(
        <View style={[styles.detailsView, style]}>
            <Text style={[styles.details, textStyle]}>{duration} m</Text>
            <Text style={[styles.details, textStyle]}>{affordability}</Text>
            <Text style={[styles.details, textStyle]}>{complexity}</Text>
        </View>
    )
}

export default MealInfo;