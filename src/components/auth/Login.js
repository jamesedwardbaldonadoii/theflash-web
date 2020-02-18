import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import { loginUser } from "../../actions/authActions";
import EmailInput from "../0/EmailInput";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  };

  render() {
    const { errors } = this.state;
    const { loading: { isLoggingIn } } = this.props;

    return (
      <div className="w-full relative">
        { isLoggingIn && 
          <div className="absolute inset-0 bg-red-100">
            Test Loading
          </div>
        }
        <form onSubmit={this.onSubmit} className="p-4 mb-4 bg-white shadow-sm rounded">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <EmailInput
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email || errors.emailnotfound}
              id="email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                placeholder="******************"
                className={classnames("w-full py-2 px-3 shadow appearance-none border roundedtext-gray-700 leading-tight focus:outline-none focus:border-blue-500", {
                  'border-red-500': errors.password || errors.passwordincorrect
                })}
              />
              <span className="text-red-500 text-xs italic">
                {errors.password}
                {errors.passwordincorrect}
              </span>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loading: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
