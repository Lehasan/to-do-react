export const classNames = (...classes) => {
	return classes.filter(item => !!item).join(' ')
}