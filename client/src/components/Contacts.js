import React, { Component } from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        fetch('https://done-byly.onrender.com/api/contacts', {
           method: 'GET', // *GET, POST, PUT, DELETE, etc.
           mode: 'cors', // no-cors, cors, same-origin
           headers: {
              'Content-Type': 'application/json'
           }
        })
        .then(response => response.json())
        .then(data => this.setState({contacts: data}))
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <div>
                <div className="row">
                    <AddContacts />
                </div>
                <div className="row">
                    { this.state.contacts.map((item) => (
                        <SingleContact key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}
