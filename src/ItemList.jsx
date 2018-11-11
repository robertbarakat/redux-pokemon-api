import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchData} from './actions/items';

class ItemList extends Component {
    constructor(props){
        super(props)
        this.state = {
            min: 0,
            max: 20
        }
    }

    componentDidMount(){
        this.props.fetchData('http://92.175.11.66:3002/api/pokemons');
    }

    initialPoke() {
        this.setState({
            min: 0,
            max: 21,
        })
    }

    nextPoke(longueur) {
        if (this.state.max <= longueur) {
            this.setState({
                min: this.state.min + 20,
                max: this.state.max + 20,
            })
        }
    }

    previousPoke() {
        if (this.state.min >= 20) {
            this.setState({
                min: this.state.min - 20,
                max: this.state.max - 20,
            })
        }
    }

    render() {
        console.log(this.props.items);
        const pokemon = [...this.props.items].slice(this.state.min, this.state.max);

        if (this.props.hasErrored) {
            return (
                <div>
                    <p>Sorry, there has been a problem!</p>
                </div>
            )
        }
        else if (this.props.isLoading) {
            return (
                <div>
                    <p>The page is loading...</p>
                </div>
            )
        }
        else return (
            <div>
                <h3>Cliquez sur un Pokémon pour voir sa fiche détaillée</h3>
                <button onClick={() => this.initialPoke()}>Initial page</button>
                <button onClick={() => this.previousPoke()}>Previous 20</button>
                <button onClick={() => this.nextPoke(this.props.items.length)}>Next 20</button>
                    {
                        pokemon.map(item => 
                        <p key={item.id}><Link to={`/pokemon/${item.id}`}>{item.name}</Link></p>)
                    }
                <button onClick={() => this.initialPoke()}>Initial page</button>
                <button onClick={() => this.previousPoke()}>Previous 20</button>
                <button onClick={() => this.nextPoke(this.props.items.length)}>Next 20</button>
            </div>
        )
    }
}

function mstp(state){
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    }
}

function mdtp(dispatch){
    return {
        fetchData: (url) => dispatch(fetchData(url))
    }
}

export default connect(mstp, mdtp)(ItemList);