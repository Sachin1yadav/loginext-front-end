// import axios from "axios";
// import { UserActionTypes } from "./Userprofile.actionType";

// export const getUserSuccess = (data) => ({
//   type: UserActionTypes.GET_USER_SUCCESS,
//   payload: data,
// });

// export const getUserError = (error) => ({
//   type: UserActionTypes.GET_USER_ERROR,
//   payload: error,
// });

// export const addUserSuccess = (data) => ({
//   type: UserActionTypes.ADD_USER_SUCCESS,
//   payload: data,
// });

// export const addUserError = (error) => ({
//   type: UserActionTypes.ADD_USER_ERROR,
//   payload: error,
// });

// export const editUserSuccess = (data) => ({
//   type: UserActionTypes.EDIT_USER_SUCCESS,
//   payload: data,
// });

// export const editUserError = (error) => ({
//   type: UserActionTypes.EDIT_USER_ERROR,
//   payload: error,
// });

// export const deleteUserSuccess = (userId) => ({
//   type: UserActionTypes.DELETE_USER_SUCCESS,
//   payload: userId,
// });

// export const deleteUserError = (error) => ({
//   type: UserActionTypes.DELETE_USER_ERROR,
//   payload: error,
// });

// export const getUsers = () => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       "https://chick-gabardine.cyclic.app/users"
//     );
//     dispatch(getUserSuccess(response.data));
//   } catch (error) {
//     dispatch(getUserError(error.message));
//   }
// };

// export const addUser = (user) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       "https://chick-gabardine.cyclic.app/users",
//       user
//     );
//     dispatch(addUserSuccess(response.data));
//   } catch (error) {
//     dispatch(addUserError(error.message));
//   }
// };

// export const editUseraction = (user) => async (dispatch) => {
//   console.log("user", user);
//   try {
//     const response = await axios.put(
//       `https://chick-gabardine.cyclic.app/users/${user.id}`,
//       user
//     );
//     console.log("response", response);
//     dispatch(editUserSuccess(response.data));
//   } catch (error) {
//     dispatch(editUserError(error.message));
//   }
// };

// export const deleteUseraction = (userId) => async (dispatch) => {
//   try {
//     await axios.delete(`https://chick-gabardine.cyclic.app/users/${userId}`);
//     dispatch(deleteUserSuccess(userId));
//     console.log("sucess");
//   } catch (error) {
//     dispatch(deleteUserError(error.message));
//     console.log("error.message", error.message);
//   }
// };

import axios from "axios";
import { UserActionTypes } from "./Userprofile.actionType";

// Action creators for fetching users
const getUserLoading = () => ({
  type: UserActionTypes.GET_USER_LOADING,
});

const getUserSuccess = (users) => ({
  type: UserActionTypes.GET_USER_SUCCESS,
  payload: users,
});

const getUserError = (error) => ({
  type: UserActionTypes.GET_USER_ERROR,
  payload: error,
});

// Action creators for adding user
const addUserLoading = () => ({
  type: UserActionTypes.ADD_USER_LOADING,
});

const addUserSuccess = (user) => ({
  type: UserActionTypes.ADD_USER_SUCCESS,
  payload: user,
});

const addUserError = (error) => ({
  type: UserActionTypes.ADD_USER_ERROR,
  payload: error,
});

// Action creators for editing user
const editUserLoading = () => ({
  type: UserActionTypes.EDIT_USER_LOADING,
});

const editUserSuccess = (user) => ({
  type: UserActionTypes.EDIT_USER_SUCCESS,
  payload: user,
});

const editUserError = (error) => ({
  type: UserActionTypes.EDIT_USER_ERROR,
  payload: error,
});

// Action creators for deleting user
const deleteUserLoading = () => ({
  type: UserActionTypes.DELETE_USER_LOADING,
});

const deleteUserSuccess = (userId) => ({
  type: UserActionTypes.DELETE_USER_SUCCESS,
  payload: userId,
});

const deleteUserError = (error) => ({
  type: UserActionTypes.DELETE_USER_ERROR,
  payload: error,
});

// Async action to fetch users
export const getUsers = () => {
  return async (dispatch) => {
    dispatch(getUserLoading());

    try {
      const response = await axios.get(
        "https://chick-gabardine.cyclic.app/users/"
      );
      const users = response.data;

      dispatch(getUserSuccess(users));
    } catch (error) {
      dispatch(getUserError(error.message));
    }
  };
};

// Async action to add a user
export const addUser = (user) => {
  return async (dispatch) => {
    dispatch(addUserLoading());

    try {
      const response = await axios.post(
        "https://chick-gabardine.cyclic.app/users/",
        user
      );
      const newUser = response.data;

      dispatch(addUserSuccess(newUser));
    } catch (error) {
      dispatch(addUserError(error.message));
    }
  };
};

// Async action to edit a user
export const editUseraction = (user) => {
  return async (dispatch) => {
    dispatch(editUserLoading());

    try {
      const response = await axios.put(
        `https://chick-gabardine.cyclic.app/users/${user.id}`,
        user
      );
      const updatedUser = response.data;

      dispatch(editUserSuccess(updatedUser));
    } catch (error) {
      dispatch(editUserError(error.message));
    }
  };
};

// Async action to delete a user
export const deleteUseraction = (userId) => {
  return async (dispatch) => {
    dispatch(deleteUserLoading());

    try {
      await axios.delete(`https://chick-gabardine.cyclic.app/users/${userId}`);

      dispatch(deleteUserSuccess(userId));
    } catch (error) {
      dispatch(deleteUserError(error.message));
    }
  };
};
