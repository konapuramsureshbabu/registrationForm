import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    blur1: false,
    blur2: false,
    submit: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  firstNameBlur = event => {
    const blurFirst =
      event.target.value === ''
        ? this.setState({blur1: true})
        : this.setState({blur1: false})
  }

  lastNameBlur = event => {
    const blurLast =
      event.target.value === ''
        ? this.setState({blur2: true})
        : this.setState({blur2: false})
  }

  onSubmit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({blur1: true})
    }
    if (lastName === '') {
      this.setState({blur2: true})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState(prevState => ({submit: !prevState.submit}))
    }
  }

  render() {
    const {firstName, lastName, blur1, blur2, submit} = this.state

    return (
      <div className="bg-container">
        <h1 className="h1">Registration</h1>
        <form className="form" onSubmit={this.onSubmit}>
          {submit === false ? (
            <>
              <div className="ip-div">
                <label className="label" htmlFor="first">
                  FIRST NAME
                </label>
                <input
                  value={firstName}
                  onBlur={this.firstNameBlur}
                  onChange={this.onChangeFirstName}
                  className={blur1 === true ? 'input input-req' : 'input'}
                  id="first"
                  type="text"
                  placeholder="First name"
                />
                {blur1 === true ? <p className="p">Required</p> : null}
              </div>
              <div className="ip-div">
                <label className="label" htmlFor="last">
                  LAST NAME
                </label>
                <input
                  value={lastName}
                  onBlur={this.lastNameBlur}
                  onChange={this.onChangeLastName}
                  className={blur2 === true ? 'input input-req' : 'input'}
                  id="last"
                  type="text"
                  placeholder="Last name"
                />
                {blur2 === true ? <p className="p">Required</p> : null}
              </div>
            </>
          ) : (
            <div className="s-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
            </div>
          )}
          <button className="btn" type="submit">
            {submit === false ? 'Submit' : 'Submit Another Response'}
          </button>
        </form>
      </div>
    )
  }
}
export default RegistrationForm
