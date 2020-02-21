import React, { useState, useCallback } from 'react';
import { Link } from 'react-pages';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import { registerUser } from '../../redux/auth';
import { notify } from '../../redux/notifications';
import { InputText, InputEmail, InputPassword } from '../0/Inputs';

export default function Register() {
	const dispatch = useDispatch();
	const { handleSubmit, register, errors } = useForm();

	const [isSaving, setIsSaving] = useState(false);
	const [error, setErrors] = useState('');

	const onRegisterUser = useCallback(async (values) => {
		setIsSaving(true);

		try {
			await dispatch(registerUser(values));
			setIsSaving(false);
		} catch (err) {
			dispatch(notify(err.message, { type: 'error' }));
			setErrors(err.response.body);
			setIsSaving(false);
		}
	}, [dispatch]);


	return (
		<div className="w-full max-w-xs animate duration-500ms tada">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onRegisterUser)}>
				<div className="mb-4">
					<InputText
						label="Name"
						name="name"
						error={error.name}
						register={register({
							required: 'Required'
						})}
						placeholder="John Doe" />
				</div>
				<div className="mb-4">
					<InputEmail
						label="Email"
						name="email"
						error={error.email || error.emailnotfound}
						register={register({
							required: 'Required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: "Invalid email address."
							}
						})} />
				</div>
				<div className="mb-4">
					<InputPassword
						label="Password"
						name="password"
						error={error.password}
						register={register({
							required: 'Required',
							minLength: 6
						})} />
				</div>
				<div className="mb-6">
					<InputPassword
						label="Password"
						name="password2"
						error={error.password}
						register={register({
							required: 'Required',
							minLength: 6
						})} />
				</div>
				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Sign up
					</button>
				</div>
				<div className="align-baseline text-sm mt-3 text-center">
					Already have an account? <Link className="text-blue-500 font-bold hover:text-blue-800" to="/login">Log in</Link>
				</div>
			</form>
			<p className="text-center text-gray-500 text-xs">
				&copy;2020 Nombre. All rights reserved.
      </p>
		</div>
	)
}





// import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { registerUser } from "../../actions/authActions";
// import classnames from "classnames";

// class Register extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			name: "",
// 			email: "",
// 			password: "",
// 			password2: "",
// 			errors: {}
// 		};
// 	}

// 	componentDidMount() {
// 		// If logged in and user navigates to Register page, should redirect them to dashboard
// 		if (this.props.auth.isAuthenticated) {
// 			this.props.history.push("/dashboard");
// 		}
// 	}

// 	componentWillReceiveProps(nextProps) {
// 		if (nextProps.errors) {
// 			this.setState({
// 				errors: nextProps.errors
// 			});
// 		}
// 	}

// 	onChange = e => {
// 		this.setState({ [e.target.id]: e.target.value });
// 	};

// 	onSubmit = e => {
// 		e.preventDefault();

// 		const newUser = {
// 			name: this.state.name,
// 			email: this.state.email,
// 			password: this.state.password,
// 			password2: this.state.password2
// 		};

// 		this.props.registerUser(newUser, this.props.history);
// 	};

// 	render() {
// 		const { errors } = this.state;

// 		return (
// 			<div className="w-full max-w-xs animate duration-500ms tada delay-10s">
// 				<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.onSubmit}>
// 					<div className="mb-4">
// 						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
// 							Name
//             </label>
// 						<input
// 							onChange={this.onChange}
// 							value={this.state.name}
// 							error={errors.name}
// 							id="name"
// 							type="text"
// 							placeholder="John Doe"
// 							className={classnames("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", {
// 								invalid: errors.name
// 							})}
// 						/>
// 						<span className="text-red-500 text-xs italic">{errors.name}</span>
// 					</div>
// 					<div className="mb-4">
// 						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
// 							Email
//             </label>
// 						<input
// 							onChange={this.onChange}
// 							value={this.state.email}
// 							error={errors.email}
// 							id="email"
// 							type="email"
// 							placeholder="johndoe@email.com"
// 							className={classnames("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", {
// 								invalid: errors.email
// 							})}
// 						/>
// 						<span className="text-red-500 text-xs italic">{errors.email}</span>
// 					</div>
// 					<div className="mb-4">
// 						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
// 							Password
//             </label>
// 						<input
// 							onChange={this.onChange}
// 							value={this.state.password}
// 							error={errors.password}
// 							id="password"
// 							type="password"
// 							placeholder="******************"
// 							className={classnames("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", {
// 								invalid: errors.password
// 							})}
// 						/>
// 						<span className="text-red-500 text-xs italic">{errors.password}</span>
// 					</div>
// 					<div className="mb-6">
// 						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password2">
// 							Confirm Password
//             </label>
// 						<input
// 							onChange={this.onChange}
// 							value={this.state.password2}
// 							error={errors.password2}
// 							id="password2"
// 							type="password"
// 							placeholder="******************"
// 							className={classnames("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", {
// 								invalid: errors.password2
// 							})}
// 						/>
// 						<span className="text-red-500 text-xs italic">{errors.password2}</span>
// 					</div>
// 					<div className="flex items-center justify-between">
// 						<button
// 							type="submit"
// 							className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// 						>
// 							Sign up
//             </button>
// 					</div>
// 					<div className="align-baseline text-sm mt-3 text-center">
// 						Already have an account? <Link className="text-blue-500 font-bold hover:text-blue-800" to="/login">Log in</Link>
// 					</div>
// 				</form>
// 				<p className="text-center text-gray-500 text-xs">
// 					&copy;2020 Me Nombre Org. All rights reserved.
//         </p>
// 			</div>
// 		);
// 	}
// }

// Register.propTypes = {
// 	registerUser: PropTypes.func.isRequired,
// 	auth: PropTypes.object.isRequired,
// 	errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
// 	auth: state.auth,
// 	errors: state.errors
// });

// export default connect(
// 	mapStateToProps,
// 	{ registerUser }
// )(withRouter(Register));
