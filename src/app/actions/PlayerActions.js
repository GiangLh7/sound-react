import * as types from '../constants/ActionTypes';
import { CHANGE_TYPES } from '../constants/SongConstants';


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

export function changSelectedPlaylists(playlists, playlist) {
  const index = playlists.indexOf(playlist);
  if (index > -1) {
    playlists.splice(index, 1);
  }
  playlist.push(playlist);
  return {
    type: types.CHANGE_SELECTED_PLAYLISTS,
    playlists,
  }
}

/// change a song in the current playlist
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

/// play a specific song
export function playSong(playlist, songIndex) {
  return (dispatch, getState) => {
    dispatch(changeCurrentTime(0));
    
    const { player } = getState();
    const { selectedPlaylists } = player;
    const len = selectedPlaylists.length;
    if (len === 0 || selectedPlaylists[len - 1] != playlist) {
      dispatch(changSelectedPlaylists(selectedPlaylists, playlist));
    }
    
    dispatch(changePLayingSong(songIndex));
  }
}

export function toggleIsPlaying(isPlaying) {
  return {
    type: types.TOGGLE_IS_PLAYING,
    isPlaying,
  };
}