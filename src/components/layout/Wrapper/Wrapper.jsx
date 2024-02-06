import PropTypes from 'prop-types'
import './Wrapper.scss'

const Wrapper = ({ children }) => {
	return (
		<div className='wrapper'>{children}</div>
	)
}

Wrapper.propTypes = {
	children: PropTypes.node,
}

export default Wrapper