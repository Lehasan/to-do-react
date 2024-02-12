import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { classNames } from '@/utils/classNames'
import { IoIosList } from 'react-icons/io'
import { PiListChecks } from 'react-icons/pi'
import './ToDoTabs.scss'

const ToDoTabs = ({ getTabValue }) => {
	const [tab, setTab] = useState('all')

	const handleSwitchTab = event => setTab(event.currentTarget.dataset.tab)

	useEffect(() => {
		getTabValue(tab)
	}, [getTabValue, tab])

	return (
		<ul className="to-do-tabs tabs-list">
			<li className="tabs-list__item">
				<button
					className={classNames(
						'tabs-list__button',
						tab === 'all' && 'tabs-list__button_active'
					)}
					data-tab="all"
					onClick={handleSwitchTab}
				>
					<IoIosList className="tabs-list__button-icon" />
					<span className="tabs-list__button-text">All tasks</span>
				</button>
			</li>
			<li className="tabs-list__item">
				<button
					className={classNames(
						'tabs-list__button',
						tab === 'completed' && 'tabs-list__button_active'
					)}
					data-tab="completed"
					onClick={handleSwitchTab}
				>
					<PiListChecks className="tabs-list__button-icon" />
					<span className="tabs-list__button-text">Completed tasks</span>
				</button>
			</li>
		</ul>
	)
}

ToDoTabs.propTypes = {
	getTabValue: PropTypes.func
}

export default ToDoTabs