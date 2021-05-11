import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/Button/CustomButton'
import { GilroyBold, GilroyMedium, GilroyRegular } from '../utils/font'
import VirtualizedView from '../utils/VirtualizedView'
import { CokeIcon, ForwardIcon, PepperIcon, CloseIcon, BananaIcon } from '../utils/imagePath'
import FastImage from 'react-native-fast-image'

function MyCart({navigation}) {

    const [amount, setAmount] = useState(0)

    const listing = [
        {
            id: 1,
            name: 'Bell Pepper Red',
            icon: PepperIcon,
            price: 67
        },
        {
            id: 2,
            name: 'Egg Chicken Red',
            icon: BananaIcon,
            price: 67
        },
        {
            id: 3,
            name: 'Sprite Can',
            icon: PepperIcon,
            price: 67
        },
        {
            id: 4,
            name: 'Sprite Can',
            icon: PepperIcon,
            price: 67
        },
        {
            id: 5,
            name: 'Sprite Can',
            icon: PepperIcon,
            price: 67.91
        },
        {
            id: 6,
            name: 'Sprite Can',
            icon: PepperIcon,
            price: 67
        },
        {
            id: 7,
            name: 'Sprite Can',
            icon: PepperIcon,
            price: 67
        },
        {
            id: 8,
            name: 'Sprite Can',
            icon: PepperIcon,
            price: 67.00
        },
        {
            id: 9,
            name: 'Sprite Can',
            icon: PepperIcon,
            price: 68.99
        }
    ]


    useEffect(() => {
        const values  = listing.map(item => item.price)
            .reduce((accumulator, currentValue) => accumulator + currentValue , 0)
            setAmount(values)
    }, [listing])


    const FavCard = ({item}) => {
        return (
            <View style={cardStyles.container}>
                <View style={cardStyles.canWidth}>
                    <FastImage 
                        source={item.icon} 
                        style={{width: 80, height: 100,}}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <View 
                        // style={cardStyles.rightFlex}
                        style={{flexDirection: 'row', justifyContent: 'space-between'}}
                    >
                        <View>
                            <Text style={cardStyles.itemName}>{item.name}</Text>
                            <Text style={cardStyles.ml}>325ml, Price</Text>
                        </View>
                        <View>
                            <CloseIcon width={14} height={14} />
                        </View>
                    </View>

                    <View 
                        // style={cardStyles.rightFlex}
                        style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, alignItems: 'center'}}
                    >
                        <View style={{flexDirection: 'row', width: '50%', justifyContent: 'space-between', alignItems: 'center'}}>
                            <TouchableOpacity  style={cardStyles.minus} 
                                activeOpacity={0.5}
                            >
                                <Text style={cardStyles.minusText}>-</Text>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemCount}>1</Text>
                            <TouchableOpacity  style={cardStyles.plus} 
                                activeOpacity={0.5}
                            >
                                <Text style={cardStyles.plusText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={cardStyles.price}>${item.price}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={headerStyles.container}>
                <Text style={headerStyles.text}>My Cart</Text>
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
                    text="Go to Checkout"
                    checkout
                    amount={amount}
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
        height: 170,
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#E2E2E2",
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
        fontSize: 18,
        fontFamily: GilroyBold,
        marginRight: 10,
        marginTop: 3
    },
    canWidth: {
        width: 100, 
        justifyContent: 'center'
    },
    rightFlex: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        flex: 1, 
        alignItems: 'center', 
    },
    flexAmountAndArrow: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    minus: {
        height: 45,
        width: 45,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    plus: {
        height: 45,
        width: 45,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    minusText: {
        fontSize: 30,
        fontFamily: GilroyMedium,
        color: '#B3B3B3',
        marginTop: 5
    },
    plusText: {
        fontSize: 30,
        fontFamily: GilroyMedium,
        color: '#53B175',
        marginTop: 5
    },
    itemCount: {
        fontSize: 16,
        fontFamily: GilroyMedium
    }
})

export default MyCart


