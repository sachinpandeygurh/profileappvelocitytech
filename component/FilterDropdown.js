import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FilterDropdown = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <View style={styles.dropdown}>
      {categories.map((category, index) => (
        <Pressable key={index} onPress={() => onSelectCategory(category.name)}>
          <View style={styles.radioOption}>
            <Ionicons
              name={selectedCategory === category.name ? 'radio-button-on' : 'radio-button-off'}
              size={24}
              color={selectedCategory === category.name ? 'orange' : 'gray'}
            />
            <Text style={styles.radioText}>{category.name}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    elevation: 3,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default FilterDropdown;
