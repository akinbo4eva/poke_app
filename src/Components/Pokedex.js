import React, { Component } from 'react'
import PokeCards from './PokeCards'
import './PokedexStyles.css'

export default class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]

    }
    render() {
        let title;
        if(this.props.isWinner){
            title = <h1 className='pokewon'>You Won!</h1>
        }else {
            title = <h1 className='pokelost'>You Lost!</h1>
        }


        return (

            <div className='pokedex'>
                {title}
                <h3>Total Experience: {this.props.exp}</h3>
                {/* <p>{this.props.isWinner ? 'WINNER!' : 'LOOSER!'}</p> */}
                <div className='p-cards'>
                    {this.props.pokemon.map((p) => {
                        return <PokeCards key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                        })
                    }
                </div>
                
            </div>
        )
    }
}
