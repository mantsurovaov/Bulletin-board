import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Items from './components/Items';
import Item from './components/Item';

const App = () => (
	<div className="App">
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/items" exact component={Items} />
				<Route path="/item/:id" component={Item} />
			</Switch>
		</Router>
	</div>
);

export default App;
