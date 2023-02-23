// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {IsSubscribe: false}

  onSubscribe = () => {
    this.setState(prevState => ({IsSubscribe: !prevState.IsSubscribe}))
  }

  getButtonText = () => {
    const {IsSubscribe} = this.state

    return IsSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div>
          <button type="button" className="button" onClick={this.onSubscribe}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
