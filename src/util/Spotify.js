let accessToken;
const clientID =  "27a243dfefd1472985934e5284120036";
const redirectURI = "http://localhost:3000/";


let Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } 

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expirationTime = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = "", expirationTime * 1000);
            window.history.pushState("Acces Token", null, "/");
            return accessToken;
        } else {
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    },

    searchForTracks(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        if (!accessToken) {
            return;
        }
        
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            }).then(response => {
            return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse.tracks) {
                    return [];
                }
                return jsonResponse.tracks.items.map(track => {
                    console.log(track.id);
                    return {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri,
                    }
                });
        });
    },



};
    



export default Spotify;