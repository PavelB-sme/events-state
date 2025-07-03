import './DropdownItem.css'

function DropdownItem ({ item, onClick, activeItem }) {
  return (
    <>
      <li 
        className={`${activeItem === item ? "item active" : "item"}`} 
        onClick={() => onClick(item)}
        >
          <a 
            href="#"
            onClick={(e) => e.preventDefault()}
          >{item}</a>
      </li>
    </>
  )
}

export default DropdownItem;