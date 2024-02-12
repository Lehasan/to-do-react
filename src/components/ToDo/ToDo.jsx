import { useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import ToDoOptions from './ToDoOptions/ToDoOptions'
import ToDoForm from './ToDoForm/ToDoForm'
import ToDoTabs from './ToDoTabs/ToDoTabs'
import ToDoList from './ToDoList/ToDoList'
import './ToDo.scss'

const ToDo = () => {
	const tasksStorage = useLocalStorage('tasks', [
		{
			id: '1',
			text: 'Task',
			isCompleted: false
		},
		{
			id: '2',
			text: 'Completed task',
			isCompleted: true
		}
	])

	const [tabValue, setTabValue] = useState('')
	const getTabValue = value => setTabValue(value)

	return (
		<div className='to-do'>
			<div className="to-do__header">
				<h3 className="to-do__title">to do list</h3>
				<ToDoOptions tasksStorage={tasksStorage} />
			</div>
			<ToDoForm tasksStorage={tasksStorage} />
			<ToDoTabs getTabValue={getTabValue} />
			<ToDoList tasksStorage={tasksStorage} tabValue={tabValue} />
		</div >
	)
}

export default ToDo