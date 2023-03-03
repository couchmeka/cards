
import { Component, useState} from 'react';
import { Container, Row, Card, Col, Tab,Tabs, Collapse, } from 'react-bootstrap';
import ReactCardFlip from "react-card-flip";


//rotation animation 

    
        
      
 
//page 1
const RickDataCardFront = (props) => {
    const [flip, setFlip] = useState(false);

    console.log(props.data)
    const rickMorty = props.data.map((characters, index) => {
    

        console.log(characters)
        
        return (
            
   <Col key = {index}>
    <ReactCardFlip isFlipped={flip} 
            flipDirection="vertical">
    <div className="react-card">
    <Card onClick={() => setFlip(!flip)}>
      <Card.Img variant="top" src={characters.image} />
      <Card.Body>
        <Card.Title>{characters.name}</Card.Title>
        <Card.Text>
          Gender: {characters.gender} <br/>
          Species: {characters.species} <br/>
          Status: {characters.status}
          
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div >
          <div id="example-collapse-text">
            <Card onClick={() => setFlip(!flip)}>
            <Card.Img variant="top" src={characters.image} />
            <Card.Title>{characters.name}</Card.Title>
              Episodes {characters.episode.length}<br/>
              Location {characters.location.name}<br/>
              Location {characters.origin.name}
            </Card>
          </div>
        
      </div>
      </ReactCardFlip>
</Col>
        )
    });

    return (
        
        <div>
            <Container className="card-grid">
                <Row>
                    {rickMorty}
                </Row>
            </Container>
         </div>
        
        
    )

}





//page 2
const MortyData = (props) => {

    const [open, setOpen] = useState(false);

    console.log(props.page)
    const mortyRick = props.page.map((characters, index) => {

        console.log(characters)
        
        return (
   <Col key = {index}>
    <div className='react-card'>
    <Card onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} className="card" bg="info" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={characters.image} />
      <Card.Body>
        <Card.Title>{characters.name}</Card.Title>
        <Card.Text>
          Gender: {characters.gender} <br/>
          Species: {characters.species} <br/>
          Status: {characters.status}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div style={{ minHeight: '150px', width: '10rem'  }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '285px' }}>
              Episodes {characters.episode.length}<br/>
              Location {characters.location.name}<br/>
              Location {characters.origin.name}
            </Card>
          </div>
        </Collapse>
      </div>
</Col>
        )
    });

    return (
        
        <div>
            <Container>
                <Row>
                    {mortyRick}
                </Row>
            </Container>
         </div>
        
        
    )

}










class BasicExample extends Component {




    


render() {
    const {data, page } = this.props;
  return (
    <div>
  <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Page1" title="Page1">
        <Card  className='card'>
        <Card.Header>
        <h1>Rick and Morty Characters</h1></Card.Header>
        <RickDataCardFront data ={data}/>
       </Card>
    </Tab>
        <Tab eventKey="page2" title="Page2">
        <Card  className='card'>
        <Card.Header>
        <h1>Rick and Morty Characters</h1></Card.Header>
         <MortyData page ={page}/>
        </Card>
        </Tab>
      </Tabs>

    </div>
  );
}
}

export default BasicExample;