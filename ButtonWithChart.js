import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit'; // Assuming you are using this chart library
import { COLORS, SIZES, icons } from '../constants'; // Adjust the import path as needed

const ButtonWithChart = ({ buttonAction, chartData }) => {
  const chartWidth = Dimensions.get('window').width - 40; // Adjust width if needed

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={buttonAction}
    >
      <View style={styles.chartContainer}>
        <PieChart
          data={chartData}
          width={chartWidth}
          height={220}
          chartConfig={{
            backgroundColor: COLORS.white,
            backgroundGradientFrom: COLORS.white,
            backgroundGradientTo: COLORS.white,
            decimalPlaces: 2,
            color: (opacity = 1) => COLORS.primary,
            labelColor: (opacity = 1) => COLORS.black,
            style: {
              borderRadius: 16,
            },
          }}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>
      <View style={styles.buttonIconContainer}>
        <Image source={icons.menu} style={styles.buttonIcon} /> {/* Replace `icons.menu` with the actual icon */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  chartContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 44,
    height: 44,
    tintColor: COLORS.white, // Adjust color if needed
  },
});

export default ButtonWithChart;
