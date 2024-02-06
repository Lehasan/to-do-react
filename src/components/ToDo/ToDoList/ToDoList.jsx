import PropTypes from 'prop-types'
import { classNames } from '@/utils/classNames'
import { FaRegTrashCan } from "react-icons/fa6"
import './ToDoList.scss'

const ToDoList = ({ tasksStorage }) => {
	const handleActiveTask = event => {
		const tasksArray = []

		tasksStorage.item.find(item => {
			if (item.id === event.currentTarget.dataset.taskId) {
				item.status = item.status === 'completed' ? 'pending' : 'completed'

				tasksArray.push(...tasksStorage.item)
				tasksStorage.setItem(tasksArray)
			}
		})
	}

	const handleRemoveTask = event => {
		tasksStorage.setItem(
			tasksStorage.item.filter(item => item.id !== event.currentTarget.dataset.taskId)
		)
	}

	return (
		<>
			{tasksStorage.item.length ?
				<ul className="tasks-list">
					{tasksStorage.item.map(taskItem => (
						<li key={taskItem.id} className="tasks-list__item">
							<button
								type="button"
								className={classNames('tasks-list__task-button', taskItem.status === 'completed' && 'tasks-list__task-button_active')}
								data-task-id={taskItem.id}
								onClick={handleActiveTask}
							>
								{taskItem.text}
							</button>
							<button
								type="button"
								className="tasks-list__trash-button"
								data-task-id={taskItem.id}
								onClick={handleRemoveTask}
							>
								<FaRegTrashCan className="tasks-list__trash-icon" />
							</button>
						</li>
					))}
				</ul> : <p className="tasks-list__message">Task list is empty</p>
			}
		</>
	)
}

ToDoList.propTypes = {
	tasksStorage: PropTypes.object
}

export default ToDoList