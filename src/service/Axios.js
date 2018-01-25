import axios from 'axios';
import {strNotNull} from './utils';

const instance = axios.create({

    baseURL: getBaseUrl(),
    headers: {
        'X-DP-APP-KEY': '467109f4b44be6398c17f6c058dfa7ee',
        'X-DP-CLIENT-IP': '192.168.2.231',
    },
    timeout: 20000,
});

function getBaseUrl() {
    return process.env.REACT_APP_DPAPI_ENV === "test" ? 'http://test.api.deshpro.com/v10' : 'https://api.deshpro.com/v10';

}

export function setAccessToken(token) {
    if (strNotNull(token))
        return token;
}
export function get(url, resolve, reject) {

    instance.get(url)
        .then((response) => {
            if (response.ok) {
                const {code, msg} = response.data;
                if (code === 0) {
                    resolve(response.data);
                } else {
                    reject(msg);
                }
            } else {
                netError(response, reject);
            }
        })
        .catch(function (error) {
            console.log(error);
            reject('Network response was not ok.');
        });
}

/*token过期*/
function netError(response, reject) {

}
