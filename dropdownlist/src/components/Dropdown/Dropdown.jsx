import DropdownList from '../DropdownList/DropdownList';
import './Dropdown.css'
import { useState } from 'react';

function Dropdown () {
  const [dropdownState, setDropdownState] = useState(false);

  function drop () {
    setDropdownState(!dropdownState);
    console.log(dropdownState);
  }

  return (
    <>
      <button className="button_drop" onClick={drop}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList 
        dropdownState={dropdownState}
        onClose={() => setDropdownState(false)}
      />  
    </>
  )
}

export default Dropdown;