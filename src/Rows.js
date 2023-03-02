
import { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';



const RickData = (props) => {

    console.log(props.data)
    const rickMorty = props.data.map((characters, index) => {

        console.log(characters)
        return (
<Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={characters.image} />
      <Card.Body>
        <Card.Title>{characters.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
        )
    })

    return (
        
        <div>
            <h1>Rick and Morty</h1>
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
    <RickData data ={data}/>
    </div>
  );
}
}

export default BasicExample;