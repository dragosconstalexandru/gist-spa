import React from 'react';
import {octokit} from '../helpers/octokit';
//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

class UserNameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        (async () => {
            const response = await octokit.request('GET /users/{username}/gists', {
                username: 'bradtraversy'
            });
            if (response.status === 200 ) {
                this.props.setGistsOnParent(response.data, response.data[0].owner);
            }
        })();

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default UserNameForm