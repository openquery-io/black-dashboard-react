import React from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Row} from "reactstrap";

class Configuration extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    {/* Cluster size (#pods), memory, cpu count */}
                    <Row>
                        <Col md="8">
                            <Card>
                                <CardHeader>
                                    <h4 className="title">Refinery Configuration</h4>
                                    <h5  className="title">Cluster</h5>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col className="pr-md-1" md="5">
                                                <FormGroup>
                                                    <label>Number of Pods</label>
                                                    <Input
                                                        defaultValue="3"
                                                        placeholder="3"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1" md="3">
                                                <FormGroup>
                                                    <label>CPU Count</label>
                                                    <Input
                                                        defaultValue="4"
                                                        placeholder="4"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1" md="3">
                                                <FormGroup>
                                                    <label>Memory (Gb)</label>
                                                    <Input
                                                        defaultValue="12"
                                                        placeholder="12"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <Button className="btn-fill" color="primary" type="submit">
                                        Save
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default Configuration;