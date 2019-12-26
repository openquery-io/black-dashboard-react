import React from "react";
import {Card, CardBody, CardText} from "reactstrap";

class Dataset extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: props.displayName,
            backend: props.backend,
            canonicalName: props.canonicalName
        }
    }


    render() {
        return (
            <Card className="card-user">
                <CardBody>
                    <CardText />
                    <div className="author">
                        <div className="block block-one" />
                        <div className="block block-two" />
                        <div className="block block-three" />
                        <div className="block block-four" />
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                                alt="..."
                                className="avatar"
                                src={require("assets/img/bigquery_logo.png")}
                            />
                            <h2 className="title">{this.state.displayName}</h2>
                        </a>
                        <h3 className="description">{this.state.backend}</h3>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default Dataset;