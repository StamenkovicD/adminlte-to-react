import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

  const user = useSelector((state) => state.user.value)
  const currentUser = useSelector((state) => state.user.currentUser)

  const [isActive, setIsActive] = useState(false)
  const toogleClass = () => {
    setIsActive(!isActive)
  }

    return (
        <div>
          <header className="main-header">
            {/* Logo */}
            <Link to="/" className="logo"><b>Admin</b>LTE</Link>
            {/* Header Navbar: style can be found in header.less */}
            <nav className="navbar navbar-static-top" role="navigation">
              {/* Sidebar toggle button*/}
              <Link to="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span className="sr-only">Toggle navigation</span>
              </Link>
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    {/* Messages: style can be found in dropdown.less*/}
                    <li className={`dropdown messages-menu ${isActive ? 'open' : null} `}>
                      <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toogleClass}>
                        <i className="fa fa-envelope-o" />
                        <span className="label label-success">{Object.keys(user).length} </span>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="header">You have {Object.keys(user).length} messages</li>
                        <li>
                          {/* inner menu: contains the actual data */}
                          <ul className="menu">
                            {
                              user.map((item, index) => (
                                <li key={index}>
                                  <Link to='/'>
                                    <div className="pull-left">
                                      <img src={`dist/img/${item.image}`} className="img-circle" alt={`${item.imageAlt}`} />
                                    </div>
                                    <h4>
                                      {item.title}
                                      <small><i className="fa fa-clock-o" /> {item.time}</small>
                                    </h4>
                                    <p>{item.message}</p>
                                  </Link>
                                </li>
                              ))
                            }
                          </ul>
                        </li>
                        <li className="footer"><Link to="#">See All Messages</Link></li>
                      </ul>
                    </li>
                  {/* User Account: style can be found in dropdown.less */}
                  <li className="dropdown user user-menu">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                      <img src={`dist/img/${currentUser.currentUserImage}`} className="user-image" alt={currentUser.imageAlt} />
                      <span className="hidden-xs">{currentUser.name}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
    )
}

export default Header
