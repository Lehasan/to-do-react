import PropTypes from 'prop-types'
import { RxDragHandleDots2 } from 'react-icons/rx'
import { MdDeleteSweep } from 'react-icons/md'
import { MdDownloadDone } from 'react-icons/md'
import './ToDoOptions.scss'

const ToDoOptions = ({ tasksStorage }) => {
	const handleRemoveTasks = () => tasksStorage.item.length && tasksStorage.setItem([])

	const handleRemoveCompletedTasks = () => {
		tasksStorage.item.forEach(taskItem => {
			taskItem.isCompleted && tasksStorage.setItem(
				tasksStorage.item.filter(taskItem => !taskItem.isCompleted)
			)
		})
	}

	return (
		<div className="to-do-options">
			<button type="button" className="to-do-options__dots-button">
				<RxDragHandleDots2 className="to-do-options__dots-icon" />
			</button>
			<ul className="to-do-options__list">
				<li className="to-do-options__item">
					<button type="button" className="to-do-options__button" onClick={handleRemoveTasks}>
						<MdDeleteSweep className="to-do-options__icon" />
						<span>Remove all tasks</span>
					</button>
				</li>
				<li className="to-do-options__item">
					<button type="button" className="to-do-options__button" onClick={handleRemoveCompletedTasks}>
						<MdDownloadDone className="to-do-options__icon" />
						<span>Remove completed tasks</span>
					</button>
				</li>
			</ul>
		</div>
	)
}

ToDoOptions.propTypes = {
	tasksStorage: PropTypes.object
}

export default ToDoOptions