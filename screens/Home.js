import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, StyleSheet, Animated, Dimensions, Modal, TextInput,Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, icons } from '../constanst';

// import { PieChart } from 'react-native-chart-kit';
// import NewScreen from '../NewScreen';
// import { useNavigation } from '@react-navigation/native';


// import ButtonWithChart from './ButtonWithChart'; // Adjust the import path as needed



const Home = () => {
    const confirmStatus = "C";
    const pendingStatus = "P";
    const navigation = useNavigation();

    let categoriesData = [
        {
            id: 1,
            name: "Eğitim",
            icon: icons.education,
            color: COLORS.yellow,
            expenses: [
                {
                    id: 1,
                    title: "Öğrenim Ücreti",
                    description: "Öğrenim ücreti",
                    location: "öğrenim merkezi",
                    total: 100.00,
                    status: pendingStatus,
                    color: COLORS.yellow
                },
                {
                    id: 2,
                    title: "Arduino",
                    description: "Donanım",
                    location: "öğrenim merkezi",
                    total: 30.00,
                    status: pendingStatus,
                    color: COLORS.black // Renk eklendi

                },
                {
                    id: 3,
                    title: "JavaScript Kitapları",
                    description: "JavaScript kitapları",
                    location: "Kitapçı",
                    total: 20.00,
                    status: confirmStatus
                },
                {
                    id: 4,
                    title: "PHP Kitapları",
                    description: "PHP kitapları",
                    location: "Kitapçı",
                    total: 20.00,
                    status: confirmStatus
                }
            ],
        },
        {
            id: 2,
            name: "Beslenme",
            icon: icons.food,
            color: COLORS.lightBlue,
            expenses: [
                {
                    id: 5,
                    title: "Vitaminler",
                    description: "Vitamin",
                    location: "Eczane",
                    total: 25.00,
                    status: pendingStatus,
                },
                {
                    id: 6,
                    title: "Protein Tozu",
                    description: "Protein",
                    location: "Eczane",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 3,
            name: "Çocuk",
            icon: icons.baby_car,
            color: COLORS.darkgreen,
            expenses: [
                {
                    id: 7,
                    title: "Oyuncaklar",
                    description: "Oyuncaklar",
                    location: "Oyuncakçı",
                    total: 25.00,
                    status: confirmStatus,
                },
                {
                    id: 8,
                    title: "Bebek Araç Koltuğu",
                    description: "Bebek araç koltuğu",
                    location: "E-Bebek",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "Pampers",
                    description: "Pampers",
                    location: "Süpermarket",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 10,
                    title: "Bebek Tişörtü",
                    description: "Tişört",
                    location: "Moda Mağazası",
                    total: 20.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 4,
            name: "Güzellik & Bakım",
            icon: icons.healthcare,
            color: COLORS.peach,
            expenses: [
                {
                    id: 11,
                    title: "Cilt Bakım Ürünü",
                    description: "Cilt bakımı",
                    location: "Eczane",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 12,
                    title: "Losyon",
                    description: "Losyon",
                    location: "Eczane",
                    total: 50.00,
                    status: confirmStatus,
                },
                {
                    id: 13,
                    title: "Yüz Maskesi",
                    description: "Yüz maskesi",
                    location: "Eczane",
                    total: 50.00,
                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Güneş Kremi",
                    description: "Güneş kremi",
                    location: "Eczane",
                    total: 50.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 5,
            name: "Spor",
            icon: icons.sports_icon,
            color: COLORS.purple,
            expenses: [
                {
                    id: 15,
                    title: "Spor Salonuna Üyelik",
                    description: "Aylık Ücret",
                    location: "Spor Salonu",
                    total: 45.00,
                    status: pendingStatus,
                },
                {
                    id: 16,
                    title: "Eldivenler",
                    description: "Spor ekipmanı",
                    location: "Spor Salonu",
                    total: 15.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 6,
            name: "Giyim",
            icon: icons.cloth_icon,
            color: COLORS.red,
            expenses: [
                {
                    id: 17,
                    title: "Tişört",
                    description: "Düz Renk Tişört",
                    location: "Alışveriş Merkezi",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jean",
                    description: "Mavi Jean",
                    location: "Alışveriş Merkezi",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        }
    ]; 
    const [newExpenseTitle, setNewExpenseTitle] = useState('');
    const [newExpenseDescription, setNewExpenseDescription] = useState('');
    const [newExpenseLocation, setNewExpenseLocation] = useState('');
    const [newExpenseTotal, setNewExpenseTotal] = useState('');
    const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;
    const [viewMode, setViewMode] = useState("list");
    const [categories, setCategories] = useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showMoreToggle, setShowMoreToggle] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [categoryName, setCategoryName] = useState('');

    const handleAddExpense = () => {
        if (!newExpenseTitle || !newExpenseDescription || !newExpenseLocation || !newExpenseTotal) {
            Alert.alert('Lütfen tüm alanları doldurun.');
            return;
        }

        const updatedCategory = {
            ...selectedCategory,
            expenses: [
                ...selectedCategory.expenses,
                {
                    id: selectedCategory.expenses.length + 1,
                    title: newExpenseTitle,
                    description: newExpenseDescription,
                    location: newExpenseLocation,
                    total: parseFloat(newExpenseTotal),
                    status: pendingStatus
                }
            ]
        };

        const updatedCategories = categories.map(cat =>
            cat.id === selectedCategory.id ? updatedCategory : cat
        );

        setCategories(updatedCategories);
        setSelectedCategory(updatedCategory);
        setNewExpenseTitle('');
        setNewExpenseDescription('');
        setNewExpenseLocation('');
        setNewExpenseTotal('');
    };

    const renderNavBar = () => (
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.navButton} onPress={() => console.log('Go Back')}>
                <Image source={icons.back_arrow} style={styles.navIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => console.log('More')}>
                <Image source={icons.more} style={styles.navIcon} />
            </TouchableOpacity>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Harcamalarım</Text>
            <Text style={styles.headerSubtitle}>Özet</Text>
            <View style={styles.headerInfo}>
                <View style={styles.calendarIconContainer}>
                    <Image source={icons.calendar} style={styles.calendarIcon} />
                </View>
                <View style={styles.headerDateInfo}>
                    <Text style={styles.headerDate}>22.08.2024</Text>
                    <Text style={styles.headerComparison}>Geçen aya göre %18 daha fazla</Text>
                </View>
            </View>
        </View>
    );

    const selectCategory = (category) => {
        setSelectedCategory(category);
        // Additional logic if needed
    };
    
    const renderCategoryHeaderSection = () => (
        <View style={styles.categoryHeader}>
            <View>
                <Text style={styles.categoryTitle}>KATEGORİLER</Text>
                <Text style={styles.categorySubtitle}>Toplam {categoriesData.length}</Text>
            </View>
            <View style={styles.viewModeButtons}>
                <TouchableOpacity
                    style={[styles.viewModeButton, viewMode === "list" && styles.activeButton]}
                    onPress={() => setViewMode("list")}
                >
                    <Image source={icons.menu} style={[styles.viewModeIcon, viewMode === "list" && styles.activeIcon]} />
                </TouchableOpacity>
                {/* Yeni ikon */}
                <TouchableOpacity
    style={styles.viewModeButton}
    onPress={() => {
        console.log('Selected Category:', selectedCategory); // Debugging line
        if (selectedCategory) {
            navigation.navigate('NewScreen', { selectedCategory });
        } else {
            console.log('No category selected');
        }
    }}
>
    <Image source={icons.menu} style={styles.viewModeIcon} />
</TouchableOpacity>

            </View>
        </View>
    );
    
    

    const handleDeleteCategory = (categoryId) => {
        
        Alert.alert(
            "Kategoriyi Sil",
            "Bu kategoriyi silmek istediğinize emin misiniz?",
            [
                {
                    text: "Hayır",
                    style: "cancel"
                },
                {
                    text: "Evet",
                    onPress: () => {
                        const updatedCategories = categories.filter(category => category.id !== categoryId);
                        setCategories(updatedCategories);
                    }
                }
            ]
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.categoryItemContainer}>
            <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => setSelectedCategory(item)}
            >
                <Image source={item.icon} style={[styles.categoryIcon, { tintColor: item.color }]} />
                <Text style={styles.categoryName}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteCategory(item.id)}
            >
                <Image source={icons.x} style={styles.deleteButtonIcon} />
            </TouchableOpacity>
        </View>
    );

    const renderCategoryList = () => (
        <View style={styles.categoryListContainer}>
            <Animated.View style={{ height: categoryListHeightAnimationValue }}>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </Animated.View>
            <TouchableOpacity
                style={styles.showMoreButton}
                onPress={() => {
                    Animated.timing(categoryListHeightAnimationValue, {
                        // toValue: showMoreToggle ? 115 : 172.5,
                        duration: 300,
                        useNativeDriver: false
                    }).start();
                    // setShowMoreToggle(!showMoreToggle);
                }}
            >
                {/* <Text style={styles.showMoreText}>{showMoreToggle ? "Daha Az" : "Daha Fazla"}</Text> */}
            </TouchableOpacity>
        </View>
    );

    const renderCategoryDetails = () => (
        <View style={styles.categoryDetailsContainer}>
            <Text style={styles.categoryDetailsTitle}>{selectedCategory.name}</Text>
            
            <FlatList
                data={selectedCategory.expenses}
                renderItem={({ item }) => (
                    <View style={styles.expenseItem}>
                        <Text style={styles.expenseTitle}>{item.title}</Text>
                        <Text style={styles.expenseDescription}>{item.description}</Text>
                        <Text style={styles.expenseLocation}>{item.location}</Text>
                        <Text style={styles.expenseTotal}>{item.total}₺</Text>
                    </View>
                )}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
            />
            
            <View style={styles.addExpenseForm}>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Başlık"
                    value={newExpenseTitle}
                    onChangeText={setNewExpenseTitle}
                />
                <TextInput
                    style={styles.modalInput}
                    placeholder="Açıklama"
                    value={newExpenseDescription}
                    onChangeText={setNewExpenseDescription}
                />
                <TextInput
                    style={styles.modalInput}
                    placeholder="Lokasyon"
                    value={newExpenseLocation}
                    onChangeText={setNewExpenseLocation}
                />
                <TextInput
                    style={styles.modalInput}
                    placeholder="Tutar"
                    value={newExpenseTotal}
                    onChangeText={setNewExpenseTotal}
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleAddExpense}
                >
                    <Text style={styles.saveButtonText}>Harcamayı Ekle</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    

    const handleAddCategory = () => {
        setModalVisible(true);
        
        

        
    };

    const handleSaveCategory = () => {
        if (!categoryName) {
            Alert.alert('Kategori adı giriniz.');
            return;
        }

        setCategories([...categories, {
            id: categories.length + 1,
            name: categoryName,
            icon: icons.category_default,
            color: COLORS.primary,
            expenses: []
        }]);
        setCategoryName('');
        setModalVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {renderNavBar()}
            {renderHeader()}
            {renderCategoryHeaderSection()}
            {renderCategoryList()}
            {selectedCategory && renderCategoryDetails()}
            <TouchableOpacity
                style={styles.addCategoryButton}
                onPress={handleAddCategory}
            >
                <Image source={icons.plus} style={styles.addCategoryIcon} />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Yeni Kategori Ekle</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Kategori Adı"
                            value={categoryName}
                            onChangeText={setCategoryName}
                        />
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={handleSaveCategory}
                        >
                            <Text style={styles.saveButtonText}>Kaydet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Kapat</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background },
    navBar: { flexDirection: 'row', justifyContent: 'space-between', padding: 1, alignItems:'center' },
    navButton: { padding: 40 ,marginVertical:10,marginHorizontal:1},
    navIcon: { width: 24, height: 24 },
    header: { padding: SIZES.padding, backgroundColor: COLORS.white },
    headerTitle: { fontSize: 24, fontWeight: 'bold' },
    headerSubtitle: { fontSize: 16, color: COLORS.gray },
    headerInfo: { flexDirection: 'row', marginTop: SIZES.padding },
    calendarIconContainer: { justifyContent: 'center', alignItems: 'center', marginRight: SIZES.padding },
    calendarIcon: { width: 24, height: 24 },
    headerDateInfo: { justifyContent: 'center' },
    headerDate: { fontSize: 18, fontWeight: 'bold' },
    headerComparison: { fontSize: 14, color: COLORS.gray },
    categoryHeader: { flexDirection: 'row', justifyContent: 'space-between', padding: SIZES.padding },
    categoryTitle: { fontSize: 20, fontWeight: 'bold' },
    categorySubtitle: { fontSize: 16, color: COLORS.gray },
    viewModeButtons: { flexDirection: 'row' },
    viewModeButton: { padding: SIZES.padding },
    viewModeIcon: { width: 24, height: 24 },
    activeButton: { borderBottomWidth: 2, borderBottomColor: COLORS.primary },
    activeIcon: { tintColor: COLORS.primary },
    categoryListContainer: { padding: SIZES.padding, paddingTop: 1, },
    categoryItemContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },
    categoryItem: { flexDirection: 'row', alignItems: 'center', flex: 1 },
    categoryIcon: { width: 24, height: 24, marginRight: 20 },
    categoryName: { fontSize: 20 },
    deleteButton: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingVertical: 4, 
        paddingHorizontal: 4, 
        backgroundColor: COLORS.lightGray, 
        borderRadius: 10,
        marginLeft: 6,
        marginRight:10
    }, 
    deleteButtonIcon: { 
        width: 20, 
        height: 20, 
        tintColor: 'red', 
        marginRight: 4 
    }, 
    // deleteButtonText: { 
    //     fontSize: 14, 
    //     color: 'white' 
    // }, 
    categoryDetailsContainer: { padding: SIZES.padding },
    categoryDetailsTitle: { fontSize: 20, fontWeight: 'bold' },
    expenseItem: { 
        marginBottom: SIZES.padding,
        padding: SIZES.padding,
        borderRadius: 5,
        backgroundColor: 'transparent', // Dinamik arka plan rengi için
    },    expenseTitle: { fontSize: 16, fontWeight: 'bold' },
    expenseDescription: { fontSize: 14, color: COLORS.gray },
    expenseLocation: { fontSize: 14, color: COLORS.gray },
    expenseTotal: { fontSize: 16, fontWeight: 'bold' },
    addExpenseForm: { marginTop: SIZES.padding },
    modalInput: { borderBottomWidth: 1, borderBottomColor: COLORS.gray, marginBottom: SIZES.padding },
    saveButton: { backgroundColor: COLORS.primary, padding: SIZES.base, borderRadius: 5 }, 
    saveButtonText: { color: COLORS.white, fontSize: 14, textAlign: 'center' }, 
    addCategoryButton: { 
        position: 'absolute', 
        top: 130,  
        right: 10, 
        backgroundColor: COLORS.primary, 
        borderRadius: 10, 
        // padding: 10 ,
        justifyContent: 'center',

        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0, // Kenar çizgilerini kaldırma
        borderColor: 'transparent', // Kenar rengini şeffaf yapma

    },
    addCategoryIcon: { 
        width: 44,  // İkonun genişliği
        height: 44, // İkonun yüksekliği
        tintColor: COLORS.white, // İkonun rengi
        resizeMode: 'contain', // İkonun ölçeklenmesini sağlar
        borderWidth: 0, // Kenar çizgilerini kaldırma
        borderColor: 'transparent', // Kenar rengini şeffaf yapma


    },
        
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalContent: { backgroundColor: COLORS.white, padding: SIZES.padding, borderRadius: 5, width: '80%' },
    modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: SIZES.padding },
    closeButton: { marginTop: SIZES.padding, alignItems: 'center' },
    closeButtonText: { color: COLORS.primary, fontSize: 16 },
});


export default Home;

