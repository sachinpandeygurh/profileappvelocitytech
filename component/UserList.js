import React, { useState, useEffect } from 'react';
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';


const Slider = ({ categoryData }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const renderCategory = ({ item }) => (
        <Pressable
            style={[
                styles.categoryItem,
                item.name === selectedCategory && styles.selectedCategoryItem,
            ]}
            onPress={() => setSelectedCategory(item.name)}
        >
            <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>{item.name}</Text>
        </Pressable>
    );
    return (
        <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center", paddingVertical: 15, backgroundColor: "#f1ede6"  }}>
            <FlatList
                data={categoryData}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                horizontal
                style={styles.categoryList}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const UserList = ({ searchText, workerData }) => {
    const [filteredWorkers, setFilteredWorkers] = useState(workerData);

    useEffect(() => {
        filterWorkers();
    }, [searchText]);

    const filterWorkers = () => {
        let filtered = workerData;

        if (searchText) {
            filtered = filtered.filter((worker) =>
                worker.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }
        setFilteredWorkers(filtered);
    };

    const renderWorker = ({ item }) => (
        <View style={styles.workerItem}>
            <Image source={{ uri: item.flag }} style={styles.flagImage}/>
            <Image source={{ uri: item.image }} style={styles.workerImage} />
            <Text style={styles.workerName}>{item.name}</Text>
        </View>
    );

    return (
        <View style={{ flexDirection: "row", width: responsiveScreenWidth(100), alignItems: "center" }}>
            <FlatList
                data={filteredWorkers}
                renderItem={renderWorker}
                keyExtractor={(item) => item.id}
                numColumns={4}
                contentContainerStyle={styles.workerList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    categoryList: {
        // marginBottom: 20,
        
    },
    categoryItem: {
        alignItems: 'center',
        // marginRight: 10,
        marginHorizontal: 10,
        position:"relative",
       


    },
    selectedCategoryItem: {
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: "center",

    },
    categoryIcon: {
        width: 80,
        // height: 5,
        padding:50,        
        backgroundColor:"#fff",
        borderRadius:100,
        borderColor:"red", borderWidth:1, marginHorizontal:-12, position:"relative", zIndex:999
    },
    categoryText: {
        marginTop: 5,
        fontWeight: "300",
        fontSize: 8
    },
    workerList: {
        justifyContent: 'space-between',
    },
    workerItem: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20,
        position: "relative",
        width: responsiveScreenWidth(10),
        // flexDirection:"row"
    },
    workerImage: {
        width: 50,
        height: 50,
        borderRadius: 35,
    },
    workerName: {
        marginTop: 5,
        fontWeight: '400',
    },
    flagImage: {
        width: 25,
        height: 25,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 1,
        top: 0,
        right: 22,
      },
});

export { Slider, UserList };
