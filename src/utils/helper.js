import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { PermissionsAndroid, Platform } from 'react-native';

export async function getHeaders() {
    let userData = await AsyncStorage.getItem('userData');
    if (userData) {
        userData = JSON.parse(userData);
        return {
            authorization: userData.accessToken,
        };
    }
    return {};
}

export function setUserData(data) {
    data = JSON.stringify(data);
    return AsyncStorage.setItem('userData', data);
}

export function setItem(key, data) {
    data = JSON.stringify(data);
    return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key).then((data) => {
            resolve(JSON.parse(data));
        });
    });
}

export function removeItem(key) {
    return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate(key) {
    return AsyncStorage.clear();
}

export async function getUserData() {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('userData').then((data) => {
            resolve(JSON.parse(data));
        });
    });
}

export async function clearUserData() {
    return AsyncStorage.removeItem('userData');
}

export async function apiReq(
    endPoint,
    data,
    method,
    headers,
    requestOptions = {},
) {
    console.log(endPoint, 'the endpoint vaoue');
    return new Promise(async (res, rej) => {
        const getTokenHeader = await getHeaders();
        headers = {
            ...getTokenHeader,
            ...headers,
        };

        if (method === 'get' || method === 'delete') {
            data = {
                ...requestOptions,
                ...data,
                headers,
            };
        }

        axios[method](endPoint, data, {headers})
            .then((result) => {
                const {data} = result;

                if (data.status === false) {
                    return rej(data);
                }

                return res(data);
            })
            .catch((error) => {
                console.log(error);
                console.log(error && error.response, 'the error respne');
                if (error && error.response && error.response.status === 401) {
                    clearUserData();
                }
                if (
                    error &&
                    error.response &&
                    error.response.data &&
                    error.response.data.error
                ) {
                return rej(error.response.data);
                } else {
                    return rej({message: 'Network Error', error: 'Network Error'});
                }
                // eslint-disable-next-line no-unreachable
                return rej(error);
            });
    });
}

export function apiPost(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
    return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'put', headers);
}

export function randomString(len = 5) {
    let text = '';
    const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

export function getWeekDays(locale) {
    const baseDate = new Date(Date.UTC(2019, 8, 30)); // just a Monday

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
        weekDays.push(baseDate.toLocaleDateString(locale, {weekday: 'long'}));
        baseDate.setDate(baseDate.getDate() + 1);
    }
    return weekDays;
}

export const androidCameraPermission = () =>
    new Promise(async (resolve, reject) => {
        try {
            if (Platform.OS === 'android' && Platform.Version > 22) {
                const granted = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                ]);

                if (
                    granted['android.permission.CAMERA'] !== 'granted' ||
                    granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted' ||
                    granted['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted'
                ) {
                console.log('you do not have permission to sellect image');
                    return resolve(false);
                }
                return resolve(true);
            }
            return resolve(true);
        } catch (error) {
            return resolve(false);
        }
});

export const locationPermission = () => {
    if (Platform.OS === 'android' && Platform.Version > 22) {
        return PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
    }

    return Promise.resolve('granted');
};
