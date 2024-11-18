import React from 'react'
import whitelogo from '../images/whitelogo.png'
import {Link } from 'react-router-dom';

// import viollogo from '../images/viollogo.png'



function Header() {
  return (
    <div className="header">
        <div className="h-logo">
            <Link to="/" className="h-logo-link">
                <img src={whitelogo} alt="" />
            </Link>
        </div>
        <div className="h-navbar">
            <Link to="/">Главная</Link>
            <Link to="/tasks">Задачи</Link>
            <Link to="/timetable">Расписание</Link>
            <Link to="/scripts">Скрипты</Link>
        </div>
    </div>
  )
}


export default Header;