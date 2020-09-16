import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const PortButtonDropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  
  const {items} = props

  const renderItems = (items) => {
    return (
      <DropdownMenu>
      {
        items.map((item, index) => (
            <DropdownItem key={index} {...item.handlers}>{item.text}</DropdownItem>
          )
        )
      }
      </DropdownMenu>
    )
  }

  return (
    <ButtonDropdown className="port-dropdown" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret size="sm">
      </DropdownToggle>
      {renderItems(items)}
    </ButtonDropdown>
  );
}

export default PortButtonDropdown;