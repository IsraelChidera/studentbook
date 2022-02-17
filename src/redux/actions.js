import * as types from './actionTypes';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';


// Creating all actions related to registering a user
const registerStart = () => ({
    type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
});

const registerFail = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
});

// Creating actions for logging in users
const loginStart = () => ({
    type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
});

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
});

// dispatching the actions to be used by all aspects of the app
export const registerInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart());
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {                
                updateProfile(auth.currentUser, {
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch((error) => dispatch(registerFail(error.message)))
    }
}

// Dispatching the actions used by all aspect of the app (Login)
export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {                
                // updateProfile(auth.currentUser, {
                //     displayName
                // })
                dispatch(loginSuccess(user))
            })
            .catch((error) => dispatch(loginFail(error.message)))
    }
}
