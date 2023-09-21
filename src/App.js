import React, {Component} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from './SearchBox';
import './App.css';




class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    //Check if component mounts, then load robots
    componentDidMount() {
        this.setState({robots: robots})
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        )
    }
}

export default App;