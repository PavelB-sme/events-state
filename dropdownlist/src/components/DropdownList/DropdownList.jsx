import { useState } from 'react';
import './DropdownList.css'
import DropdownItem from '../DropdownItem/DropdownItem';

function DropdownList ({dropdownState, onClose}) {
  const [activeItem, setActiveItems] = useState('Profile Information');
  
  const items = [
    'Profile Information', 
    'Change Password', 
    'Become PRO',
    'Help',
    'Log Out'
  ];

  function handleItemClick (item) {
    setActiveItems(item);
    onClose();
  }

  if (!dropdownState) return null;

  return (
    <ul className="dropdown-list">
      {items.map((item) => (
        <DropdownItem
          key={item}
          item={item}
          onClick={handleItemClick}
          activeItem={activeItem}
        />
      ))}
    </ul>
  );
}

export default DropdownList;