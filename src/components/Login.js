import React, { Component } from 'react';

//import history from './history'


class Search extends Component {

  constructor() {
    super()
    this.state = {
      userName: '',
      passWord: ''
    }
  }



  handleSubmit = () => {

    if (this.state.userName !== '' && this.state.passWord !== '') {

      this.props.history.push({ pathname: '/home', state: { detail: this.state.userName } })
    }
  }

  handleChange = (e) => {
    this.setState({ userName: e.target.value })
  }

  handlePassword = (e) => {
    this.setState({ passWord: e.target.value })
  }

  render() {

    return (
      <div class="jumbotron d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-4 col-md-offset-4">
              <form >
                <div className="form-group">
                  <label for="username" className="mr-5">Username</label>
                  <input className="form-control"
                    type="text"
                    id='username'
                    placeholder="Username"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="password" className="mr-5">Password</label>
                  <input className="form-control"
                    type="password"
                    id='password'
                    placeholder="Password"
                    onChange={this.handlePassword}
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search