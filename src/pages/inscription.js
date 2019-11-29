import React, { Component } from 'react'
import axios from 'axios';

class Inscription extends Component {
    constructor(props){
        super(props)

        this.state = {
            userName: "",
            email: "",
            name: "",
            password: "",
            passwordAgain: ""
        }

    }

    handleName(e) {
        this.setState({userName : e.target.value});
    }

    handleEmail(e) {
        this.setState({email: e.target.value});
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    handlePasswordAgain(e) {
        this.setState({passwordAgain: e.target.value})
    }


    handleSubmit(e) {
        e.preventDefault();
        axios.post('http://ec2-35-181-63-1.eu-west-3.compute.amazonaws.com:5000/register', {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            passwordAgain: this.state.passwordAgain,
        }).then(() => {
            console.log('utilisateur ajouté')
        }).catch( (error) => console.log(error) ) 
    }



    render() {
        return (
            <div>
                <h1 className="container-fluid bg-grey shadow-sm p-3 mb-5 bg-white rounded">Inscrivez-vous</h1>
                
                <div className="container">
                <div class="row justify-content-md-center mt-4">

            <div className="col-md-4">
            <form>

                <div className="form-group">
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input type="text" className="form-control" id="username"placeholder="Entrez votre nom d'utilisateur..." onChange = {(e) => this.handleName(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Votre Email</label>
                    <input type="text" className="form-control" name="email" id="email" placeholder="Entrez votre adresse email..." onChange = {(e) => this.handleEmail(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" className="form-control" id="password" placeholder="*******" onChange = {(e) => this.handlePassword(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password-again">Mot de passe (à nouveau)</label>
                    <input type="password" className="form-control" id="password-again" placeholder="*******" onChange = {(e) => this.handlePasswordAgain(e)}/>
                </div>
                <input type="hidden" name="submit" value="1" />
                <button type="submit" className="btn btn-primary w-100 my-4"  onClick = {(e) => this.handleSubmit(e) }>inscription</button>
            </form>
            </div>

            </div>
</div>
</div>

        )
    }
}


export default Inscription;