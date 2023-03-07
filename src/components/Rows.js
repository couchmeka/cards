import { Component } from "react";
import { Container, Row, Card, Tab, Tabs } from "react-bootstrap";
import Flip from "./Flip";
import Collapsed from "./Collapse";

//rotation animation

//page 1
const RickData = (props) => {
  return (
    <div>
      <Container>
        <Row>
          {props.data.map((characters) => {
            return <Flip characters={characters} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

//page 2
const MortyData = (props) => {
  // set state for collapsable stats

  return (
    <div>
      <Container>
        <Row>
          {props.page.map((characters) => {
            return <Collapsed characters={characters} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

//component rendering
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
