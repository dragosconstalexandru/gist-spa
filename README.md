# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

In order for the GitHub Api calls to run you will need to setup an .env file with the following line:
REACT_APP_GH = 'your_github_access_token'

Project structure:

- helpers/octokit: where we initialize the octokit client. We define it here to initialize it only once, and use it where needed.
- components/AppContainer: component used as a container for the UserNameForm, GHUser and Gists component. Used as a wrapper in order to share state between the three.
- components/UserNameForm: here we call the GH endpoint and update the parent component, AppContainer, state.
- components/GHUser: render the gist owner information: name, description, image
- components/Gist: listing the user's gists
- components/Fork: listing the forks with the fork's owner username.
