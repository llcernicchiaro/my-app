import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PlayersInput() {
    let counter = 0;
    return (
        <Container className="PlayersInput">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <label>Digite o nome do Jogador</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">{counter}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Nome do Jogador"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default PlayersInput;
