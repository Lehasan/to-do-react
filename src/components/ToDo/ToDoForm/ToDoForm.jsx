import PropTypes from 'prop-types'
import { useInput } from '@/hooks/useInput'
import { generateValue } from '@/utils/generateValue'
import { BsPlusCircleFill } from "react-icons/bs"
import './ToDoForm.scss'

const ToDoForm = ({ tasksStorage }) => {
	const taskInput = useInput()

	const handleAddTask = () => {
		if (!taskInput.value.trim()) return

		tasksStorage.setItem(prevTasks => [{
			id: generateValue(),
			text: taskInput.value,
			status: 'pending'
		}, ...prevTasks])
		taskInput.reset()
	}

	return (
		<form action="#" className="to-do-form">
			<input type="text" className="to-do-form__input" placeholder="Add New Task" {...taskInput.bind} />
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