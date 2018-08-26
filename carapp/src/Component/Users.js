import User from "./User";
import React, { Component } from 'react';
import GList from "./GList";

class Users extends React.Component {
    state = {
        users : [],
    };

    addUser = (user) => {

    }

    updateUserById = (id) => (updatedUser) => {
        this.setState(prevState => {
            const users = prevState.users.map(user => {
                if (user.id !== id) {
                    return user;
                }

                return {...user, ...updatedUser};
            })

            return {
                users,
            }
        });

    }

    change = updatedValue => {
        this.setState({
            users: {
                ...this.state.users,
                ...updatedValue
            },
        });
    };

    render() {
        return <div>
            <User doChange={users => this.change(users)}/>
            <p>{JSON.stringify(this.state.users, null, 2)}</p>

        </div>

                }
}

export default Users;