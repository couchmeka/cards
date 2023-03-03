
import { Component } from 'react';
import { Container, Row, Card, Col, Tab,Tabs } from 'react-bootstrap';

  

//page 2
  const MortyData = (props) => {

    console.log(props.page)
    const mortyRick = props.page.map((characters, index) => {

        console.log(characters)
        
        return (
   <Col key = {index}>
    <Card bg="info" style={{ width: '18rem' }}>
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





//page 1
const RickData = (props) => {

    console.log(props.data)
    const rickMorty = props.data.map((characters, index) => {

        console.log(characters)
        
        return (
   <Col key = {index}>
    <Card bg="info" style={{ width: '18rem' }}>
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
</Col>
        )
    });

    return (
        
        <div>
            <Container>
                <Row>
                    {rickMorty}
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