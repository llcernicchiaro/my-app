import React, { Component } from 'react';
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PlayerItem(props) {

    return (
        <tr>
            <td>
                {props.player.id}
            </td>
            <td>
                {props.player.name}
            </td>
            <td>
                {props.player.age}
            </td>
            <td>
                {props.player.position}
            </td>
            <td>
                {/* <FontAwesomeIcon icon="check-circle"/>
                <FontAwesomeIcon icon="times-circle"/> */}
                <ButtonGroup aria-label="Basic example">
                    <Button variant="success">
                        <FontAwesomeIcon icon="pen" />
                    </Button>
                    <Button variant="secondary">
                        <FontAwesomeIcon icon="trash-alt" />
                    </Button>
                </ButtonGroup>


            </td>
        </tr>
    );
}

export default PlayerItem;
