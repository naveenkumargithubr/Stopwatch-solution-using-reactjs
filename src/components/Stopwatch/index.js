// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimeRunning: false, isTimeElapse: 0}

  renderSeconds = () => {
    const {isTimeElapse} = this.state
    const seconds = Math.floor(isTimeElapse % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {isTimeElapse} = this.state
    const minutes = Math.floor(isTimeElapse / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  updateTime = () => {
    this.setState(prevState => ({
      isTimeElapse: prevState.isTimeElapse + 1,
    }))
  }

  onStartTime = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  onStopButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  onResetButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, isTimeElapse: 0})
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="stopwatch-bg-container">
        <h1 className="stopwatch">Stopwatch</h1>
        <div className="stopwatch-card-container">
          <div className="clock-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="clock-img"
            />
            <h1 className="timer">Timer</h1>
          </div>
          <h1 className="min-sec">{time}</h1>
          <div className="buttons-container">
            <button
              className="start-btn"
              type="button"
              onClick={this.onStartTime}
              disabled={isTimeRunning}
            >
              Start
            </button>
            <button
              className="start-btn red"
              type="button"
              onClick={this.onStopButton}
            >
              Stop
            </button>
            <button
              className="start-btn danger"
              type="button"
              onClick={this.onResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
