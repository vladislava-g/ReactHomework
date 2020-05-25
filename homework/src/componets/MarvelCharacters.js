import React from 'react';
import MD5 from "crypto-js/md5";
import Character from './Character';
import Loader from './Loader';

class MarvelCharacters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: [],
            isLoading: false
        }
    }

    async componentDidMount() {

        const publicKey = 'ab7b54e75a2aee13314cbd4027c7b92e';
        const privatKey = 'e86d049f5078673fdd205e7cc21f664522aec6ce';
        var timestamp = Date.now();
        const numberCharacters = 21;
        var hash = MD5(timestamp + privatKey + publicKey).toString();
        var url = `https://gateway.marvel.com:443/v1/public/characters?limit=${numberCharacters}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
        this.setState({
            isLoading: true
        })

        var response = await fetch(url);
        let data = await response.json();

        this.setState({
            characters: [...this.state.characters, ...data.data.results],
            isLoading: false
        })
    }

    render() {
        return (
            <div>
                <div className="charactersList">
                    {
                        this.state.isLoading ? <Loader /> : this.state.characters.map(character =>
                            <Character key={character.id} info={character} />)
                    }
                </div>
            </div>
        )
    }
}

export default MarvelCharacters;