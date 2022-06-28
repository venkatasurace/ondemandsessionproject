import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const filterUpdateList = () => {
    updateActiveTab(tabId)
  }
  const activeClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={filterUpdateList}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
