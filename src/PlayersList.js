import React from 'react';
import PlayerItem from './PlayerItem';
import Players from './Players';

// Bootstrap React
import Table from 'react-bootstrap/Table';

class PlayerList extends React.Component {
    constructor() {
        super();
        this.state = {
            players: Players
        }
    }

    render() {
        const playersComponent = this.state.players.map(player => <PlayerItem key={player.id} player={player} />);
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Posição</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {playersComponent}
                </tbody>
            </Table>
        );
    }
}

export default PlayerList;
