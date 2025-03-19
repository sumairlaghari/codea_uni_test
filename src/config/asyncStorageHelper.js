import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Stores data in AsyncStorage.
 * @param {string} key - The key under which data is stored.
 * @param {any} value - The value to store (automatically stringified).
 */
export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(`AsyncStorage storeData error: ${error}`);
  }
};

/**
 * Retrieves data from AsyncStorage.
 * @param {string} key - The key to fetch data for.
 * @returns {Promise<any | null>} - The parsed value or null if not found.
 */
export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`AsyncStorage getData error: ${error}`);
    return null;
  }
};

/**
 * Updates an existing stored value in AsyncStorage.
 * @param {string} key - The key to update.
 * @param {Function} updateCallback - A function that receives the current value and returns the updated value.
 */
export const updateData = async (key, updateCallback) => {
  try {
    const existingData = await getData(key);
    if (existingData !== null) {
      const newData = updateCallback(existingData);
      await storeData(key, newData);
    }
  } catch (error) {
    console.error(`AsyncStorage updateData error: ${error}`);
  }
};

/**
 * Removes a specific item from AsyncStorage.
 * @param {string} key - The key of the item to remove.
 */
export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`AsyncStorage removeData error: ${error}`);
  }
};

/**
 * Clears all AsyncStorage data.
 */
export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error(`AsyncStorage clearAllData error: ${error}`);
  }
};

/**
 * Retrieves all stored keys in AsyncStorage.
 * @returns {Promise<string[]>} - An array of all keys.
 */
export const getAllKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    console.error(`AsyncStorage getAllKeys error: ${error}`);
    return [];
  }
};

/**
 * Retrieves all stored data as an object.
 * @returns {Promise<Object>} - An object with all key-value pairs.
 */
export const getAllData = async () => {
  try {
    const keys = await getAllKeys();
    const stores = await AsyncStorage.multiGet(keys);
    return Object.fromEntries(stores);
  } catch (error) {
    console.error(`AsyncStorage getAllData error: ${error}`);
    return {};
  }
};

// import { storeData, getData, updateData, removeData, clearAllData, getAllData } from '../utils/asyncStorageHelper';

// // 🔹 Store Data
// storeData('user', { name: 'John Doe', age: 30 });

// // 🔹 Get Data
// getData('user').then((data) => console.log(data));

// // 🔹 Update Data
// updateData('user', (prevData) => ({ ...prevData, age: prevData.age + 1 }));

// // 🔹 Remove a Specific Key
// removeData('user');

// // 🔹 Clear All Data
// clearAllData();

// // 🔹 Get All Stored Data
// getAllData().then((data) => console.log(data));
