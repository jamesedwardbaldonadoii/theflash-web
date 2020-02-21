import { ReduxModule } from 'react-pages';
import jwt_decode from "jwt-decode";

const redux = new ReduxModule();

export const loginUser = redux.action(
	'CURRENT_USER',
	(userData) => http => {
		return http.post('api://users/login', userData)
			.then(res => {
				// Set token to localStorage
				const { token } = res;
				localStorage.setItem("jwtToken", token);

				// Decode token to get user data
				const decoded = jwt_decode(token);

				return decoded;
			})
	},
	// set user
	(state, res) => ({ ...state, user: res, isAuthenticated: true })
);

export const authenticateUser = redux.simpleAction(
	() => {
		let payload = {
			isAuthenticated: false,
			user: {}
		};
		// Check for token to keep user logged in
		if (localStorage.jwtToken) {
			// Set auth token header auth
			const token = localStorage.jwtToken;

			// Decode token and get user info and exp
			const decoded = jwt_decode(token);
			// Check for expired token
			const currentTime = Date.now() / 1000; // to get in milliseconds

			if (decoded.exp < currentTime) {
				// Logout user

				// Redirect to login
				window.location.href = "./";

				payload.isAuthenticated = false;
				payload.user = {};
			}

			payload.isAuthenticated = true;
			payload.user = decoded;
		}

		return payload;
	},
	(state, newState) => (newState),
);

export const registerUser = redux.action(
	(userData) => async http => {
		await http.post('api://users/register', userData)
			.then(res => {
				console.log(res, 'TEST');
			})
	}
);

const initialState = {
	isAuthenticated: false,
	user: {}
};

export default redux.reducer(initialState);

// ARTIFICIAL DELAY
const delay = (delay) => new Promise(resolve => setTimeout(resolve, delay))
