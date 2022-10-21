import React from 'react';
import {octokit} from "../helpers/octokit";

class Fork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forks: [],
        }
    };

    componentDidMount() {
        (async () => {
            const response = await octokit.request('GET ' + this.props.url);
            if (response.status === 200) {
                const forks = response.data;
                this.setState({
                    forks: forks
                });
            }
        })();
    }

    render() {
        const forks = this.state.forks;
        const forksList = forks.map((fork, i) => {
            return <li key={i}>{fork.description}, {fork.owner.login}</li>
        });

        return <ul>{forksList}</ul>
    }
}

export default Fork