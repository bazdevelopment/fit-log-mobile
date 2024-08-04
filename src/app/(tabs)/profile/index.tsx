import { useState } from "react";
import { Alert, Pressable, Switch, Text, TouchableOpacity, View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Image from "../../../components/atoms/image";
import { onLogout } from "../../../utilities/logout";

const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  profileImageUrl: "https://picsum.photos/id/1/200/300",
  workoutsCompleted: 150,
  totalCaloriesBurned: 12000,
  totalGymTime: "50 hours",
  favoriteExercise: "Bench Press",
  language: "en", // Default language is English
  theme: "light", // Default theme is light
};
const Page = () => {
  const [enableNotifications, setEnableNotifications] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedTheme, setSelectedTheme] = useState("light");

  const toggleNotifications = () => {
    setEnableNotifications(previousState => !previousState);
    // Logic to toggle push notifications in your app's backend or via a service
  };

  const changeProfilePicture = () => {
    // Logic to change profile picture
    // This is a placeholder for illustration purposes
    Alert.alert("Change Profile Picture functionality");
  };

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    // Logic to switch app language to 'lang'
  };

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
    // Logic to switch app theme to 'theme'
  };

  const handleLogout = () => {
    // Perform logout actions here, such as clearing user session, resetting state, etc.
    // Example: clear user token or remove user data from AsyncStorage

    // For demonstration, alert is shown
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Yes", onPress: onLogout },
      ],
      { cancelable: false }
    );
  };

  return (
    <View className="mt-32 px-5">
      <View className="mb-5 items-center">
        <TouchableOpacity accessibilityRole="button" onPress={changeProfilePicture}>
          <Image source={{ uri: userProfile.profileImageUrl }} className="size-24 rounded-full" />
        </TouchableOpacity>
        <Text className="mt-3 text-2xl font-bold">{userProfile.name}</Text>
        <Text className="text-sm text-gray-500">{userProfile.email}</Text>
      </View>

      <View className="mb-5">
        <Text className="mb-2 text-lg font-bold">Workout Statistics</Text>
        <View className="mb-1 flex-row justify-between">
          <Text className="text-gray-700">Workouts Completed:</Text>
          <Text className="font-bold">{userProfile.workoutsCompleted}</Text>
        </View>
        <View className="mb-1 flex-row justify-between">
          <Text className="text-gray-700">Total Calories Burned:</Text>
          <Text className="font-bold">{userProfile.totalCaloriesBurned}</Text>
        </View>
        <View className="mb-1 flex-row justify-between">
          <Text className="text-gray-700">Total Gym Time:</Text>
          <Text className="font-bold">{userProfile.totalGymTime}</Text>
        </View>
        <View className="mb-1 flex-row justify-between">
          <Text className="text-gray-700">Favorite Exercise:</Text>
          <Text className="font-bold">{userProfile.favoriteExercise}</Text>
        </View>
      </View>

      <View className="mb-5">
        <Text className="mb-2 text-lg font-bold">Settings</Text>
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-gray-700">Enable Push Notifications</Text>
          <Switch value={enableNotifications} onValueChange={toggleNotifications} />
        </View>
        <View className="mb-2 flex-row items-center justify-between">
          <Text className="mb-1 text-gray-700">Language:</Text>
          <View className="flex-row justify-between">
            <Pressable
              accessibilityRole="button"
              className={`mr-2 rounded-md px-3 py-2 ${selectedLanguage === "en" ? "bg-primary-default" : "bg-gray-300"}`}
              onPress={() => handleLanguageChange("en")}
            >
              <Text className="text-white">English</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              className={`rounded-md px-3 py-2 ${selectedLanguage === "ro" ? "bg-primary-default" : "bg-gray-300"}`}
              onPress={() => handleLanguageChange("ro")}
            >
              <Text className="text-white">Romanian</Text>
            </Pressable>
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="mb-1 text-gray-700">Theme:</Text>
          <View className="flex-row justify-between">
            <Pressable
              accessibilityRole="button"
              className={`mr-2 rounded-md px-3 py-2 ${selectedTheme === "light" ? "bg-primary-default" : "bg-gray-300"}`}
              onPress={() => handleThemeChange("light")}
            >
              <Text className="text-white">Light</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              className={`rounded-md px-3 py-2 ${selectedTheme === "dark" ? "bg-primary-default" : "bg-gray-300"}`}
              onPress={() => handleThemeChange("dark")}
            >
              <Text className="text-white">Dark</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Button buttonText="Log out" variant="primary" onPress={handleLogout} />
    </View>
  );
};

export default Page;
