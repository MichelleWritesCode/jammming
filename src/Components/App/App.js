import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "",
      playlistTracks: [],
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  /*
  addTrack(track) {
    if (this.state.playlistTracks.find(specificTrack => specificTrack.id !== track.id)) {
      this.setState(state => {
        const playlist = state.playlistTracks.concat(track);
        return {
          playlistTracks: playlist,
        };
      }); 
    } else {
      return;
    }
  }
*/

addTrack(track) {
  let playlist = this.state.playlistTracks;
  if (playlist.find(specificTrack => specificTrack.id === track.id)) {
    return;
  }
  playlist.push(track);
  this.setState({playlistTracks: playlist});
}

  removeTrack(track) {
    if (this.state.playlistTracks.find(specificTrackId => specificTrackId.id === track.id)) {
      const newPlaylist = this.state.playlistTracks;
      const index = newPlaylist.indexOf(track);
      newPlaylist.splice(index, 1)
      this.setState({playlistTracks: newPlaylist});
    }
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(trackURI => trackURI.uri);
    return trackURIs;
  }

  search(searchTerm) {
    Spotify.searchForTracks(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults});
    })
    
  }


// Render method starts here
  render() {

    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onSave={this.savePlaylist} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}  />
          </div>
        </div>
      </div>
    );
  }
}


export default App;