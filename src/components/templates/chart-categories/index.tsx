import { Circle, useFont } from "@shopify/react-native-skia";
import { Text as SKText } from "@shopify/react-native-skia";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SharedValue, useDerivedValue } from "react-native-reanimated";
import { CartesianChart, Line, useChartPressState } from "victory-native";

import FontRegular from "../../../assets/fonts/HankenGrotesk-Regular.ttf";
import { Colors } from "../../../styles/colors";

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color={Colors.primary} />;
}

const ChartCategories = ({
  activeCategory,
  categories,
  onChangeCategory,
  chartData,
  chartDataCaloriesBurnt,
  charDataAverageWeight,
}) => {
  const fontChartLabels = useFont(FontRegular, 12);
  const fontChartValue = useFont(FontRegular, 20);

  return (
    <>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          backgroundColor: Colors.primaryTransparent,
          borderRadius: 100,
        }}
      >
        {categories.map((categoryName, index) => (
          <TouchableOpacity
            accessibilityRole="button"
            key={index}
            onPress={() => onChangeCategory(categoryName)}
            style={activeCategory === categoryName ? styles.categoriesBtnActive : styles.categoriesBtn}
          >
            <Text style={activeCategory === categoryName ? styles.categoryTextActive : styles.categoryText}>
              {categoryName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: 500 }}>
        {activeCategory === "Gym Time" && (
          <GymTimeLineChart chartData={chartData} fontChartLabels={fontChartLabels} fontChartValue={fontChartValue} />
        )}
        {activeCategory === "Cal. Burnt" && (
          <CaloriesBurnetLineChart
            chartData={chartDataCaloriesBurnt}
            fontChartLabels={fontChartLabels}
            fontChartValue={fontChartValue}
          />
        )}
        {activeCategory === "Weight" && (
          <AverageWeightLineChart
            chartData={charDataAverageWeight}
            fontChartLabels={fontChartLabels}
            fontChartValue={fontChartValue}
          />
        )}
      </View>
    </>
  );
};

const GymTimeLineChart = ({ chartData, fontChartLabels, fontChartValue }) => {
  const { state, isActive } = useChartPressState({ x: 0, y: { totalTime: 0 } });
  const value = useDerivedValue(() => {
    return state.y.totalTime.value.value + " minutes";
  }, [state]);

  return (
    <CartesianChart
      data={chartData}
      xKey="month"
      yKeys={["totalTime"]}
      padding={{ left: 10, right: 10, bottom: 5, top: 15 }}
      domainPadding={20}
      chartPressState={state}
      axisOptions={{
        font: fontChartLabels,
        tickCount: { y: 13, x: 10 },
        lineColor: "#d4d4d8",
        labelColor: Colors.primary,
        labelOffset: 5,
        formatXLabel: label => {
          return label.slice(0, 3);
        },
      }}
    >
      {({ points, chartBounds }) => {
        return (
          <>
            <SKText x={chartBounds.left + 40} y={40} font={fontChartValue} text={value} color="red" style="fill" />
            <Line points={points.totalTime} color="red" strokeWidth={3} animate={{ type: "timing", duration: 300 }} />
            {isActive && <ToolTip x={state.x.position} y={state.y.totalTime.position} />}
          </>
        );
      }}
    </CartesianChart>
  );
};

const CaloriesBurnetLineChart = ({ chartData, fontChartLabels, fontChartValue }) => {
  const { state, isActive } = useChartPressState({ x: 0, y: { averageCalories: 0 } });

  const value = useDerivedValue(() => {
    return state.y.averageCalories.value.value + " calories";
  }, [state]);

  return (
    <CartesianChart
      data={chartData}
      xKey="month"
      yKeys={["averageCalories"]}
      padding={{ left: 10, right: 10, bottom: 5, top: 15 }}
      domainPadding={20}
      chartPressState={state}
      axisOptions={{
        font: fontChartLabels,
        tickCount: { y: 13, x: 10 },
        lineColor: "#d4d4d8",
        labelColor: Colors.primary,
        labelOffset: 5,
        formatXLabel: value => {
          return value.slice(0, 3);
        },
      }}
    >
      {({ points, chartBounds }) => {
        return (
          <>
            <SKText x={chartBounds.left + 40} y={40} font={fontChartValue} text={value} color="red" style="fill" />
            <Line
              points={points.averageCalories}
              color="red"
              strokeWidth={3}
              animate={{ type: "timing", duration: 300 }}
            />
            {isActive && <ToolTip x={state.x.position} y={state.y.averageCalories.position} />}
          </>
        );
      }}
    </CartesianChart>
  );
};

const AverageWeightLineChart = ({ chartData, fontChartLabels, fontChartValue }) => {
  const { state, isActive } = useChartPressState({ x: 0, y: { averageWeight: 0 } });

  const value = useDerivedValue(() => {
    return state.y.averageWeight.value.value + " kg average weight";
  }, [state]);

  return (
    <CartesianChart
      data={chartData}
      xKey="month"
      yKeys={["averageWeight"]}
      padding={{ left: 10, right: 10, bottom: 5, top: 15 }}
      domainPadding={20}
      chartPressState={state}
      axisOptions={{
        font: fontChartLabels,
        tickCount: { y: 13, x: 10 },
        lineColor: "#d4d4d8",
        labelColor: Colors.primary,
        labelOffset: 5,
        formatXLabel: value => {
          return value.slice(0, 3);
        },
      }}
    >
      {({ points, chartBounds }) => {
        return (
          <>
            <SKText x={chartBounds.left + 20} y={40} font={fontChartValue} text={value} color="red" style="fill" />
            <Line
              points={points.averageWeight}
              color="red"
              strokeWidth={3}
              animate={{ type: "timing", duration: 300 }}
            />
            {isActive && <ToolTip x={state.x.position} y={state.y.averageWeight.position} />}
          </>
        );
      }}
    </CartesianChart>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.grey,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.white,
  },
  categoryTextActive: {
    fontSize: 14,
    color: "#000",
  },
  categoriesBtn: {
    padding: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  categoriesBtnActive: {
    padding: 10,
    paddingHorizontal: 14,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
    borderRadius: 10,
  },
});
export default ChartCategories;
