// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Svg } from 'react-native-svg';
// import { VictoryPie } from 'victory-native';
// import { SIZES, FONTS, COLORS } from './constanst'; // Adjust the import path for your constants

// const MyInteractivePieChart = ({ chartData, totalExpenseCount }) => {
//     const [selectedCategory, setSelectedCategory] = useState(null);

//     const handleSelectCategoryByName = (name) => {
//         const category = chartData.find((item) => item.name === name);
//         setSelectedCategory(category);
//     };

//     // Define a color scale with as many colors as there are categories
//     const colorScales = chartData.map((_, index) => COLORS[index % COLORS.length]);

//     return (
//         <View style={styles.container}>
//             <Svg width={SIZES.width} height={SIZES.width} style={{ width: "100%", height: "auto" }}>
//                 <VictoryPie
//                     standalone={false} // Android workaround
//                     data={chartData}
//                     labels={({ datum }) => `${datum.y}`}
//                     radius={({ datum }) =>
//                         selectedCategory && selectedCategory.name === datum.name
//                             ? SIZES.width * 0.8
//                             : SIZES.width * 0.8 - 10
//                     }
//                     innerRadius={70}
//                     labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
//                     style={{
//                         labels: { fill: "white", ...FONTS.body3 }, // Added font style for consistency
//                         data: {
//                             stroke: "white", // Border color
//                             strokeWidth: 2 // Border thickness
//                         },
//                         parent: {
//                             shadowColor: '#000', // Shadow effect
//                             shadowOffset: { width: 0, height: 2 },
//                             shadowOpacity: 0.2,
//                             shadowRadius: 3.84,
//                             elevation: 5, // Android shadow
//                         },
//                     }}
//                     width={SIZES.width}
//                     height={SIZES.width}
//                     colorScale={colorScales} // Apply the color scale
//                     events={[
//                         {
//                             target: "data",
//                             eventHandlers: {
//                                 onPress: () => {
//                                     return [
//                                         {
//                                             target: "labels",
//                                             mutation: (props) => {
//                                                 let categoryName = chartData[props.index].name;
//                                                 handleSelectCategoryByName(categoryName);
//                                             },
//                                         },
//                                     ];
//                                 },
//                             },
//                         },
//                     ]}
//                 />
//             </Svg>
//             <View style={styles.centerView}>
//                 <Text style={FONTS.h1}>{totalExpenseCount}</Text>
//                 <Text style={FONTS.body3}>Expenses</Text>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { alignItems: 'center', justifyContent: 'center' },
//     centerView: { position: 'absolute', top: '42%', left: "42%", alignItems: 'center' }
// });

// export default MyInteractivePieChart;
