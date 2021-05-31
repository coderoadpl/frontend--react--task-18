import React from 'react'

export class Clock extends React.Component {
  constructor () {
    super()

    setInterval(() => {
      this.forceUpdate()
    }, 1000)
  }

  render () {
    return <h1>{(new Date()).toLocaleString()}</h1>
  }
}

export default Clock
