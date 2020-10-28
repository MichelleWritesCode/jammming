import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {

    render() {
        return (
            <div className="TrackList">
                <li>Better Half Of Me</li>
                <li>You Say</li>
                <li>Island</li>
                
                {/* <!-- You will add a map method that renders a set of Track components  --> */}
            </div>
        );
    }
}

export default TrackList;