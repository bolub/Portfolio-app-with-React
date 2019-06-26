import React from 'react';
import HorizontalCode from './../Components/HorizontalCode';
import Card from './../Components/Card';
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
import axios from 'axios';
import Spinner from './../UI/Spinner';

class Header extends React.Component{
    state = {
        data: [],
        loading: true
    }

    async componentDidMount(){
        const response = await axios.get('http://boluabiolaserver.herokuapp.com/api/projects');
        const data = response.data;
        this.setState({
            data,
            loading: false
        });
    }

    render(){
        let projects = <div className="text-center m-auto"><Spinner/></div>;

        if(!this.state.loading){
            projects = (
                <>
                    {this.state.data.map(project =>{
                        return(
                            <MDBCol key={project._id} className="mt-4" md="6" lg="4">
                                
                                    <Card
                                        imgSrc={project.imageLink}
                                        cardTitle={project.name}
                                    >
                                        <a href={project.url} target="blank" className="btn transform-none btn-primary">Visit site</a>
                                    </Card>
                                
                            </MDBCol>
                        );
                    })}
                </>
            );
        }

        return(
            <div className="text-center" id="portfolio">
            <MDBContainer className="text-dark py-5">
                <h1 className="h2-responsive">PORTFOLIO</h1>
                <HorizontalCode/>

                <MDBRow className="mt-5">
                   {projects}
                </MDBRow>
            </MDBContainer>
        </div>
        );
    }
}


export default Header;