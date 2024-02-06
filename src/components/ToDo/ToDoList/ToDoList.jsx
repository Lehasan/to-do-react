import { classNames } from '@/utils/classNames'
import { FaRegTrashCan } from "react-icons/fa6"
import './ToDoList.scss'

const ToDoList = ({ tasksStorage }) => {
	const handleActiveTaskClick = event => {
		const tasksArray = []

		tasksStorage.item.find(item => {
			if (item.text === event.currentTarget.textContent) {
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
					{tasksStorage.item.map((taskItem, taskIndex) => (
						<li key={taskIndex} className="tasks-list__item">
							<button
								type="button"
								className={classNames('tasks-list__task-button', taskItem.status === 'completed' && 'tasks-list__task-button_active')}
								onClick={handleActiveTaskClick}
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

export default ToDoList