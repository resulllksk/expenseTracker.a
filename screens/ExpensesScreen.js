import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import { icons, COLORS } from '../constanst'; // Doğru yolu kontrol edin

const ExpensesScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [categoryName, setCategoryName] = useState(''); // categoryName'ı burada tanımlıyoruz

    const handleAddCategory = () => {
        // Kategori ekleme işlemi
        alert(`Kategori Eklendi: ${categoryName}`);
        setCategoryName('');
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.expensesContainer}>
                {/* Harcamalar kısmı burada olacak */}
                
                {/* Artı Butonu */}
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Yeni Kategori Ekle</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Kategori Adı"
                        value={categoryName} // categoryName burada kullanılıyor
                        onChangeText={setCategoryName} // TextInput'a yazılan veriyi güncelliyoruz
                    />
                    <TouchableOpacity style={styles.saveButton} onPress={handleAddCategory}>
                        <Text style={styles.saveButtonText}>Kaydet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.cancelButtonText}>İptal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    },
    expensesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        right: 30,
        elevation: 5
    },
    addButtonText: {
        fontSize: 30,
        color: COLORS.white
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        color: COLORS.white
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: COLORS.white
    },
    saveButton: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 5
    },
    saveButtonText: {
        color: COLORS.white,
        fontSize: 16
    },
    cancelButton: {
        backgroundColor: COLORS.red,
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    cancelButtonText: {
        color: COLORS.white,
        fontSize: 16
    }
});

export default ExpensesScreen;