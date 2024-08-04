import { useFont } from "@shopify/react-native-skia";
import dayjs from "dayjs";
import { StyleSheet, Text, View } from "react-native";
import { Bar, CartesianChart } from "victory-native";

import FontRegular from "../../../assets/fonts/HankenGrotesk-Regular.ttf";
import { Colors } from "../../../styles/colors";

const MonthlyGymVisitsSummary = ({ workoutData }) => {
  // Group data by month

  const monthlyData = workoutData.reduce((acc, current) => {
    const month = dayjs(current.date).format("MMMM"); // Get full month name
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += current.count;
    return acc;
  }, {});

  // Prepare data for the chart using map
  const chartData = Object.keys(monthlyData).map(month => ({
    month,
    count: monthlyData[month],
  }));

  const font = useFont(FontRegular, 12);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Workout Summary</Text>
      <CartesianChart
        data={chartData}
        xKey="month"
        yKeys={["count"]}
        padding={{ left: 10, right: 10, bottom: 5, top: 15 }}
        domainPadding={20}
        axisOptions={{
          font,
          tickCount: { y: 13, x: 10 },
          lineColor: "#d4d4d8",
          labelColor: Colors.primary,
          labelOffset: 5,
          formatXLabel: value => {
            return value.slice(0, 3);
          },
        }}
      >
        {/* 👇 render function exposes various data, such as points. */}
        {({ points, chartBounds }) => {
          return <Bar points={points.count} chartBounds={chartBounds} color={Colors.secondary} />;
        }}
      </CartesianChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    elevation: 1,
    height: 300,
    marginTop: -100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MonthlyGymVisitsSummary;
