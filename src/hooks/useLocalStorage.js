import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue = null) => {
	const [item, setItem] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem(key)) || initialValue
		} catch (error) {
			console.error('useLocalStorage: Error retrieving item from localStorage:', error)
			return initialValue
		}
	})

	const removeItem = () => {
		try {
			localStorage.removeItem(key)
		} catch (error) {
			console.error('useLocalStorage: Error removing item from localStorage:', error)
		}
	}

	useEffect(() => {
		if (!key) return console.error('useLocalStorage: No key for the storage')

		try {
			localStorage.setItem(key, JSON.stringify(item))
		} catch (error) {
			console.error('useLocalStorage: Error saving item to localStorage:', error)
		}
	}, [key, item])

	return { item, setItem, removeItem }
}