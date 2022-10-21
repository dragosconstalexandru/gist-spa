import React from 'react';
import {octokit} from "../helpers/octokit";

class GHUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          avatarUrl: '',
          name: '',
          description: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.owner !== prevProps.owner) {
            const owner = this.props.owner;
            (async () => {
                const response = await octokit.request('GET ' + owner.url);
                if (response.status === 200) {
                    const GHUser = response.data;
                    this.setState({
                        avatarUrl: GHUser.avatar_url,
                        name: GHUser.name,
                        description: GHUser.bio
                    });
                }
            })();
        }
    }

    render() {
        if (!this.state.name) {
            return;
        }
        return (
            <div>
                <h1>User Info</h1>
                <img src={this.state.avatarUrl} alt="" width="20" height="20"/>
                <p>User Name: {this.state.name}</p>
                <p>Description: {this.state.description}</p>
            </div>
        );
    }
}

export default GHUser