import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPoke} from './actions/poke_actions';

class SingleItem extends Component {
    
    componentDidMount() {
        this.props.fetchPoke(`http://92.175.11.66:3002/api/pokemons/${this.props.match.params.id}`)
    }

    render() {
        const test = this.props.poke.names;
        
        if(this.props.hasErrored){
            return(
                <div>
                    <h2>Sorry, there was an error!</h2>
                </div>
            )
        }

        else if(this.props.isLoading){
            return(
                <div>
                    <h2>The page is loading...</h2>
                </div>
            )
        }
        
        else return (
            <div>
                <p>Nom français: {test && test.fr}</p>
                <p>Nom italien: {test && test.it}</p>
                <p>Nom anglais: {test && test.en}</p>
                <p>Nom allemand: {test && test.de}</p>
                <p>Height: {this.props.poke.height_eu}</p>
                <p>Weight: {this.props.poke.weight_eu}</p>
                <button>
                    <Link to='/'>
                        Retour à la liste des pokémons
                    </Link>
                </button>

            </div>
        );
    }
}

function mstp(state){
    return {
        poke: state.poke,
        hasErrored: state.pokeHasErrored,
        isLoading: state.pokeIsLoading
    }
}

function mdtp(dispatch){
    return {
        fetchPoke: (url) => dispatch(fetchPoke(url))
    }
}

export default connect(mstp, mdtp)(SingleItem);