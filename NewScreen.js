import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { COLORS } from './constanst'; // Adjust import based on your file structure

const NewScreen = ({ route }) => {
    const { selectedCategory } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.chartContainer}>
                <PieChart
                    data={selectedCategory.expenses.map(expense => ({
                        name: expense.title,
                        amount: expense.total,
                        color: selectedCategory.color, // Use category color
                        legendFontColor: 'transparent', // Hide legend font color
                        legendFontSize: 0, // Hide legend font size
                    }))}
                    width={Dimensions.get('window').width - 40} // Adjust based on screen size
                    height={220}
                    chartConfig={{
                        backgroundColor: COLORS.white,
                        backgroundGradientFrom: COLORS.white,
                        backgroundGradientTo: COLORS.white,
                        decimalPlaces: 2,
                        color: (opacity = 1) => COLORS.primary, // Adjust chart color
                        labelColor: (opacity = 1) => COLORS.black, // Adjust label color
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    accessor="amount"
                    backgroundColor="transparent"
                    paddingLeft="0" // Remove padding to avoid any unnecessary space
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    chartContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
});

export default NewScreen;
