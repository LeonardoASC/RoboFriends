import React, { useState } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css'

const App = () => {
    const [robotsState, setRobotsState] = useState({
        robots: robots,
        searchfield: ''
    });

    const onSearchChange = (e) => {
        setRobotsState({
            ...robotsState,
            searchfield: e.target.value
        });
    };

    const filterRobots = robotsState.robots.filter(robot => {
        return robot.name.toLowerCase().includes(robotsState.searchfield.toLowerCase());
    });

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox onSearchChange={onSearchChange} />
            <CardList robots={filterRobots} />
        </div>
    );
}

export default App;
