import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

/** utility function used to get an item from storage by key */
export function getStorageItem(key: string) {
  const value = storage.getString(key);
  return value ? JSON.parse(value) || null : null;
}
/** utility function used to store an item in storage by key */
export function setStorageItem(key: string, value: string) {
  storage.set(key, JSON.stringify(value));
}

/** utility function used to remove an item from storage by key */
export function removeStorageItem(key: string) {
  storage.delete(key);
}
