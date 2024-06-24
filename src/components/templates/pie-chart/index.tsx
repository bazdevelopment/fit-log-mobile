import { StyleSheet, Text, View } from "react-native";
import { Pie, PolarChart } from "victory-native";

import Label from "../../atoms/label";

function generateRandomColor() {
  // Generating a random number between 0 and 0xFFFFFF
  const randomColor = Math.floor(Math.random() * 0xffffff);
  // Converting the number to a hexadecimal string and padding with zeros
  return `#${randomColor.toString(16).padStart(6, "0")}`;
}

const data = [
  {
    value: 10,
    color: generateRandomColor(),
    label: "Chest",
  },
  {
    value: 20,
    color: generateRandomColor(),
    label: "Arms",
  },
  {
    value: 30,
    color: generateRandomColor(),
    label: "Shoulders",
  },
  {
    value: 25,
    color: generateRandomColor(),
    label: "Back",
  },
  {
    value: 15,
    color: generateRandomColor(),
    label: "Legs",
  },
];

export const PieChart = () => {
  return (
    <View style={styles.container}>
      <Label labelText="Most frequently trained muscle groups" as="h3" additionalLabelStyle="text-center" />
      <View style={styles.chartContainer}>
        <PolarChart data={data} colorKey="color" valueKey="value" labelKey="label">
          <Pie.Chart>
            {() => {
              return <Pie.Slice />;
            }}
          </Pie.Chart>
        </PolarChart>
      </View>
      <View style={styles.legendContainer}>
        {data.map((val, index) => {
          return (
            <View key={index} style={styles.legendItem}>
              <View style={{ width: 10, height: 10, backgroundColor: val.color }} />
              <Text>{val.label}</Text>
              <Text>{`${val.value}%`}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  chartContainer: {
    marginTop: 20,
    flex: 4,
    backgroundColor: "#fff",
  },
  legendContainer: {
    flex: 1,
    flexDirection: "column",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    alignSelf: "flex-end",
  },
});
