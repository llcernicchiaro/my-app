import React, { Component } from 'react';
import Header from './Header';
import PlayerForm from './PlayerForm';
import PlayersList from './PlayersList';

// Bootstrap React
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFutbol, faCheckCircle, faTimesCircle, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

//CSS
import './App.css';

library.add(faFutbol, faCheckCircle, faTimesCircle, faPen, faTrashAlt);

class App extends Component {
  constructor() {
    super()
    this.state = {
      showForm: false
    }
    this.changeFormState = this.changeFormState.bind(this);
  }

  changeFormState() {
    this.setState(prevState => {
      return {
        showForm: !prevState.showForm
      }
    })
  }

  render() {
    let buttonText = this.state.showForm ? "Cancelar" : "Adicione um Jogador"

    return (
      <div className="App">
        <Card className="main">
          <Card.Header className="header">
            <Header />
          </Card.Header>
          <Card.Body className="PrincipalContent">
            <Container>
              <Row>
                <Col>
                  <Button variant="success" onClick={this.changeFormState}>{buttonText}</Button>
                  {this.state.showForm ?
                    <PlayerForm /> :
                    ""
                  }
                </Col>
                <Col xs={8}>
                  <PlayersList />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </div>
    );
  }
}

export default App;
