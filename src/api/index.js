import { apiPost, setUserData, apiDelete, apiGet } from '../utils/helper';
import { SIGNUP_API, LOGIN_API, LIST_PRODUCT } from '../utils/urls'
import catchErrors from '../utils/catchErrors'



// Authentication Actions
export const registerUser = async (user, setError, setLoading) => {
    return new Promise((resolve, rejct) => {
        apiPost(SIGNUP_API, user)
            .then((res) => {
                setUserData(res.data);
                setLoading(false);
                resolve(res);
            })
            .catch((error) => {
                const errorMsg = catchErrors(error);
                setError(errorMsg);
                setLoading(false);
                rejct(error);
            });
    });
};


export const loginUser = async (user, setError, setLoading) => {
    return new Promise((resolve, rejct) => {
        apiPost(LOGIN_API, user)
            .then((res) => {
                setUserData(res.data);
                setLoading(false);            
                resolve(res);
            })
            .catch((error) => {
                const errorMsg = catchErrors(error);
                setError(errorMsg);
                setLoading(false);
                rejct(error);
            });
    });
};


// Product Actions
export function listProduct(data, header) {
    return apiGet(LIST_PRODUCT, data, header);
}