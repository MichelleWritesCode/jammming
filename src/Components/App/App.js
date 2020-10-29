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
        {name: "", artist: "", album: "", id: "1",},
        {name: "", artist: "", album: "", id: "2",},
        {name: "", artist: "", album: "", id: "3",},
      ],
      playlistName: "My favorite songs",
      playlistTracks: [
        {name: "", artist: "", album: "", id: "10"},
        {name: "", artist: "", album: "", id: "11"},
        {name: "", artist: "", album: "", id: "12"},
      ] 
    }
    this.addTrack = this.addTrack.bind(this);
  }

  // check if this is also a correct way to check the id
  addTrack(track) {
    if (track.id !== this.state.playlistTracks.id) {
      this.playlistTracks.push(track);
      this.setState({playlistTracks: track});
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
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}  />
          </div>
        </div>
      </div>
    );
  }
}


export default App;