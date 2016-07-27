import React from 'react'
import styles from './styles/main.css'

const Hello = React.createClass({
  render () {
    return <h1>Hello, {this.props.name} </h1>
  }
})

React.render(<Hello name="Cutie Cake" />, document.body)
