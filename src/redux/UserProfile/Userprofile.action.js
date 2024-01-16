import axios from "axios";
import { UserActionTypes } from "./Userprofile.actionType";
 
export const getUserSuccess = (data) => ({
  type: UserActionTypes.GET_USER_SUCCESS,
  payload: data,
});

export const getUserError = (error) => ({
  type: UserActionTypes.GET_USER_ERROR,
  payload: error,
});

export const addUserSuccess = (data) => ({
  type: UserActionTypes.ADD_USER_SUCCESS,
  payload: data,
});

export const addUserError = (error) => ({
  type: UserActionTypes.ADD_USER_ERROR,
  payload: error,
});

export const editUserSuccess = (data) => ({
  type: UserActionTypes.EDIT_USER_SUCCESS,
  payload: data,
});

export const editUserError = (error) => ({
  type: UserActionTypes.EDIT_USER_ERROR,
  payload: error,
});

export const deleteUserSuccess = (userId) => ({
  type: UserActionTypes.DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserError = (error) => ({
  type: UserActionTypes.DELETE_USER_ERROR,
  payload: error,
});

export const getUsers = () => async (dispatch) => {
  dispatch({ type: UserActionTypes.GET_USER_LOADING });
  try {
    const response = await axios.get("https://dent-telling-morning.glitch.me/users/");
    dispatch(getUserSuccess(response.data));
  } catch (error) {
    dispatch(getUserError(error.message));
  }
};

export const addUser = (user) => async (dispatch) => {
  dispatch({ type: UserActionTypes.ADD_USER_LOADING });
  try {
    const response = await axios.post("https://dent-telling-morning.glitch.me/users", user);
    dispatch(addUserSuccess(response.data));
  } catch (error) {
    dispatch(addUserError(error.message));
  }
};

export const editUseraction = (user) => async (dispatch) => {
  console.log("user",user)
  dispatch({ type: UserActionTypes.EDIT_USER_LOADING });
  try {
    const response = await axios.put(`https://dent-telling-morning.glitch.me/users/${user.id}`, user);
    console.log("response",response)
    dispatch(editUserSuccess(response.data));
  } catch (error) {
    dispatch(editUserError(error.message));
  }
};

export const deleteUseraction = (userId) => async (dispatch) => {
  dispatch({ type: UserActionTypes.DELETE_USER_LOADING });
  try {
    await axios.delete(`https://dent-telling-morning.glitch.me/users/${userId}`);
    dispatch(deleteUserSuccess(userId));
    console.log("scuess")
  } catch (error) {
    console.log("error.message",error.message)
    dispatch(deleteUserError(error.message));
  }
};
