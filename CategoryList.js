import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const CategoryList = ({ categories, onDelete }) => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
                <Text style={styles.deleteButton}>Sil</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    itemText: {
        fontSize: 18,
    },
    deleteButton: {
        color: 'red',
    },
});

export default CategoryList;
