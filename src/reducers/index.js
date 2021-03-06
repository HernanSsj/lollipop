import { combineReducers } from 'redux';

import user from './user';

import player from './player'

import description from './description'

export const reducers = combineReducers({ user , player, description});
