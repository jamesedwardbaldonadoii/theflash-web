import React, { useState } from 'react';
import classnames from 'classnames';
import { useForm } from "react-hook-form";

export function InputEmail({ error, name, label, register }) {

	return (
		<React.Fragment>
			{label &&
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
					{label}
				</label>
			}

			<input type="email"
				className={classnames("w-full py-2 px-3 rounded shadow z-50 appearance-none border roundedtext-gray-700 leading-tight focus:outline-none focus:border-blue-500", {
					'border-red-500': error
				})}
				ref={register}
				name={name}
				error={error}
				autoComplete="true"
				placeholder="johndoe@email.com" />

			<span className="text-red-500 text-xs italic">
				{error}
			</span>
		</React.Fragment>
	)
}

export function InputPassword({ error, name, label, register }) {

	return (
		<React.Fragment>
			{label &&
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
					{label}
				</label>
			}

			<input type="password"
				className={classnames("w-full py-2 px-3 rounded shadow z-50 appearance-none border roundedtext-gray-700 leading-tight focus:outline-none focus:border-blue-500", {
					'border-red-500': error
				})}
				name={name}
				error={error}
				ref={register}
				autoComplete="true"
				placeholder="******************" />

			<span className="text-red-500 text-xs italic">
				{error}
			</span>
		</React.Fragment>
	)
}

export function InputText({ error, name, label, register, placeholder }) {
	return (
		<React.Fragment>
			{label &&
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
					{label}
				</label>
			}
			<input type="text"
				className={classnames("w-full py-2 px-3 rounded shadow z-50 appearance-none border roundedtext-gray-700 leading-tight focus:outline-none focus:border-blue-500", {
					'border-red-500': error
				})}
				name={name}
				error={error}
				ref={register}
				autoComplete="true"
				placeholder={placeholder || "Type something here..."} />

			<span className="text-red-500 text-xs italic">
				{error}
			</span>
		</React.Fragment>
	)
}

export default InputText;
