import 'isomorphic-fetch';
import * as ku from '../lib/ke-utils';
const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
const units = 'metric';
const weatherURLRoot = 'http://api.openweathermap.org/data/2.5/weather?';
const forecastURLRoot = 'http://api.openweathermap.org/data/2.5/forecast?';

export const rejectErrors = (res) => {
  const { status } = res;
  if (status >= 200 && status < 300) {
    return res;
  }
  return Promise.reject({ message: res.statusText });
};

export const fetchJson = (url) => (
  fetch(url)
  .then(rejectErrors)
  .then((res) => res.json())
);

export default {
  notes: {

    create() {
      return fetchJson(
        '/api/notes',
        {
          method: 'POST',
        }
      );
    },

// `/api/notes/${id}`,
    getWeather(id) {
      ku.log('id', id);
      const url = 'http://ipinfo.io/json';
      return fetchJson(url)
      .then((data) => {
        ku.log('data', data);
        return data;
      });
    },

    delete(id) {
      return fetchJson(
        `/api/notes/${id}`,
        {
          method: 'DELETE',
        }
      );
    },
  },
};
