import { useLocalStorage } from '@/hooks/useLocalStorage'
import ToDoList from './ToDoList/ToDoList'
import ToDoForm from "./ToDoForm/ToDoForm"
import ToDoOptions from "./ToDoOptions/ToDoOptions"
import './ToDo.scss'

const ToDo = () => {
	const tasksStorage = useLocalStorage('tasks', [])

	return (
		<div className='to-do'>
			<div className="to-do__header">
				<h3 className="to-do__title">to do list</h3>
				<ToDoOptions tasksStorage={tasksStorage} />
			</div>
			<ToDoForm tasksStorage={tasksStorage} />
			<ToDoList tasksStorage={tasksStorage} />
		</div >
	)
}

export default ToDo