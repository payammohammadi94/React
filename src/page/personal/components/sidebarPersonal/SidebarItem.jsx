import React from 'react'

const SidebarItem=(props)=> {
  return (
    <li>
        <Link className='menu-item'>
            <div className='menu-icon'>
                <Speedometer />
            </div>
            <span>داشبورد</span>
        </Link>
    </li>
  )
}

export default SidebarItem;
