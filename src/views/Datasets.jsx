import React from "react";

import {Card, CardHeader, CardBody, Row, Col, CardText} from "reactstrap";
import Dataset from "../components/openquery/Dataset";

class Datasets extends React.Component {

    renderDataset() {
        let datasetsInfo = [
            {
                displayName: "Salaries",
                backend: "BigQuery",
                canonicalName: "organisation.salaries"
            },
            {
                displayName: "Employee Health Reports",
                backend: "BigQuery",
                canonicalName: "organisation.employee_health"
            }
        ];

        return datasetsInfo.map(datasetInfo =>
            <Col sm={4}>
                <Dataset
                    displayName={datasetInfo.displayName}
                    backend={datasetInfo.backend}
                    canonicalName={datasetInfo.canonicalName}
                >
                </Dataset>
            </Col>
        );
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        {this.renderDataset()}
                        <AddDataset/>
                    </Row>
                </div>
            </>
        )
    }
}

class AddDataset extends React.Component {
    render() {
        return (
            <Col sm={4}>
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
                                <h2 className="title">"Add Dataset"</h2>
                            </a>
                            <h3 className="description"></h3>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Datasets;