import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, SafeAreaView, TextInput, StatusBar } from 'react-native';


const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const SearchScreen = () => {

    const [search_text, setText] = useState('');

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.textinput} />

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: "center"
    },
    textinput: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "#111",
        borderRadius: 1
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
