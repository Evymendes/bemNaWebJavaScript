import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function createMarkup() {
  return {__html: 'First &middot; Second'};
}

const listDois = [
	{
		nome: 'Evelyn',
		mendes: 'Ribeiro'
	},
	{
		nome: 'oi',
		sobrenome: 'que'
	}
]

const list = [
{
	title: 'React',
	url: 'https://facebook.github.io/react/',
	author: 'Jordan Walke',
	num_comments: 3,
	points: 4,
	objectID: 0,
},
{
	title: 'Redux',
	url: 'https://github.com/reactjs/redux',
	author: 'Dan Abramov, Andrew Clark',
	num_comments: 2,
	points: 5,
	objectID: 1,
},
];

/*class Developer {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	getName() {
		return this.firstname + ' ' + this.lastname;
	}

	const robin = new Developer('Robin', 'Wieruch');
console.log(robin.getName());
}*/
class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: list
		}
	}

  render() {
  	const nome = 'Evelyn'
  	const sobrenome = 'Mendes'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {nome}{sobrenome}

        </header> 	


		{list.map(item =>
			<div key={item.objectID}>
				<span>
					<a href={item.url}>{item.title}</a>
				</span>
				<span>{item.author}</span>
				<span>{item.num_comments}</span>
				<span>{item.points}</span>
			</div>
		)}

		{this.state.list.map(item =>
			<div key={item.objectID}>
				<span>
					<a href={item.url}>{item.title}</a>
				</span>
				<span>{item.author}</span>
				<span>{item.num_comments}</span>
				<span>{item.points}</span>
			</div>
		)}

			<span>
				<button
					onClick={() => this.onDismiss(item.objectID)}
					type="button"
				>
					Dismiss
				</button>
			</span>

      </div>
    );
  }
}

export default App;
