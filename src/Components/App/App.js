import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: "All Before You", artist: "Kensington", album: "Control", id: "1",},
        {name: "Island", artist: "Kensington", album: "Time", id: "2",},
        {name: "Sorry", artist: "Kensington", album: "Control", id: "3"},
      ],
      playlistName: "My favorite songs",
      playlistTracks: [
        {name: "Better Half of Me", artist: "Michelle", album: "199One", id: "10"},
        {name: "Hello", artist: "Adele", album: "25", id: "11",},
        {name: "Winner", artist: "Tim Akkerman", album: "Lions Don't Cry", id: "12"},
      ] 
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(specificTrack => specificTrack.id !== track.id)) {
      this.setState(state => {
        const playlist = state.playlistTracks.concat(track);
        return {
          playlistTracks: playlist
        };
      }); 
    } else {
      return;
    }
  }

  removeTrack(track) {
    if (this.state.playlistTracks.find(specificTrackId => specificTrackId.id === track.id)) {
      const newPlaylist = this.state.playlistTracks;
      const index = newPlaylist.indexOf(track);
      newPlaylist.splice(index, 1)
      this.setState({playlistTracks: newPlaylist});
    }
  }

  render() {

    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}  />
          </div>
        </div>
      </div>
    );
  }
}


export default App;