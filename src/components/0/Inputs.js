import React, { useState } from 'react';
import classnames from 'classnames';

export function EmailInput({ value, error, id, label, onChange }) {

	const onValueChange = e => {
		onChange && onChange(e);
	};

	return (
		<React.Fragment>
			{label &&
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
					{label}
				</label>
			}

			<input type="email"
				className={classnames("w-full py-2 px-3 rounded shadow z-50 appearance-none border roundedtext-gray-700 leading-tight focus:outline-none focus:border-blue-500", {
					'border-red-500': error
				})}
				value={value}
				error={error}
				id={id}
				autoComplete="true"
				placeholder="johndoe@email.com"
				onChange={onValueChange} />

			<span className="text-red-500 text-xs italic">
				{error}
			</span>
		</React.Fragment>
	)
}

export function InputPassword({ value, error, id, label, onChange }) {

	const onValueChange = e => {
		onChange && onChange(e);
	};

	return (
		<React.Fragment>
			{label &&
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
					{label}
				</label>
			}

			<input type="password"
				className={classnames("w-full py-2 px-3 rounded shadow z-50 appearance-none border roundedtext-gray-700 leading-tight focus:outline-none focus:border-blue-500", {
					'border-red-500': error
				})}
				value={value}
				error={error}
				id={id}
				autoComplete="true"
				placeholder="******************"
				onChange={onValueChange} />

			<span className="text-red-500 text-xs italic">
				{error}
			</span>
		</React.Fragment>
	)
}

export function InputText({ value, error, id, placeholder, label, onChange }) {

	const onValueChange = e => {
		onChange && onChange(e);
	};

	return (
		<React.Fragment>
			{label &&
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
					{label}
				</label>
			}
			<input type="text"
				className={classnames("w-full py-2 px-3 rounded shadow z-50 appearance-none border roundedtext-gray-700 leading-tight focus:outline-none focus:border-blue-500", {
					'border-red-500': error
				})}
				value={value}
				error={error}
				id={id}
				autoComplete="true"
				placeholder={placeholder || "Type something here..."}
				onChange={onValueChange} />

			<span className="text-red-500 text-xs italic">
				{error}
			</span>
		</React.Fragment>
	)
}

export default InputText;
