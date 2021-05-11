import React, {useState, useEffect, useRef, forwardRef} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import FastImage from 'react-native-fast-image'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchComponent from '../components/SearchComponent/SearchComponent'
import { GilroyBold } from '../utils/font'
import VirtualizedView from '../utils/VirtualizedView'
import { FisrtCate } from '../utils/imagePath'
import { dimensionsStyle } from '../utils'

 
function Explore({navigation}) {

    const category = [
        {
            icon: FisrtCate,
            title: 'Frash Fruits & Vegetable',
            background: 'rgba(83, 177, 117, 0.1)',
            border: 'rgba(83, 177, 117, 0.7)',
            id: 1
        },
        {
            icon: FisrtCate,
            title: 'Cooking Oil & Ghee',
            background: 'rgba(248, 164, 76, 0.1)',
            border: 'rgba(248, 164, 76, 0.7)',
            id: 2
        },
        {
            icon: FisrtCate,
            title: 'Meat & Fish',
            background: 'rgba(247, 165, 147, 0.25)',
            border: '#F7A593',
            id: 3
        },
        {
            icon: FisrtCate,
            title: 'Bakery & Snacks',
            background: 'gba(211, 176, 224, 0.25)',
            border: '#D3B0E0',
            id: 4
        },
        {
            icon: FisrtCate,
            title: 'Dairy & Eggs',
            background: 'rgba(253, 229, 152, 0.25)',
            border: '#FDE598',
            id: 5
        },
        {
            icon: FisrtCate,
            title: 'Beverages',
            background: 'rgba(183, 223, 245, 0.25)',
            border: '#B7DFF5',
            id: 6
        },
        {
            icon: FisrtCate,
            title: 'Dairy & Eggs',
            background: 'rgba(253, 229, 152, 0.25)',
            border: '#FDE598',
            id: 7
        },
        {
            icon: FisrtCate,
            title: 'Beverages',
            background: 'rgba(183, 223, 245, 0.25)',
            border: '#B7DFF5',
            id: 8
        },
        {
            icon: FisrtCate,
            title: 'Dairy & Eggs',
            background: 'rgba(253, 229, 152, 0.25)',
            border: '#FDE598',
            id: 9
        },
        {
            icon: FisrtCate,
            title: 'Beverages',
            background: 'rgba(183, 223, 245, 0.25)',
            border: '#B7DFF5',
            id: 10
        },
    ]


    const [value, setValue] = useState(category)
    const [loader, setLoader] = useState(false)
    const inputRef = useRef()

    const searchFilterFunction = (text) => {
        const newCategory = category.filter(
            (item) =>
                item.title.toLowerCase().includes(text.toLowerCase())
        );

        setValue(newCategory);
        setValue(text !== 0 ? newCategory : category);
    };

    const CategoryCard = ({item}) => {
        return (
            <TouchableOpacity
                style={[categoryStyles.container, {
                    borderColor: item.border,
                    backgroundColor: item.background
                }]}
            >
                <FastImage 
                    source={item.icon}
                    style={{height: 100, width: 100}}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={categoryStyles.name}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        focus()
    }, [value])

    function focus() {
        inputRef.current.focus();
    }

    return (
        <View style={styles.container} forceInset={{ bottom: 'never'}}>
            <View style={headerStyles.container}>
                <Text style={headerStyles.text}>Find Products</Text>
            </View>
            <SearchComponent 
                setValue={setValue}
                value={value}
                onChangeText={(value) => searchFilterFunction(value)}
                ref={inputRef}
                style={{marginBottom: 10}}
                category={category}
                loader={loader}
                setLoader={setLoader}
            />
            <VirtualizedView>
                <FlatList
                    data={value}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={CategoryCard}
                    numColumns={1}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    columnWrapperStyle={{flex: 1, justifyContent: 'space-between', marginTop: 20}}
                />
            </VirtualizedView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: dimensionsStyle.safeAreaTopHeight
    },
})


const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: GilroyBold,
        fontSize: 18
    }
})


const categoryStyles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: 160,
        height: 170,
        alignItems: 'center',
        borderRadius: 18,
    },
    name: {
        color: '#181725',
        fontSize: 16,
        fontFamily: GilroyBold,
        width: "60%",
        textAlign: 'center',
        lineHeight: 22
    }
})

export default Explore
