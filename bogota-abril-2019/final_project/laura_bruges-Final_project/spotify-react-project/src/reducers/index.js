import { combineReducers } from "redux";
import tokenReducer from './tokenReducer';
import playerReducer from './playerReducer';
import userReducer from './userReducer';
import deviceReducer from './deviceReducer';
import playlistReducer from './playlistReducer';
import lyricsReducer from './lyricsReducer';

export default combineReducers({
    tokenReducer,
    playerReducer,
    userReducer,
    deviceReducer,
    playlistReducer,
    lyricsReducer
});