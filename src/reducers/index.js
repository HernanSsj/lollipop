import { combineReducers } from 'redux';

import user from './user';

import player from './player'

export const reducers = combineReducers({ user , player});