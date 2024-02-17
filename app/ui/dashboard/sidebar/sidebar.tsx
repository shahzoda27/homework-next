"use client"
import React, {ReactNode} from 'react'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter
} from "react-icons/md"
import styles from "./sidebar.module.css"
import MenuLink from './menuLink/menuLink';
import Image from 'next/image'
interface MenuItem{
  title:string,
  lists:SubMenuItem[];
}
interface SubMenuItem{
  title:string,
  path:string,
  icon:ReactNode;
}
const menuItems:MenuItem[] = [
  {
    title:"Pages",
    lists:[
      {
        title:"Dashboard",
        path:"/dashboard",
        icon:<MdDashboard/>
      },
      {
        title:"Users",
        path:"/dashboard/users",
        icon:<MdSupervisedUserCircle />
      },
      {
        title:"Product",
        path:"/dashboard/product",
        icon:<MdShoppingBag />
      },
      {
        title:"Transaction",
        path:"/dashboard/transaction",
        icon:<MdAttachMoney />

      },
    ]
  },
  {
    title:"Analytics",
    lists:[
      {
        title:"Revenu",
        path:"/dashboard/revenu",
        icon:<MdWork />
      },
      {
        title:"Reports",
        path:"/dashboard/reports",
        icon:<MdAnalytics />
      },
      {
        title:"Teams",
        path:"/dashboard/teams",
        icon:<MdPeople />
      },
      {
        title:"Transaction",
        path:"/dashboard/transaction",
        icon:<MdAttachMoney />

      },
    ]
  },
  {
    title:"Users",
    lists:[
      {
        title:"Settings",
        path:"/dashboard/settings",
        icon:<MdOutlineSettings />
      },
      {
        title:"Help",
        path:"/dashboard/help",
        icon:<MdHelpCenter />
      }
    ]
  }
]
export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
        alt='avatar'
        src="/public/photo.jpg"
        className={styles.userImage}
        width="50"
        height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Shirinova Shahzoda</span>
        </div>
      </div>
      <ul>
        {
        menuItems.map((item,index)=>(
          <li key={index}>
            <span className={styles.cat}>{item.title}</span>
            {
              item.lists.map(list=>(
                <MenuLink key={list.title} menu={list}/>
              ))
            }
          </li>
        ))
        }
      </ul>
    </div>
  )
}
