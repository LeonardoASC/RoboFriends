import React, { useState, useEffect } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

const App = () => {
    const [robotsState, setRobotsState] = useState({
        robots: [],
        searchfield: ''
    });

    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const onSearchChange = (e) => {
        setRobotsState({
            ...robotsState,
            searchfield: e.target.value
        });
    };

    const filterRobots = robotsState.robots.filter(robot => {
        return robot.name.toLowerCase().includes(robotsState.searchfield.toLowerCase());
    });

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();

            await new Promise(resolve => setTimeout(resolve, 1000));

            setRobotsState({
                robots: users,
                searchfield: robotsState.searchfield
            });

            setIsDataLoaded(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox onSearchChange={onSearchChange} />
            {isDataLoaded ? (
                <>
                    <CardList robots={filterRobots} />
                </>
            ) : (
                <h1 className="f2">Loading...(teste async - await)</h1>
            )}
        </div>
    );
}

export default App;
