import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div>
          
                <Container className='mt-5 mb-5'>
                    <Row >
                        <Col lg="6" className="mt-5">

                            <h1 className=" text-primary fw-bold mt-3">Is online interior design right for you?</h1> <br />
                            <p className="fs-4 fw-bold">In search of interior design inspiration</p>
                            <p>Have you ever tried handling a home decoration project by yourself, but found it difficult to execute it all on your own? Or you’ve possibly considered hiring a professional to design your space, but been put off by expensive renovation fees, hassle of coordination and the overall extensive timelines.
                            </p>
                            <Button variant="primary">
                                <Link className='text-light text-decoration-none fw-bold' to={`/courses`}>Get Started</Link>
                            </Button>
                        </Col>

                        
                        <Col lg="6">
                            <img src="https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=1380&t=st=1668177591~exp=1668178191~hmac=6538b9e4b8762f2c7947d51b1e3d87e381cd62639653b7eb47aaed07e99de586" alt="" className='card' />
                        </Col>
                    </Row>
                </Container>

            
        </div>
    );
};

export default AboutSection;