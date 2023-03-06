import { useState } from "react";
import {
  Card,
  Col,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import ReactCardFlip from "react-card-flip";

const Flip = ({characters}) => {
  const [flip, setFlip] = useState(new Set());

  //tooltip
  const renderTooltip = (props) => (
    <Tooltip {...props}>Click for Stats</Tooltip>
  );

  console.log(characters);

  return (
    <Col key={characters.image}>
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
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <div className="react-card">
          {/* overlay */}
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            {/*card  */}
            <Card
              id="enlarge"
              style={{ width: "18rem" }}
              onClick={() => setFlip(!flip)}
              bg="warning"
            >
              <Card.Header>
                <h2>{characters.name}</h2>{" "}
              </Card.Header>
              <Card.Img variant="top" src={characters.image} />
              <Card.Body>
                <Card.Title>{characters.name}</Card.Title>
                <Card.Text>
                  Gender: {characters.gender} <br />
                  Species: {characters.species} <br />
                  Status: {characters.status}
                </Card.Text>
              </Card.Body>
            </Card>
          </OverlayTrigger>
        </div>
        {/* reverse card size */}
        <div>
          <div class="react-card">
            <Card
              id="enlarge"
              style={{ width: "18rem" }}
              onClick={() => setFlip(!flip)}
              bg="info"
            >
              <Card.Header>
                <h2>{characters.name}</h2>{" "}
              </Card.Header>
              <Card.Img variant="top" src={characters.image} />
              <Card.Title>Stats - {characters.name}</Card.Title>
              Episodes {characters.episode.length}
              <br />
              Location {characters.location.name}
              <br />
              Origin {characters.origin.name}
            </Card>
          </div>
        </div>
      </ReactCardFlip>
    </Col>
  );
};

export default Flip