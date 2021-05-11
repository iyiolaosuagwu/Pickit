import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/Button/CustomButton'
import { GilroyBold, GilroyMedium, GilroyRegular } from '../utils/font'
import VirtualizedView from '../utils/VirtualizedView'
import { CokeIcon, ForwardIcon } from '../utils/imagePath'
import FastImage from 'react-native-fast-image'

function Favorite({navigation}) {

    const listing = [
        {
            id: 1,
            name: 'Sprite Can',
            icon: CokeIcon,
            price: 67
        },
        {
            id: 2,
            name: 'Diet Coke',
            icon: CokeIcon,
            price: 67
        },
        {
            id: 3,
            name: 'Apple & Grape Juice',
            icon: CokeIcon,
            price: 67
        },
        {
            id: 4,
            name: 'Sprite Can',
            icon: CokeIcon,
            price: 67
        },
        {
            id: 5,
            name: 'Sprite Can',
            icon: CokeIcon,
            price: 67
        },
        {
            id: 6,
            name: 'Sprite Can',
            icon: CokeIcon,
            price: 67
        },
        {
            id: 7,
            name: 'Sprite Can',
            icon: CokeIcon,
            price: 67
        },
        {
            id: 8,
            name: 'Sprite Can',
            icon: CokeIcon,
            price: 67
        },
        {
            id: 9,
            name: 'Sprite Can',
            icon: CokeIcon,
            price: 67
        }
    ]


    const FavCard = ({item}) => {
        return (
            <View style={cardStyles.container}>
                <View style={cardStyles.canWidth}>
                    <FastImage 
                        source={item.icon} 
                        style={{width: '100%', height: 50}}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <View 
                    style={cardStyles.rightFlex}
                >
                    <View>
                        <Text style={cardStyles.itemName}>{item.name}</Text>
                        <Text style={cardStyles.ml}>325ml, Price</Text>
                    </View>
                    <View style={cardStyles.flexAmountAndArrow}>
                        <Text style={cardStyles.price}>${item.price}</Text>
                        <ForwardIcon width={14} height={14} />
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={headerStyles.container}>
                <Text style={headerStyles.text}>Favorite</Text>
            </View>
            <View style={styles.flexFlatList}>
                <VirtualizedView>
                    <FlatList
                        data={listing}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={FavCard}
                        numColumns={1}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                </VirtualizedView>
            </View>
            <View style={styles.bottomView}>
                <CustomButton 
                    text="Add All To Cart"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    bottomView: {        
        alignSelf: 'center', 
        width: '100%', 
        alignItems: 'center', 
        marginBottom: 10,
    },
    flexFlatList: {
        flex: 1, 
        paddingVertical: 10, 
        width: '90%', 
        alignSelf: 'center'
    }
})


const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#E2E2E2"
    },
    text: {
        fontFamily: GilroyBold,
        fontSize: 18
    }
})


const cardStyles = StyleSheet.create({
    container: {
        height: 114,
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#E2E2E2"
    },
    text: {
        fontFamily: GilroyBold,
        fontSize: 18
    },
    itemName: {
        fontSize: 16,
        fontFamily: GilroyBold,
        lineHeight: 18
    },
    ml: {
        fontSize: 14,
        fontFamily: GilroyRegular,
        lineHeight: 18,
        color: '#7C7C7C',
        marginTop: 5
    },
    price: {
        fontSize: 14,
        fontFamily: GilroyBold,
        marginRight: 10,
        marginTop: 3
    },
    canWidth: {
        width: 60, 
        justifyContent: 'center'
    },
    rightFlex: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        flex: 1, 
        alignItems: 'center', 
        marginLeft: 25
    },
    flexAmountAndArrow: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default Favorite
