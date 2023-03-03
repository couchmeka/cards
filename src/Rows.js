
import { Component, useState} from 'react';
import { Container, Row, Card, Col, Tab,Tabs, Collapse, Tooltip, OverlayTrigger } from 'react-bootstrap';
import ReactCardFlip from "react-card-flip";



//rotation animation 

    
        
      
 
//page 1
const RickData = (props) => {
    // set flip state for card flip 
    const [flip, setFlip] = useState(false);

    //tooltip
    const renderTooltip = (props) => (
        <Tooltip  {...props}>
          Click for Stats
        </Tooltip>
      );

      //card mapping
    const rickMorty = props.data.map((characters, index) => {
    

        console.log(characters)
        
        return (
            
   <Col key = {index}>
    {/* CSS Styling */}
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
    }
  
  
  `}
      </style>
      {/* card flip */}
    <ReactCardFlip isFlipped={flip} 
            flipDirection="horizontal">
    <div className='react-card'>
      {/* overlay */}
<OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      {/*card  */}
    <Card id="enlarge" style={{ width: '18rem' }} onClick={() => setFlip(!flip)} bg="warning">
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
</OverlayTrigger>
    </div>
    {/* reverse card size */}
    <div >
        <div class='react-card'>
            <Card id="enlarge" style={{ width: '18rem' }} onClick={() => setFlip(!flip)} bg="info">
            <Card.Img variant="top" src={characters.image} />
            <Card.Title>Stats</Card.Title>
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
// return card grid container
    return (
        
        <div >
            <Container >
                <Row>
                    {rickMorty}
                </Row>
            </Container>
         </div>
        
        
    )

}





//page 2
const MortyData = (props) => {
// set state for collapsable stats

const [open, setOpen] = useState(false);

// card mapping
const mortyRick = props.page.map((characters, index) => {

        
        
        return (
<Col key = {index}>
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
     }
  
  
  `}
      </style>
    <div className='react-card'>
        {/* card with collapse aria controls */}
<Card id="enlarge" onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} className="card" bg="warning" style={{ width: '18rem' }}>
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
    {/* collapsable card */}
    <div style={{ minHeight: '150px', width: '10rem'  }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card id="enlarge" body style={{ width: '285px' }}>
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
// return grid container
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
        defaultActiveKey="Page1"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
    <Tab eventKey="Page1" title="Page1">
        <Card  className='card'>
        <Card.Header>
        <h1>Rick and Morty Characters</h1></Card.Header>
        <RickData data ={data}/>
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