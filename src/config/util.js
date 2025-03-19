// ✅ Deep Clone Function (Avoids state mutation issues)
export const deepClone = obj => JSON.parse(JSON.stringify(obj));

// ✅ Generate Unique ID
export const generateId = () => `id_${Math.random().toString(36).substr(2, 9)}`;

// ✅ Validate Email
export const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ✅ Format Currency
export const formatCurrency = (amount, currency = 'USD') =>
  new Intl.NumberFormat('en-US', {style: 'currency', currency}).format(amount);

// ✅ Get Random Color
export const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// ✅ Capitalize First Letter
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

// ✅ Format Date (e.g., "Jan 01, 2025")
export const formatDate = date =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(date));

/**
 * 📌 COMMON ERROR HANDLER (Try-Catch Wrapper)
 */
export const handleErrors = async func => {
  try {
    return await func();
  } catch (error) {
    console.error('Error:', error);
    return {error: 'Something went wrong. Please try again.'};
  }
};

/**
 * 📌 COMMONLY USED CONSTANTS
 */
export const REGEX = {
  phoneNumber: /^\+?[1-9]\d{1,14}$/, // E.164 Format
  postalCode: /^[0-9]{5}(?:-[0-9]{4})?$/, // US ZIP Code
};

export const log = (...args) => {
  if (__DEV__) console.log(...args);
};
