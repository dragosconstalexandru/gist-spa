import React from 'react';
import Fork from "./Fork";

class Gist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gists: []
        }
    };

    componentDidUpdate(prevProps) {
        if (this.props.gists !== prevProps.gists) {
            this.setState({
                gists: this.props.gists
            });
        }
    }

    render() {
        const gists = this.state.gists;
        const gistList = gists.map((gist, i) => {
            const programmingLanguage = gist.files[Object.keys(gist.files)[0]].language.toLowerCase();
            const iconName = "devicon-" + programmingLanguage + "-plain";
            return <li key={i}>
                {gist.description},
                {new Date(gist.created_at).toString()},
                <i className={iconName}></i>
                <p>Forks:</p>
                <Fork url={gist.forks_url}/>
            </li>
        });
        return <div>
            <h1>Gists list</h1>
            <ul>{gistList}</ul>
        </div>

    }
}

export default Gist