import * as actions from '../actions';

const initialState = {
    friends: [],
    isFetching: false,
    isPosting: false,
    error: ''
};

export default function friendsReducer(state = initialState, action) {
    switch (action.type) {

        ///get friends
        case actions.FETCH_FRIENDS_START:
            return { ...state, friends: [], isFetching: true, isPosting: false, error: '' };
        case actions.FETCH_FRIENDS_SUCCESS:
            return { ...state, friends: action.payload, isFetching: false, isPosting: false, error: '' };
        case actions.FETCH_FRIENDS_FAILURE:
            return { ...state, friends: [], isFetching: false, isPosting: false, error: action.payload };

        /// create friend
        case actions.CREATE_FRIENDS_START:
            return { ...state, friends: [], isFetching: false, isPosting: true, error: '' };
        case actions.CREATE_FRIENDS_SUCCESS:
            return { ...state, friends: action.payload, isFetching: false, isPosting: false, error: '' };
        case actions.CREATE_FRIENDS_FAILURE:
            return { ...state, friends: [], isFetching: false, isPosting: false, error: action.payload };

        // default
        default:
            return state;
    }
};

