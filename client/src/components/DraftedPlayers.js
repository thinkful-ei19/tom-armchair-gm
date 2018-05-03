import React from 'react';
import PropTypes from 'prop-types';
import NFLTable from './NFLTable'
import { connect } from 'react-redux';


export default class DraftedPlayers extends React.Component {
  render() {
    let currentDraft = 0;
    console.log(this.props)
    let players 
    if (this.props.players) {
     let players = this.props.players.slice().filter(players => this.props.players.drafted);
      players = players.sort((a, b) => b.drafted - a.drafted);
    }
    console.log(this.props.players);
   
    return (
      <div className='Draft Results'>
        <div>
          Draft History
      </div>

        <div>
          <div>
            <button
              onClick={() => this.props.undo()}>
              <i></i> Undo
          </button>

            <button
              onClick={() => this.props.reset()}>
              Reset
          </button>
            {/* <button
              onClick={() => this.save(this.currentDraft)}>
              Save Team & End Draft
          </button> */}
          </div>
        </div>
        <NFLTable
          fields={['Name', 'Pos', 'Bye']}
          players={this.props.players}
          disableColor={true}
        />
      </div>
    );
  }
}


DraftedPlayers.propTypes = {
  currentDraft: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
};


connect()(DraftedPlayers);

