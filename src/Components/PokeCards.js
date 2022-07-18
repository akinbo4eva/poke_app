import React, { Component } from 'react'
import './PokeCardsStyles.css'
const PokeUrl= 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
const FitToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

export default class PokeCards extends Component {
  render() {
    // the FitToThree takes the the number(i.e this.state.props) as an argument
    let ImageSrc = `${PokeUrl}${FitToThree(this.props.id)}.png`;
    return (
        <div className='card'>
            <h1 className='pokecard-title'>{this.props.name}</h1>
            <div className='pokecard-image'><img src={ImageSrc} alt='pngfile'/></div>
            <div className='card-data'>
                <div>Type: {this.props.type}</div>
                <div>Experience: {this.props.exp}</div>
            </div>

        </div>
    )
  }
}
