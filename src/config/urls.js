export const API_BASED_URL = 'https://swapi.py4e.com/api';
export const getApi = endpoint => API_BASED_URL + endpoint;

export const PeopleUrl = getApi('/people');
export const FilmsUrl = getApi('/films');
export const PlanetsUrl = getApi('/planets');
export const SearchPeopleUrl = getApi('/people/?search=');
