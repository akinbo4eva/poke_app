import React, { Component } from 'react'

import './AppComponentStyles.css'
import PokeGame from './PokeGame'


export default class AppComponent extends Component {
  render() {
    return (
      <div className='App'>
        <PokeGame
        // id={4}
        // name='Charmander'
        // type='fire'
        // base_experience={62}
        />
        
      </div>
    )
  }
}