import React from 'react';
import './Track.css';

class Track extends React.Component {
    renderAction(isRemoval) {
        let button;
        if (isRemoval) {
            button = <button className="Track-action">-</button>;
        } else {
            button = <button className="Track-action">+</button>;
        }
        return button;
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction(this.props.isRemoval)}
            </div>
        );
    }
}

export default Track;