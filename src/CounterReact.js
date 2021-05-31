import React from 'react'

export class CounterReact extends React.Component {
  constructor () {
    super()

    this.state = {
      number: 0
    }

    this.inc = () => {
      this.setState({ number: this.state.number + 1 })
    }

    setInterval(
      () => {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.number = this.state.number + 1
        console.log(this.state.number)
      },
      1000
    )
  }

  render () {
    console.log('Render CounterReact was called')

    const { number } = this.state

    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={this.inc}
        >
          +
        </button>
      </div>
    )
  }
}

export default CounterReact
