import React from 'react';

class MarvelCharacter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageExtension: '/portrait_xlarge.jpg'
        }
    }

    render() {
        const {
            id,
            name,
            description,
            thumbnail
        } = this.props.info

        return (
            <ul>
                <div className="card">
                    <img className="thumbnail" src={thumbnail.path + this.state.imageExtension} />
                    <div>
                        <h2 className="nameCharacter">{name}</h2>
                        <p>{description ? description : 'No description'}</p>
                        <p>ID: {id}</p>
                    </div>
                </div>
            </ul>
        )
    }
}

export default MarvelCharacter;