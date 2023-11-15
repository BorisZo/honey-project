import { createAsyncThunk } from '@reduxjs/toolkit';
import {GlobalError, IUser, LoginMutation, RegisterMutation, RegisterResponse, ValidationError} from '@/types';
import axiosApi from '@/axiosApi';
import { isAxiosError } from 'axios';
import { unsetUser } from './usersSlice';

export const register = createAsyncThunk<
  RegisterResponse,
  RegisterMutation,
  { rejectValue: ValidationError }
>('users/accounts', async (registerMutation, { rejectWithValue }) => {
  try {
    const response = await axiosApi.post<RegisterResponse>('/users', registerMutation);
    return response.data;
  } catch (e) {
    if (isAxiosError(e) && e.response && e.response.status === 400) {
      return rejectWithValue(e.response.data);
    }

    throw e;
  }
});

export const login = createAsyncThunk<IUser, LoginMutation, { rejectValue: GlobalError }>(
    'users/login',
    async (loginMutation, { rejectWithValue }) => {
      try {
        const response = await axiosApi.post<RegisterResponse>('/users/sessions', loginMutation);
        return response.data.user;
      } catch (e) {
        if (isAxiosError(e) && e.response && e.response.status === 400) {
          return rejectWithValue(e.response.data);
        }

        throw e;
      }
    },
);

export const logout = createAsyncThunk('users/logout', async (_, { dispatch }) => {
    await axiosApi.delete('/users/sessions');

    dispatch(unsetUser());
});
