
import { Component } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';



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
    const {data} = this.props;
  return (
    <div>
        <Card  className='card'>
        <Card.Header><h1>Rick and Morty Characters</h1></Card.Header>
    <RickData data ={data}/>
    </Card>
    </div>
  );
}
}

export default BasicExample;