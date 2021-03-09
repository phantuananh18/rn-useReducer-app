import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const CustomButton = ({title,onIncrease,onDecrease}) => {
    return (
        <View>
            <Text style={styles.text}>COLOR: {title}</Text>
            <Button
                title={`Increase ${title}`}
                onPress={onIncrease}
            />
            <Button
                title={`Decrease ${title}`}
                onPress={onDecrease}
            />
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
    btnIncrease:{
        width:200,
        height:200
    }
})
