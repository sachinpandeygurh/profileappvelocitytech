import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Image,
  Pressable,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import categories from "../data/categories.json"

const Filter = ({ onSearch, onFilter }) => {
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    onFilter(filter);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchInput}>
        <View style={styles.inputField}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={handleSearchTextChange}
          />
        </View>
        <Image source={require("../assets/icons/mic-icon.png")} style={{height:25, width:20}} />
      </View>
      <Pressable style={styles.filterButton} onPress={() => setModalVisible(true)}>
        <Image source={require("../assets/icons/filter.png")} style={{height:20, width:20}} />
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
       
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.radioButton}
              onPress={() => handleFilterSelect(category.id)}  
            >
              <Text style={styles.radioText}>{category.name}</Text> 
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      searchInput: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: responsiveWidth(80),
      },
      inputField: {
        width: responsiveWidth(50),
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      textInput: {
        paddingHorizontal: 10,
      },
      filterButton: {
        width: responsiveWidth(10),
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
      },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  radioButton: {
    padding: 10,
  },
  radioText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    marginLeft:responsiveWidth(50),
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
  },
});

export default Filter;
