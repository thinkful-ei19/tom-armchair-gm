import React from 'react';
import PropTypes from 'prop-types';

import AvailablePlayers from './AvailablePlayers'
import { connect } from 'react-redux';
import NFLTable from './NFLTable';

export default class BestAvailablePlayersByPosition extends React.Component {
  render() {
    const fields = ['Tier', 'Name', 'Bye'];

    return (
      <div className='BestPosition'>
        <h1 className='PositionTitle'>Best Available By Position</h1> 

        <div className='column2'>
          <span>Runningbacks</span>
          <AvailablePlayers
            fields={fields}
            players={this.props.players}
            draft={(p) => this.props.draft(p)}
            size={15}
            Pos='RB'
          />
        </div>

        <div className='column2'>
          <span>Wide Receivers</span>
          <AvailablePlayers
            fields={fields}
            players={this.props.players}
            draft={(p) => this.props.draft(p)}
            size={15}
            Pos='WR'
          />
        </div>

        <div className='column3'>
          <span>Quarterbacks</span>
          <AvailablePlayers
            fields={fields}
            players={this.props.players}
            draft={(p) => this.props.draft(p)}
            size={15}
            Pos='QB'
          />
        </div>

        <div className='column3'>
          <span>Tightends</span>
          <AvailablePlayers
            fields={fields}
            players={this.props.players}
            draft={(p) => this.props.draft(p)}
            size={15}
            Pos='TE'
          />
        </div>
      </div>
    )
  }
}


BestAvailablePlayersByPosition.propTypes = {
  draft: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
};

connect()(BestAvailablePlayersByPosition);
