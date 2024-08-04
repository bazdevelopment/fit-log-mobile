import dayjs from "dayjs";
import { useState } from "react";
import { View } from "react-native";

import ChartCategories from "../../../components/templates/chart-categories";
import { PieChart } from "../../../components/templates/pie-chart";
import ScreenWrapper from "../../../components/templates/screen-wrapper";
import { DEVICE_TYPE } from "../../../constants/device-type";

const gymTimeData = [
  { date: "2024-01-15", timeSpent: 45 },
  { date: "2024-01-20", timeSpent: 60 },
  { date: "2024-02-12", timeSpent: 30 },
  { date: "2024-02-18", timeSpent: 50 },
  { date: "2024-03-10", timeSpent: 40 },
  { date: "2024-04-10", timeSpent: 40 },
  { date: "2024-05-10", timeSpent: 40 },
  { date: "2024-06-10", timeSpent: 45 },
  { date: "2024-07-10", timeSpent: 60 },
  { date: "2024-08-10", timeSpent: 40 },
];

// Example usage
const caloriesBurntData = [
  { date: "2024-01-01", caloriesBurned: 700 },
  { date: "2024-01-02", caloriesBurned: 450 },
  { date: "2024-02-01", caloriesBurned: 300 },
  { date: "2024-02-05", caloriesBurned: 500 },
  { date: "2024-03-06", caloriesBurned: 600 },
  { date: "2024-04-07", caloriesBurned: 200 },
  { date: "2024-05-08", caloriesBurned: 100 },
  { date: "2024-06-08", caloriesBurned: 0 },
  { date: "2024-07-08", caloriesBurned: 500 },
  { date: "2024-08-09", caloriesBurned: 1200 },
  { date: "2024-09-10", caloriesBurned: 800 },
  { date: "2024-10-11", caloriesBurned: 500 },
  { date: "2024-11-12", caloriesBurned: 350 },
];

const weightData = [
  { date: "2024-01-01", weight: 70 },
  { date: "2024-01-02", weight: 71 },
  { date: "2024-02-01", weight: 69 },
  { date: "2024-02-05", weight: 70 },
  { date: "2024-04-05", weight: 74 },
  { date: "2024-04-05", weight: 75 },
  { date: "2024-05-05", weight: 82 },
  { date: "2024-06-05", weight: 81 },
  { date: "2024-07-05", weight: 83 },
  { date: "2024-08-05", weight: 83 },
  { date: "2024-09-05", weight: 83 },
  { date: "2024-10-05", weight: 83 },
];

const getGymTimeChartData = gymTimeData => {
  const monthlyData = {};

  // Populate the monthlyData object using forEach
  gymTimeData.forEach(current => {
    const month = dayjs(current.date).format("MMMM"); // Get full month name
    if (!monthlyData[month]) {
      monthlyData[month] = { totalTime: 0, count: 0 };
    }
    monthlyData[month].totalTime += current.timeSpent;
    monthlyData[month].count += 1;
  });

  // Calculate the average time spent per month
  const chartData = Object.keys(monthlyData).map(month => ({
    month: month,
    totalTime: monthlyData[month].totalTime,
  }));

  return chartData;
};

const calculateAverageCaloriesPerMonth = recordsPerMonth => {
  const monthlyData = {};

  // Populate the monthlyData object using forEach
  recordsPerMonth.forEach(current => {
    const month = dayjs(current.date).format("MMMM"); // Get full month name
    if (!monthlyData[month]) {
      monthlyData[month] = { totalCalories: 0, count: 0 };
    }
    monthlyData[month].totalCalories += current.caloriesBurned;
    monthlyData[month].count += 1;
  });

  // Calculate the average calories burned per month
  const chartData = Object.keys(monthlyData).map(month => ({
    month: month,
    averageCalories: monthlyData[month].totalCalories / monthlyData[month].count,
  }));

  return chartData;
};

const calculateAverageWeightPerMonth = recordsPerMonth => {
  const monthlyData = {};

  // Populate the monthlyData object using forEach
  recordsPerMonth.forEach(current => {
    const month = dayjs(current.date).format("MMMM"); // Get full month name
    if (!monthlyData[month]) {
      monthlyData[month] = { totalWeight: 0, count: 0 };
    }
    monthlyData[month].totalWeight += current.weight;
    monthlyData[month].count += 1;
  });

  // Calculate the average weight per month
  const chartData = Object.keys(monthlyData).map(month => ({
    month: month,
    averageWeight: Math.round(monthlyData[month].totalWeight / monthlyData[month].count),
  }));

  return chartData;
};

const categories = ["Gym Time", "Cal. Burnt", "Weight", "BMI"];

const Page = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const onChangeCategory = (category: string) => {
    setActiveCategory(category);
  };
  const chartData = getGymTimeChartData(gymTimeData);
  const chartDataCaloriesBurnt = calculateAverageCaloriesPerMonth(caloriesBurntData);
  const calculateAverageWeight = calculateAverageWeightPerMonth(weightData);
  return (
    <ScreenWrapper>
      <View className={`mb-20 ${DEVICE_TYPE.IOS ? "mt-14" : "mt-24"}`}>
        <ChartCategories
          onChangeCategory={onChangeCategory}
          activeCategory={activeCategory}
          categories={categories}
          chartData={chartData}
          chartDataCaloriesBurnt={chartDataCaloriesBurnt}
          charDataAverageWeight={calculateAverageWeight}
        />
        <PieChart />
      </View>
    </ScreenWrapper>
  );
};

export default Page;
