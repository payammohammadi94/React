import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'


export const SidebarData=[
    {
        title:'تست',
        path:'/personal',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened :<RiIcons.RiArrowUpSFill />,
        subNav:[
            {
                title:'تست ۱',
                path:'/personal/user1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title:'تست ۲',
                path:'/personal/user2',
                icon: <IoIcons.IoIosPaper />,
            }
        ]
    },
    {
        title:'آزمایش',
        path:'/admition',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened :<RiIcons.RiArrowUpSFill />,
        subNav:[
            {
                title:'آزمایش ۱',
                path:'/admition/user1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title:'آزمایش ۲',
                path:'/admition/user2',
                icon: <IoIcons.IoIosPaper />,
            }
        ]
    },

    {
        title:'نتیجه',
        path:'/result',
        icon: <FaIcons.FaCartPlus />
    }
]


export default function SidebarData() {
  return (
    <div>SidebarData</div>
  )
}
