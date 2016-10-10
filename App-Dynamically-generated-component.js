import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(){
		super();
		this.state = {data: [
			{id: 1, name: "Simon Bailey"}, {id: 2, name: "Anissa Joe"},
			{id: 3, name: "Gerard Hinojos"}, {id: 4, name: "Cherish Dore"},
			{id: 5, name: "Rolland Verdugo"}, {id: 6, name: "Johnathon Bruso"},
			{id: 7, name: "Synthia Hutter"}, {id: 8, name: "Darci Blade"},
			{id: 9, name: "Neomi Beardsley"}, {id: 10, name: "Lakisha Oster"},
			{id: 11, name: "Takisha Sturtz"},
			{id: 12, name: "Sabrina Schwan"},
			{id: 13, name: "Dovie Membreno"}, {id: 14, name: "Ned Mechem"},
			{id: 15, name: "Verlie Brookes"}, {id: 16, name: "Kiersten Mosby"},
			{id: 17, name: "Quentin Dupuis"},
			{id: 18, name: "Marlana Criado"},

		]}

	}
	render(){
		let rows = this.state.data.map( person => {
			return <PersonRow key={person.id} data={person} />
		})

		return 	<table>
					<tbody>{rows}</tbody>
				</table>
	}

}


const  PersonRow = (props) => {
	return <tr>
			<td>{props.data.id}</td>
			<td>{props.data.name}</td>
		   </tr>
}

export default App