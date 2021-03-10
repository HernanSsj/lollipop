import { combineReducers } from 'redux';

import user from './user';
import player from './player'
import description from './description'
import loginForm from './login'
import signupForm from './signup'
import search from './search'
export const reducers = combineReducers({ user , player, description, loginForm, signupForm, search});
