import React from 'react';
import HorizontalCode from './../Components/HorizontalCode';
import axios from'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAlert } from "mdbreact";

class About extends React.Component{
    state = {
        emailResponseCondition: false,
        emailResponse: ''
    }

    onSubmit = (e)=>{
        e.preventDefault();

        const emailDetails = {
            name:  this.refs.name.value,
            email: this.refs.email.value,
            subject: this.refs.subject.value,
            message: this.refs.message.value,
        }
        this.sendMail(emailDetails);
    } 

    sendMail = async(emailDetails)=>{
        const response = await axios.post('http://boluabiolaserver.herokuapp.com/sendMail', emailDetails);
        // const response = await axios.post('http://localhost:3001/api/sendMail', emailDetails);
        const data = response.data.message;
        this.setState({emailResponse: data, emailResponseCondition: true});
    }

    render(){
        let alert = null;

        if(this.state.emailResponseCondition){
            alert = (
                <MDBAlert className="mb-4" color="warning" dismiss>
                    {this.state.emailResponse}
                </MDBAlert>
            );
        }

        return (
            <div className="text-center" id="contact">
                <MDBContainer className="text-dark py-5">
                    <div className="mt-4">
                        {alert}
                        <h1 className="h2-responsive">CONTACT ME</h1>
                        <HorizontalCode />
    
                        <MDBRow>
                            <MDBCol md="7" className="m-auto">
                                <form className="mt-3" onSubmit={this.onSubmit}>
                                    <div className="grey-text">
                                        <div className="md-form form-group">
                                            <input placeholder="Name" id="name" type="text" className="form-control" ref="name" />
                                        </div>
    
                                        <div className="md-form form-group my-5">
                                            <input placeholder="Email" id="name" type="email" className="form-control" ref="email" />
                                        </div>
    
                                        <div className="md-form form-group">
                                            <input placeholder="Subject" id="name" type="text" className="form-control" ref="subject" />
                                        </div>

                                        <div className="md-form form-group mt-5">
                                            <textarea placeholder="Message" className="form-control md-textarea" rows="3" ref="message"></textarea>
                                        </div>
                                    </div>
    
                                    <div className="text-left">
                                        <MDBBtn type="submit" color="primary">Submit</MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
    
                    </div>
                </MDBContainer>
            </div>
        );
    };
}

export default About;