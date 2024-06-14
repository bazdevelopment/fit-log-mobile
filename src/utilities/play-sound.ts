import { Audio } from "expo-av";

Audio.setAudioModeAsync({
  playsInSilentModeIOS: true,
});
const soundFileSuccess = require("../assets/media/success-sound.mp3");
const soundFileError = require("../assets/media/error-sound.mp3");

type EventType = "success" | "error";

const soundByEvent = {
  ["success"]: soundFileSuccess,
  ["error"]: soundFileError,
};
export async function playSound(eventType: EventType) {
  const sound = new Audio.Sound();

  try {
    await sound.loadAsync(soundByEvent[eventType]);
    await sound.playAsync();
  } catch (error) {
    console.error(error);
  }
}
