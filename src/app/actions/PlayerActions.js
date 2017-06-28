import * as types from '../constants/ActionTypes';
import { CHANGE_TYPES } from '../actions/SongConstants';


export function changeCurrentTime(time) {
  return {
    type: types.CHANGE_CURRENT_TIME,
    time,
  };
}

export function changePLayingSong(songIndex) {
  return {
    type: types.CHANGE_PLAYING_SONG,
    songIndex,
  };
}

export function changeSong(changeType) {
  return (dispatch, getState) => {
    const { player, playlists } = getState();
    const { currentSongIndex, selectedPlaylists } = player;
    const currentPlaylist = selectedPlaylists[selectedPlaylists.length - 1];
    let newSongIndex;
    
    if (changeType === CHANGE_TYPES.NEXT) {
      newSongIndex = currentSongIndex + 1;
    }
    else if (changeType === CHANGE_TYPES.PREV) {
      newSongIndex = currentSongIndex - 1;
    }
    else if (changeType === CHANGE_TYPES.SHUFFLE) {
      newSongIndex =  Math.floor((Math.random() * playlists[currentPlaylist].items.length - 1) + 0);
    }
    
    if (newSongIndex >= playlists[currentSongIndex].items.length || newSongIndex < 0) {
      return;
    }
    return dispatch(changePLayingSong(newSongIndex));
  }
}

export function playSong(playlist, songIndex) {
  return (dispatch, getState) => {
    
  }
}