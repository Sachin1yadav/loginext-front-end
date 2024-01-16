import { UserActionTypes } from "./Userprofile.actionType";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USER_LOADING:
    case UserActionTypes.ADD_USER_LOADING:
    case UserActionTypes.EDIT_USER_LOADING:
    case UserActionTypes.DELETE_USER_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case UserActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };

    case UserActionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
        error: null,
      };

    case UserActionTypes.EDIT_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        loading: false,
        error: null,
      };

    case UserActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        loading: false,
        error: null,
      };

    case UserActionTypes.GET_USER_ERROR:
    case UserActionTypes.ADD_USER_ERROR:
    case UserActionTypes.EDIT_USER_ERROR:
    case UserActionTypes.DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userProfileReducer;
