import React from 'react';
import './Track.css';

class Track extends React.Component {
    renderAction() {
        
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>Better Half Of Me</h3>
                    <p>Michelle Ernst - van Wijk | 199One</p>
                </div>
                <button className="Track-action">+ or -</button>
            </div>
        );
    }
}

export default Track;