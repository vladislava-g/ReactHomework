import React from 'react'
import Loader from './Loader';

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false
        }
        this.url = props.url;
    }

    async componentDidMount() {
        this.setState({
            isLoading: true
        })
        var response = await fetch(this.url);
        var fetcheddata = await response.json();
        
        this.setState({
            data: [...this.state.data, ...fetcheddata.results],
            isLoading: false
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoading ? <Loader /> : this.state.data.map(item => 
                    <div className='listItem'>{item.title ? item.title : item.name}</div>)
                }
            </div>
        )
    }
}

export default Item;