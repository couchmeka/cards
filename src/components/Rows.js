import { Component, useState } from "react";
import {
  Container,
  Row,
  Card,
  Col,
  Tab,
  Tabs,
  Collapse,
 
} from "react-bootstrap";
import Flip from "./Flip";

//rotation animation

//page 1
const RickData = (props) => {
  // set flip state for card flip
 

  //tooltip


  //card mapping
  
  // return card grid container
  return (
    <div>
      <Container>
        <Row>{props.data.map((characters) => {

          return <Flip characters = {characters}/>
        })}</Row>
      </Container>
    </div>
  );
};






//page 2
const MortyData = (props) => {
  // set state for collapsable stats

  const [open, setOpen] = useState(false);

  // card mapping
  const mortyRick = props.page.map((characters, index) => {
    return (
      <Col key={index}>
        {/* CSS styling */}
        <style type="text/css">
          {`
    
    #enlarge:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 26px rgba(0,0,0,0.20);
    transform: scale(1.1);
    
     }
  
   .card {
    margin-bottom: 25px;
    margin-top: 25px;
    display: flex;
    
     }
  
   
  
  
  `}
        </style>
        <div className="react-card">
          {/* card with collapse aria controls */}
          <Card
            id="enlarge"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="card"
            bg="warning"
            style={{ width: "18rem" }}
          >
            <Card.Header>
              <h2>{characters.name}</h2>{" "}
            </Card.Header>
            <Card.Img variant="top" src={characters.image} />
            <Card.Body bg="light">
              <Card.Title>{characters.name}</Card.Title>
              <Card.Text>
                Gender: {characters.gender} <br />
                Species: {characters.species} <br />
                Status: {characters.status}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* collapsable card */}
        <div style={{ minHeight: "150px", width: "10rem" }}>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Card id="enlarge" body style={{ width: "285px" }}>
                Episodes {characters.episode.length}
                <br />
                Location {characters.location.name}
                <br />
                Location {characters.origin.name}
              </Card>
            </div>
          </Collapse>
        </div>
      </Col>
    );
  });
  // return grid container
  return (
    <div>
      <Container>
        <Row>{mortyRick}</Row>
      </Container>
    </div>
  );
};

class BasicExample extends Component {
  render() {
    const { data, page } = this.props;
    return (
      <div>
        <Tabs
          defaultActiveKey="Page1"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Page1" title="Page1">
            <Card className="card">
              <Card.Header>
                <h1>Rick and Morty Characters</h1>
              </Card.Header>
              <RickData data={data} />
            </Card>
          </Tab>
          <Tab eventKey="page2" title="Page2">
            <Card className="card">
              <Card.Header>
                <h1>Rick and Morty Characters</h1>
              </Card.Header>
              <MortyData page={page} />
            </Card>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default BasicExample;
