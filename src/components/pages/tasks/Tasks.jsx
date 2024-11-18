import React from 'react'
import './css/tasks.css'
const Tasks = () => {
    
    return (
    <div className="content">
        <div className="state-buttons">
            <button className="state-btn state-btn-one state-btn-id">Сегодня</button>
            <button className="state-btn state-btn-two state-btn-id">В ожидании</button>
            <button className="state-btn state-btn-three state-btn-id">Просроченные</button>
        </div>
        <div className="task-block">
            <h2 className="task-interface-text">Задачи</h2>
            <div className="task-interface">
                <p className="task-interface-all">Выбрать всё</p>
                <div className="task-interface-buttons">
                    <button className="task-interface-delete task-interface-delete-passive">Удалить</button>
                    <button className="task-interface-add" id="task-interface-add">Добавить</button>
                </div>
            </div>
            <div className="task-list-wrapper">
                <div className="task-add-form-block">
                    <div className="task-add-form">
                        <form method="post" className="task-add-form-main">
                            <input type="text" className="task-add-task task-add-input" placeholder="Введите задачу" />
                            <input type="date" className="task-add-date task-add-input" placeholder="Введите дату" />
                            <input type="time" className="task-add-time task-add-input" placeholder="Введите время" />
                            <button type="submit" className="task-add-submit"><i className="fa-solid fa-plus"></i></button>
                        </form>
                    </div>   
                </div>
                <div className="task-list">
                    <div className="task-list-elem task-list-today">
                            <div className="task-elem-box">
                                <div className="task-elem">
                                    <div className="task-checkbox-block">
                                        <input type="checkbox" className="task-checkbox" id="task-checkbox-id" />
                                    </div>
                                    <div className="task-name-block">
                                        <p className="task-name">Поприседать</p>
                                    </div>
                                    <div className="task-date-block">
                                        <p className="task-date">19.03.2004</p>
                                    </div>
                                    <div className="task-time-block">
                                        <p className="task-time">14:88</p>
                                    </div>
                                    <div className="task-edit">
                                        <i className="fa-regular fa-pen-to-square task-edit-icon"></i>
                                    </div>
                                    <div className="task-colormark-box">
                                        <div className="task-colormark"></div>
                                    </div>
                                </div>   
                                <div className="edit-task-box">
                                    <div className="edit-task-block">
                                        <div className="edit-task-1">
                                        </div>
                                        <input type="text" className="edit-task-text edit-task-input" placeholder="Введите задачу" />
                                        <input type="date" className="edit-task-date edit-task-input" placeholder="Введите дату" />
                                        <input type="time" className="edit-task-time edit-task-input" placeholder="Введите время" />
                                        <div className="edit-task-2">
                                        </div>
                                        <button type="submit" className="edit-task-submit"><i className="fa-solid fa-check"></i></button>
                                    </div>    
                                </div>
                            </div>
                            <div className="task-list-none"><h1>У вас нет задач</h1></div>
                    </div>
                    <div className="task-list-elem task-list-pending">
                        <div className="task-elem">
                            <div className="task-checkbox-block">
                                <input type="checkbox" className="task-checkbox" />
                            </div>
                            <div className="task-name-block">
                                <p className="task-name">Выполнить задачу в такое время</p>
                            </div>
                            <div className="task-date-block">
                                <p className="task-date">Ср, 13 Окт. 2024</p>
                            </div>
                            <div className="task-time-block">
                                <p className="task-time">18:33</p>
                            </div>
                            <div className="task-edit">
                                <i className="fa-regular fa-pen-to-square task-edit-icon"></i>
                            </div>
                            <div className="task-colormark-box">
                                <div className="task-colormark"></div>
                            </div>
            
                        </div>
                    </div>
                    <div className="task-list-elem task-list-overdue">
                        <div className="task-elem">
                            <div className="task-checkbox-block">
                                <input type="checkbox" className="task-checkbox" />
                            </div>
                            <div className="task-name-block">
                                <p className="task-name">Выполнить задачу в такое время</p>
                            </div>
                            <div className="task-date-block">
                                <p className="task-date">Ср, 13 Окт. 2024</p>
                            </div>
                            <div className="task-time-block">
                                <p className="task-time">18:33</p>
                            </div>
                            <div className="task-edit">
                                <i className="fa-regular fa-pen-to-square task-edit-icon"></i>
                            </div>
                            <div className="task-colormark-box">
                                <div className="task-colormark"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Tasks;