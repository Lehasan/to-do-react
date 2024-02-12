import PropTypes from 'prop-types'
import { useInput } from '@/hooks/useInput'
import { generateValue } from '@/utils/generateValue'
import { BsPlusCircleFill } from 'react-icons/bs'
import './ToDoForm.scss'

const ToDoForm = ({ tasksStorage }) => {
	const taskInput = useInput()

	const handleAddTask = event => {
		event.preventDefault()

		if (!taskInput.value.trim()) return

		tasksStorage.setItem(prevTasks => [{
			id: generateValue(3),
			text: taskInput.value,
			isCompleted: false
		}, ...prevTasks])

		taskInput.reset()
	}

	return (
		<form className="to-do-form">
			<input type="text" className="to-do-form__input" placeholder="Add new task" {...taskInput.bind} />
			<button className="to-do-form__add-button" onClick={handleAddTask}>
				<BsPlusCircleFill className="to-do-form__add-icon" />
			</button>
		</form>
	)
}

ToDoForm.propTypes = {
	tasksStorage: PropTypes.object
}

export default ToDoForm