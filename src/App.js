import React, {Component} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
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
        // this.setState({robots: robots})
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;