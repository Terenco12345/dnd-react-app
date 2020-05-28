import React from 'react';
import axios from 'axios';
import {serverIP} from '../../config';

class CharacterSheetGalleryPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
        overallError: ""
        }
    }

    async handleTest(){
        console.log("Testing resource");
        await axios({
            method: 'get',
            url: serverIP+'/character-test',
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.handleTest}>PRESS ME TO TEST</button>
            </div>
        );
    }
}


export default CharacterSheetGalleryPage;