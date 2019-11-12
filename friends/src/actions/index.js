import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const CREATE_FRIEND_START = 'CREATE_FRIEND_START';
export const CREATE_FRIEND_SUCCESS = 'CREATE_FRIEND_SUCCESS';
export const CREATE_FRIEND_FAILURE = 'CREATE_FRIEND_FAILURE';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });

    axiosWithAuth()
        .get(`/api/friends`)
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log(error.message);
            dispatch({ type: FETCH_FRIENDS_FAILURE, payload: error })
        })
}

export const createFriend = friend => dispatch => {
    dispatch({ type: CREATE_FRIEND_START });
    axiosWithAuth()
        .post(`/api/friends`, friend)
        .then(reponse => {
            dispatch({ type: CREATE_FRIEND_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log(error.message);
            dispatch({ type: CREATE_FRIEND_FAILURE, payload: error })
        })
}