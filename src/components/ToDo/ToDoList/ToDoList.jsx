import PropTypes from 'prop-types'
import { classNames } from '@/utils/classNames'
import { FaRegTrashCan } from 'react-icons/fa6'
import './ToDoList.scss'

const ToDoList = ({ tasksStorage, tabValue }) => {
	const handleActiveTask = event => {
		const tasksArray = [...tasksStorage.item]

		tasksArray.find(taskItem => {
			if (taskItem.id === event.currentTarget.dataset.taskId) {
				taskItem.isCompleted = !taskItem.isCompleted
			}
		})

		tasksStorage.setItem(tasksArray)
	}

	const handleRemoveTask = event => {
		tasksStorage.setItem(
			tasksStorage.item.filter(
				taskItem => taskItem.id !== event.currentTarget.dataset.taskId
			)
		)
	}

	return (
		<>
			{tasksStorage.item.length ?
				<ul className="tasks-list">
					{tasksStorage.item.map(taskItem => (
						<li key={taskItem.id} className={classNames(
							'tasks-list__item',
							!taskItem.isCompleted && tabValue !== 'all' && 'tasks-list__item_hidden'
						)}>
							<button
								type="button"
								className={classNames(
									'tasks-list__task-button',
									taskItem.isCompleted && 'tasks-list__task-button_active'
								)}
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
	tasksStorage: PropTypes.object,
	tabValue: PropTypes.string
}

export default ToDoList