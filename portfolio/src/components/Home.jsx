import React from 'react';
import { Row, Col, Divider, Tag} from 'antd';

var areasOfInterests = [
  "Machine Learning",
  "Artificial Intelligence",
  "Distributed Systems",
  "Microservices",
  "Web Development",
  "Competetive Coding"
]

class Home extends React.Component {
    render() {
        return (
        <Row>
            <Row>
                <Col style={{fontFamily: 'Josefin Slab', fontSize: '130%'}}>
                    <br/>
                    I am currently working at <a style={{fontFamily: 'Jura'}}>NUTANIX</a> (MTS2). I completed my under-graduate from <a style={{fontFamily: 'Jura'}}>BITS Pilani University</a>.
                    <br/><br/>
                    I'm a keen learner, explorer, Computer Science enthusiast and an aspiring machine learning researcher with a passion for developing smart solutions to assist humans.
                    <br/><br/>
                    I think the best way to gain knowledge is by experimenting and the best way to strengthen concepts is by teaching.
                </Col>
                <Divider />
            </Row>
            <Row>
                    <p style={{fontFamily: 'Josefin Slab', fontSize: '130%'}}>
                        <b>Areas of interest:</b>
                    </p>
                    {areasOfInterests.map((x) => <Tag>{x}</Tag>)}
            </Row>
            <Divider/>
            
            <Row type="flex" justify="center" gutter={10}>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <h1 style={{fontFamily: 'Jura'}}>Languages</h1>
                    <Row><b>Familarity : Advanced</b></Row>
                    <Row>Python, Java, C, C++</Row>
                    <br/>
                    <Row><b>Familarity : Intermediate</b></Row>
                    <Row>JavaScript</Row>
                    <br/>
                    <Row><b>Familarity : Basic</b></Row>
                    <Row>CSS, Angular</Row>
                </Col>

                <Col xs={24} sm={24} md={24} lg={0} xl={0}><Divider/></Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <h1 style={{fontFamily: 'Jura'}}>Framework/Libraries</h1>
                    <Row><b>Experienced</b></Row>
                    <Row>OpenCV, Scikit-learn, Numpy, Keras, Tensorflow, Pandas,
                         ExpressJS, Mongoose, Flask, ReactJS, NodeJS</Row>
                    <br/>
                    <Row><b>Familiar</b></Row>
                    <Row>Mockito, Spring Boot, jQuery</Row>
                </Col>

                <Col xs={24} sm={24} md={24} lg={0} xl={0}><Divider/></Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <h1 style={{fontFamily: 'Jura'}}>Tools</h1>
                    <Row><b>Experienced</b></Row>
                    <Row>GCP, Docker, Docker-compose, MongoDB</Row>
                    <br/>
                    <Row><b>Familiar</b></Row>
                    <Row>AWS, Azure, Kafka</Row>
                </Col>
            </Row>
        </Row>
        )
    }
};

export default Home;