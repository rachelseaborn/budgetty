import axios from 'axios';


const initialState = {

    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

function reducer(state = initialState, action) {
    // const { type, payload } = action;
    // const { email, firstName, lastName } = action.payload.user;

    switch (action.type) {
        case REQUEST_USER_DATA + '_PENDING':
            return state;
        case REQUEST_USER_DATA + '_FULFILLED':
            const { email, firstName, lastName } = action.payload.user;
            return { email, firstName, lastName };
        case REQUEST_USER_DATA + '_REJECTED':
            return state;
        default:
            return state;
    }
}

export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}

export default reducer

