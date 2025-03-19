import {store} from '../redux/reducer';
import {create} from 'apisauce';
import NetInfo from '@react-native-community/netinfo';
import {GlobalImports} from './globalImports';
import {API_BASED_URL} from './urls';
import {message} from '../redux/message';

// ✅ API Client
const API = create({
  baseURL: API_BASED_URL,
  timeout: 40000,
});

const isConnected = async () => {
  const state = await NetInfo.fetch();
  return state.isInternetReachable;
};

// ✅ Get Auth Token from Redux
const getAuthToken = () => {
  const {token} = store.getState().userData || {};
  return token;
};

// ✅ Generic Error Handler
const errorHandler = response => {
  if (response?.data?.message === 'Unauthenticated.') {
    store.dispatch({type: GlobalImports.types.Logout}); // 🔴 Auto logout on token expiry
    return message.errors.sessionExpired;
  }

  if (response?.status === 422) {
    return (
      Object.values(response?.data?.errors)?.[0]?.[0] ||
      message.errors.validationError
    );
  }

  return response?.data?.message || message.errors.apiFail;
};

// ✅ Helper for Headers
const getHeaders = (isFormData = false, useAuth = false) => {
  let headers = {
    'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
  };
  if (useAuth) {
    const token = getAuthToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

// ✅ Wrapper to Check Network and Execute API Calls
const executeRequest = async requestFunction => {
  if (!(await isConnected())) {
    return GlobalImports.errorMessage(message.errors.noInternet);
  }
  return requestFunction();
};

// ✅ GET Request (With Auth)
export const getRequest = async (endpoint, params = {}) =>
  executeRequest(async () => {
    const response = await API.get(endpoint, params, {
      headers: getHeaders(false, true),
    });
    return response.ok
      ? response.data
      : GlobalImports.errorMessage(errorHandler(response));
  });

// ✅ GET Request (Without Auth)
export const getRequestWithoutAuth = async (endpoint, params = {}) =>
  executeRequest(async () => {
    const response = await API.get(endpoint, params, {headers: getHeaders()});
    return response.ok
      ? response.data
      : GlobalImports.errorMessage(errorHandler(response));
  });

// ✅ POST Request (With Auth)
export const postRequestWithToken = async (endpoint, body) =>
  executeRequest(async () => {
    const response = await API.post(endpoint, body, {
      headers: getHeaders(false, true),
    });
    return response.ok
      ? response.data
      : GlobalImports.errorMessage(errorHandler(response));
  });

// ✅ POST Request (Without Auth)
export const postRequest = async (endpoint, body) =>
  executeRequest(async () => {
    const response = await API.post(endpoint, body, {headers: getHeaders()});
    return response.ok
      ? response.data
      : GlobalImports.errorMessage(errorHandler(response));
  });

// ✅ POST Request (With FormData & Auth)
export const postRequestWithTokenFormData = async (endpoint, body) =>
  executeRequest(async () => {
    const response = await API.post(endpoint, body, {
      headers: getHeaders(true, true),
    });
    return response.ok
      ? response.data
      : GlobalImports.errorMessage(errorHandler(response));
  });

// ✅ POST Request (With FormData & Without Auth)
export const postRequestWithoutTokenFormData = async (endpoint, body) =>
  executeRequest(async () => {
    const response = await API.post(endpoint, body, {
      headers: getHeaders(true),
    });
    return response.ok
      ? response.data
      : GlobalImports.errorMessage(errorHandler(response));
  });

// ✅ PUT Request (With Auth)
export const putRequestWithToken = async (endpoint, body) =>
  executeRequest(async () => {
    const response = await API.put(endpoint, body, {
      headers: getHeaders(false, true),
    });
    return response.ok
      ? response.data
      : GlobalImports.errorMessage(errorHandler(response));
  });

// ✅ PUT Request (Without Auth)
export const putRequestWithoutToken = async (endpoint, body) =>
  executeRequest(async () => {
    const response = await API.put(endpoint, body, {headers: getHeaders()});
    return response.ok
      ? response.data
      : GlobalImports.errorMessage(errorHandler(response));
  });

// ✅ DELETE Request (With Auth)
export const deleteRequestWithToken = async endpoint =>
  executeRequest(async () => {
    const response = await API.delete(
      endpoint,
      {},
      {headers: getHeaders(false, true)},
    );
    return response.ok
      ? response.data
      : GlobalImports.errorMessage(errorHandler(response));
  });

// ✅ DELETE Request (Without Auth)
export const deleteRequestWithoutToken = async endpoint =>
  executeRequest(async () => {
    const response = await API.delete(endpoint, {}, {headers: getHeaders()});
    return response.ok
      ? response.data
      : GlobalImports.errorMessage(errorHandler(response));
  });
