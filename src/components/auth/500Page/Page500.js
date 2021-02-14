import React from 'react'
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
const Page500 =()=>{
    return (
        <div className="app flex-row align-items-center pt-5">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <span className="clearfix">
                  <h1 className="float-left display-3 mr-4">500</h1>
                  <h4 className="pt-3">Fisher, we have a problem!</h4>
                  <p className="text-muted float-left">The page you are looking for is temporarily unavailable.</p>
                </span>
                <InputGroup className="input-prepend">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-search"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input size="16" type="text" placeholder="What are you looking for?" />
                  <InputGroupAddon addonType="append">
                    <Button color="info">Search</Button>
                  </InputGroupAddon>
                </InputGroup>
                <Link to='/login'>
                    <Button color="info" size='16'>Back</Button>
                  </Link>
              </Col>
            </Row>
          </Container>
        </div>
      );
}
export default Page500