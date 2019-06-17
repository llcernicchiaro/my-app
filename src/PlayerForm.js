import React, { Component } from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class PlayerForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            position: ""
        }
        this.HandleChange = this.HandleChange.bind(this)
    }

    HandleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Form className="pt-3">
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nome"
                        name="name"
                        value={this.state.name}
                        onChange={this.HandleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Idade</Form.Label>
                    <Form.Control
                        as="select"
                        name="age"
                        value={this.state.age}
                        onChange={this.HandleChange}
                    >
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Posição</Form.Label>
                    <Form.Control
                        as="select"
                        name="position"
                        value={this.state.position}
                        onChange={this.HandleChange}
                    >
                        <option value="goleiro">goleiro</option>
                        <option value="zagueiro">zagueiro</option>
                        <option value="lateral">lateral</option>
                        <option value="meio-campo">meio-campo</option>
                        <option value="atacante">atacante</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="success" type="submit">
                    Confirmar
                </Button>
            </Form>
        );
    }
}

export default PlayerForm;
