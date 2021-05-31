import React from 'react'

export class Clock extends React.Component {
  render () {
    return <h1>{(new Date()).toLocaleString()}</h1>
  }
}

export default Clock
