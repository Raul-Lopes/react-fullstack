import React, { Component } from 'react';

export default class AddContacts extends Component {
    submitContact(event) {
        event.preventDefault();

        let contact = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value,
        }

        fetch("https://done-byly.onrender.com/api/contacts", {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                 "content-type": "application/json",
            }
        })
        .then(response => response.json())
        .then(() => {
            window.location.reload();
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitContact.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Placeholder" ref="firstName" type="text" className="validate" />
                    <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input ref="lastName" type="text" className="validate" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input ref="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}
