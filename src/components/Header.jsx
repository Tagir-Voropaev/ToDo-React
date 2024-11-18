import React from 'react'
import whitelogo from '../images/whitelogo.png'
import viollogo from '../images/viollogo.png'



function Header() {
  return (
    <div className="header">
        <div className="h-logo">
            <a href="" className="h-logo-link">
                <img src={whitelogo} alt="" />
            </a>
        </div>
        <div className="h-navbar">
            
            <a href="">Главная</a>
            <a href="">Задачи</a>
            <a href="">Расписание</a>
            <a href="">Скрипты</a>
        </div>
    </div>
  )
}


export default Header;