import React from "react";
import {Alert, Col, Row, UncontrolledAlert} from "reactstrap";
import NotificationAlert from "react-notification-alert/index";

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
        }
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

    render() {

        return <>
            <Alert className="alert-with-icon" color={this.color()}>

                {this.icon()}


                <span data-notify="message">
                    <Row>
                        <Col xs={2}>
                            {this.props.timeExecuted}
                        </Col>
                        <Col xs={2}>
                            Status: {this.state.jobStatus}
                        </Col>
                        <Col xs={8}>
                            {this.props.query}
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </span>
            </Alert>
        </>
    }
}

export default JobItem;