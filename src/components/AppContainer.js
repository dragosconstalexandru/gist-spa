import React from 'react';
import UserNameForm from './UserNameForm';
import GHUser from "./GHUser";
import Gist from "./Gist";

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {gists : {}, owner: null};

        this.setGistsOnParent = this.setGistsOnParent.bind(this);
    }

    setGistsOnParent(gists = [], owner= null) {
        this.setState({
            gists: gists,
            owner: owner
        });
    }

    render() {
        return (
            <div>
               <UserNameForm setGistsOnParent={this.setGistsOnParent}/>
                <GHUser owner = {this.state.owner}/>
                <Gist gists = {this.state.gists}/>
            </div>
        );
    }
}

export default AppContainer