import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'

class Modal extends Component {
  componentWillMount() {
    const portalDiv = document.getElementById('portal')
    this.portalDiv = portalDiv
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.portalDiv
    )
  }
}

class Parent extends Component {
  state = {clicks: 0}

  handleClick = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1
    }))
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>number of clicks: {this.state.clicks}</p>
        <Modal>
          <div className="modal">
            <button>click</button>
          </div>
        </Modal>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Parent />
      </div>
    )
  }
}

export default App
