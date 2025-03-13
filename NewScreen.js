import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { COLORS } from './constanst'; // Adjust import based on your file structure

const NewScreen = ({ route }) => {
    const { selectedCategory } = route.params;

    // Define colors for each segment
    const segmentColors = [
        '#FF6384', // Red
        '#36A2EB', // Blue
        '#FFCE56', // Yellow
        '#4BC0C0', // Teal
        '#9966FF', // Purple
        '#FF9F40', // Orange
        // Add more colors as needed
    ];

    // Map expenses to chart data with distinct colors
    const data = selectedCategory.expenses.map((expense, index) => ({
        name: expense.title,
        amount: expense.total,
        color: segmentColors[index % segmentColors.length], // Use a color from the segmentColors array
        legendFontColor: COLORS.black, // Color for legend font
        legendFontSize: 14, // Font size for legend
    }));

    // Calculate total expenses
    const totalExpenses = selectedCategory.expenses.reduce((acc, expense) => acc + expense.total, 0);

    return (
        <View style={styles.container}>
            <View style={styles.chartContainer}>
                <PieChart
                    data={data}
                    width={Dimensions.get('window').width - 40} // Adjust based on screen size
                    height={220}
                    chartConfig={{
                        backgroundColor: COLORS.white, // White background for chart
                        backgroundGradientFrom: COLORS.white,
                        backgroundGradientTo: COLORS.white,
                        decimalPlaces: 2,
                        color: (opacity = 1) => COLORS.black, // Color for chart segments
                        labelColor: (opacity = 1) => COLORS.black, // Color for labels
                        style: {
                            borderRadius: 16,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.3,
                            shadowRadius: 5,
                        },
                    }}
                    accessor="amount"
                    backgroundColor={COLORS.white} // Full white background
                    paddingLeft="0" // Remove padding to avoid any unnecessary space
                />
            </View>
            <View style={styles.legendContainer}>
                {data.map((item, index) => (
                    <View key={index} style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: item.color }]} />
                        <Text style={styles.legendText}>{item.name} - {item.amount} TL</Text>
                    </View>
                ))}
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Toplam Harcama: {totalExpenses} TL</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white, // White background for the whole screen
    },
    chartContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    legendContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    legendColor: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 10,
    },
    legendText: {
        color: COLORS.black, // Black text color for better visibility on white background
        fontSize: 14,
    },
    totalContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    totalText: {
        color: COLORS.black, // Black text color for better visibility on white background
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default NewScreen;
