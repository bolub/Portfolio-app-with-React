import React from 'react';
import {
    MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText
} from "mdbreact";
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <MDBCard className={classes.w75}>
            <MDBCardImage className={classes.cardI + " img-fluid"} src={props.imgSrc} />
            <MDBCardBody>
                <MDBCardTitle className={classes.cardTitle}>{props.cardTitle}</MDBCardTitle>
                <MDBCardText>
                        {props.cardText}
                </MDBCardText>
                {props.children}
            </MDBCardBody>
        </MDBCard>
    );
}

export default Card;