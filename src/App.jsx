import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/pages/home/Home"
import Tasks from "./components/pages/tasks/Tasks"
import Scriptspage from "./components/pages/scriptspage/Scriptspage"
import Timetable from "./components/pages/timetable/Timetable"

const App = () => {
    
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/tasks" element={<Tasks/>} />
                <Route exact path="/scripts" element={<Scriptspage/>} />
                <Route exact path="/timetable" element={<Timetable/>} />
            </Routes>
            {/* <Router>
                <div>
                    
                </div>
            </Router> */}
        </div>
    );
};

export default App;