import * as React from 'react';
import { Menu } from '@headlessui/react';

const MyDropdown = () => {
  return (
    <Menu>
    <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
        {({ active }) => (
          <div className={`${active && "bg-blue-500"}`}>
            Hello
          </div>
        )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default MyDropdown;
