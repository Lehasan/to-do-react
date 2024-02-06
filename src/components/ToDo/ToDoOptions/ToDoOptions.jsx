import { TbGridDots } from "react-icons/tb"
import { MdDeleteSweep } from "react-icons/md"
import { MdDownloadDone } from "react-icons/md"
import './ToDoOptions.scss'

const ToDoOptions = ({ tasksStorage }) => {
	const handleRemoveTasks = () => tasksStorage.item.length && tasksStorage.setItem([])

	const handleRemoveCompletedTasks = () => {
		tasksStorage.item.find(item => {
			item.status === 'completed' && tasksStorage.setItem(
				tasksStorage.item.filter(item => item.status !== 'completed')
			)
		})
	}

	return (
		<div className="to-do-options">
			<button className="to-do-options__dots-button">
				<TbGridDots className="to-do-options__dots-icon" />
			</button>
			<ul className="to-do-options__list">
				<li className="to-do-options__item">
					<button className="to-do-options__button" onClick={handleRemoveTasks}>
						<MdDeleteSweep className="to-do-options__icon" />
						<span>Remove all tasks</span>
					</button>
				</li>
				<li className="to-do-options__item">
					<button className="to-do-options__button" onClick={handleRemoveCompletedTasks}>
						<MdDownloadDone className="to-do-options__icon" />
						<span>Remove completed tasks</span>
					</button>
				</li>
			</ul>
		</div>
	)
}

export default ToDoOptions