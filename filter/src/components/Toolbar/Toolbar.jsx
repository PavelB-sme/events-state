import './Toolbar.css'

function Toolbar (props) {
  const {filters, selected, onSelectedFilter} = props

  return (
    <>
      <div className="filter">
        {filters.map((filter) => (
          <button
            key={filter} 
            onClick={() => onSelectedFilter(filter)} 
            className={`button ${selected === filter && "button_active"}`}
          > 
            {filter}
          </button>
        ))}
      </div>
    </>
  )
}

export default Toolbar;