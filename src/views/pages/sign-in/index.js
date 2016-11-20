import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { authActions, getAuth } from 'src/core/auth'
import Video from 'src/views/components/video'


export class SignInPage extends Component {

  static propTypes = {
    signInWithGithub: PropTypes.func.isRequired,
    signInWithGoogle: PropTypes.func.isRequired,
    signInWithFacebook: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired
  }

  constructor() {
    super(...arguments)

    this.state = {
      email: '',
      password: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  clear() {
    this.setState({
      email: '',
      password: ''
    })
  }

  handleEmailChange = event => {
    this.setState({email: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signIn(this.state.email, this.state.password)
    this.clear()
  }

  render() {
    const {signInWithGithub, signInWithGoogle, signInWithFacebook, auth} = this.props

    const authErrorMessage = !auth.errorMessage ? null : (
      <div className="form-group has-error">
        <div className="help-block with-errors">
          <ul className="list-unstyled text-center">
            <li>{auth.errorMessage}</li>
          </ul>
        </div>
      </div>
    )

    return (
      <div className="inner-container">
        <Video className="bgvid inner" />
        <form className="box" onSubmit={this.handleSubmit} noValidate >
          <h1>Login</h1>
          <div className="form-group">
            <input type="text" name="email" placeholder="Username" onChange={this.handleEmailChange} className="form-control" />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} className="form-control"/>
          </div>
          {authErrorMessage}
          <button>Login</button>
          <div className="row text-center">
            <div className="col-xs-4">
              <a className="btn btn-social-icon btn-github" onClick={signInWithGithub} >
                <span className="fa fa-github"></span>
              </a>
            </div>
            <div className="col-xs-4">
              <a className="btn btn-social-icon btn-facebook" onClick={signInWithFacebook} >
                <span className="fa fa-facebook"></span>
              </a>
            </div>
            <div className="col-xs-4">
              <a className="btn btn-social-icon btn-google" onClick={signInWithGoogle}>
                <span className="fa fa-google"></span>
              </a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = createSelector(
  getAuth,
  auth => ({auth})
)

const mapDispatchToProps = {
  signInWithGithub: authActions.signInWithGithub,
  signInWithGoogle: authActions.signInWithGoogle,
  signInWithFacebook: authActions.signInWithFacebook,
  signIn: authActions.signIn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage)
