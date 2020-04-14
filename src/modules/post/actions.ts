import { createAsyncAction } from 'typesafe-actions';
import { Post } from '../../lib/api/post';
import { AxiosError } from 'axios';

export const READ_POST = 'post/READ_POST';
export const READ_POST_SUCCESS = 'post/READ_POST_SUCCESS';
export const READ_POST_FAILURE = 'post/READ_POST_FAILURE';

export const readPostAsync = createAsyncAction(
    READ_POST,
    READ_POST_SUCCESS,
    READ_POST_FAILURE
)<number, Post, AxiosError>();