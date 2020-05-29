import React from 'react';
import axios from 'axios';
import { serverIP } from '../../config';
import { withRouter } from 'react-router-dom';
import { Redirect } from "react-router-dom";

class CharacterSheetGalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null
        }
    }

    async handleTest(page) {
        console.log("Sending test request for resource...");
        await axios({
            method: 'get',
            url: serverIP + '/character-sheet-gallery/test',
            withCredentials: true
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            if (err) {
                console.log("User is not authorized to access this resource, redirecting to home.");
                this.setState({ redirect: '/' }); // Should redirect to the home page.
            }
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}></Redirect>
        }
        return (
            <div>
                <button onClick={this.handleTest.bind(this)}>PRESS ME TO TEST</button>
            </div>
        );
    }
}


export default withRouter(CharacterSheetGalleryPage);