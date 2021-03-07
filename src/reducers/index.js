import { combineReducers } from 'redux';

import user from './user';
import player from './player'
import description from './description'
import loginForm from './login'

export const reducers = combineReducers({ user , player, description, loginForm});
