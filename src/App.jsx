import React from 'react'
import Header from "./components/Header"
// import { createRoot } from "react-dom/client";
// import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
// import Home from "./components/pages/home/Home"
// import Tasks from "./components/pages/tasks/Tasks"
// import Scriptspage from "./components/pages/scriptspage/Scriptspage"
// import Timetable from "./components/pages/timetable/Timetable"
import "./index.css"

const App = () => {
    
    return (
        <div className="wrapper">
            <Header/>
            {/* <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tasks" component={Tasks} />
                    <Route exact path="/scripts" component={Scriptspage} />
                    <Route exact path="/timetable" component={Timetable} />
                </div>
            </Router> */}
        </div>
    );
};

export default App;