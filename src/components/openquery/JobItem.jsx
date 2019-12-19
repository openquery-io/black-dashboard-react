import React from "react";
import {Alert, Col, Row} from "reactstrap";

class JobItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobId: props.jobId,
            downloadLink: props.downloadLink,
            timeExecuted: props.timeExecuted,
            jobStatus: props.jobStatus,
            query: props.query,
            collapsed: true,
            error: ""
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    triggerDownload() {
        console.log("Download clicked");
        // TODO call endpoint with download link. Probably need an href or something
    }

    color() {
        switch (this.state.jobStatus) {
            case "success":
                return "success";
            case "failed":
                return "danger";
            default:
                return "info";
        }
    }

    icon() {
        switch (this.state.jobStatus) {
            case "success":
                return (
                    <span
                        className="tim-icons icon-satisfied"
                        data-notify="icon"
                    />
                );
            case "failed":
                return (
                    <span
                        className="tim-icons icon-alert-circle-exc"
                        data-notify="icon"
                    />
                );
            default:
                return (
                    <span
                        className="tim-icons icon-user-run"
                        data-notify="icon"
                    />
                )
        }
    }

    handleClick() {
        this.setState(state => ({
            collapsed: !state.collapsed
        }));
    }

    inner() {
        return (
            <>
                <Row>
                    <Col xs={1}>
                        Job ID
                    </Col>
                    <Col>
                        {this.state.jobId}
                    </Col>
                </Row>made w
                <Row>
                    <Col xs={1}>
                        User
                    </Col>
                    <Col>
                        christos@openquery.io
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        Start Time
                    </Col>
                    <Col>
                        {this.state.timeExecuted}
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        End Time
                    </Col>
                    <Col>
                        {this.state.timeExecuted}
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        Destination Table:
                    </Col>
                    <Col>
                        BigQuery: organisation.anonymized_output
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        Errors:
                    </Col>
                    <Col>
                        {this.state.error}
                    </Col>
                </Row>
            </>

        );
    }


    render() {

        return <>
            <div onClick={this.handleClick}>
                <Alert className="alert" color={this.color()}>

                    <span data-notify="message">

                    <Row>
                        <Col xs={1}>
                            {this.icon()}
                        </Col>
                        <Col xs={2}>
                            {this.props.timeExecuted}
                        </Col>
                        <Col xs={2}>
                            Status: {this.state.jobStatus}
                        </Col>
                        <Col xs={6}>
                            {this.props.query}
                        </Col>
                        <Col xs={1}>
                            <span onClick={this.triggerDownload()}
                                className="text-right tim-icons icon-cloud-download-93"
                                data-notify="icon"
                            />
                        </Col>
                    </Row>

                    <div hidden={this.state.collapsed}>
                        <br/>
                        {this.inner()}
                    </div>

                </span>
                </Alert>
            </div>
        </>
    }
}

export default JobItem;