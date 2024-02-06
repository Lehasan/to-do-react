import { useState } from "react"

export const useInput = (initialValue = '') => {
	const [value, setValue] = useState(initialValue)

	const reset = () => setValue(initialValue)
	const onChange = event => setValue(event.target.value)

	const bind = { value, onChange }

	return { value, bind, reset }
}