import React,{useState} from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { SidebarData } from './menuData'
import SearchForm from '../search-form/searchForm'

const Menu = (props) => {

   const [activeMenu, setActiveMenu] = useState(false)

   const toogleFunc = (e) => {
    e.preventDefault()
    setActiveMenu(!activeMenu)
   }

   const currentUser = useSelector((state) => state.user.currentUser)

    return (
        <div>
          <aside className="main-sidebar">
            {/* sidebar: style can be found in sidebar.less */}
            <section className="sidebar">
              {/* Sidebar user panel */}
              <div className="user-panel">
                <div className="pull-left image">
                  <img src={`dist/img/${currentUser.currentUserImage}`} className="img-circle" alt={currentUser.imageAlt} />
                </div>
                <div className="pull-left info">
                  <p>{currentUser.name}</p>
                  <Link href="#"><i className="fa fa-circle text-success" /> {currentUser.status}</Link>
                </div>
              </div>
              {/* search form */}
              <SearchForm icon={true}/>
              {/* /.search form */}
              {/* sidebar menu: : style can be found in sidebar.less */}
              <ul className="sidebar-menu">
                <li className="header">MAIN NAVIGATION</li>
                {
                  SidebarData.map((item, index) => {
                    return(
                      <ul className="sidebar-menu">
                        <li className={` ${activeMenu ? 'active' : null} treeview`} key={index}>
                          <a href='/'  onClick={toogleFunc}>
                            <i className={`fa ${item.icon}`} />
                              <span>{item.title}</span>
                              {/* If there is a submenu, add arrow */}
                            <i className={`fa  ${item.submenu ? 'fa-angle-left' : null} pull-right `}/>

                            { 
                              item.notification ? // Notifications, if there, generate
                                <spam className={`label ${item.labelPrimary ? 
                                  'label-primary' : null} pull-right bg-${item.color}`}>
                                    {item.notification}
                                  </spam> 
                              : null 
                            }

                          </a>

                          <ul className={`treeview-menu`}>
                            {
                              item.submenu ? <li >{item.submenu.map((subItem, subIndex) => ( // If there is submenus, generate it
                                <li key={subIndex}>
                                  <a href={subItem.url}>
                                    {subItem.subTitle}
                                  </a>
                                </li>
                              ))}</li> : null
                            }
                          </ul>

                        </li>
                      </ul>
                    )
                  })
                }
              </ul>
            </section>
            {/* /.sidebar */}
          </aside>
        </div>
    )
}


export default Menu;
