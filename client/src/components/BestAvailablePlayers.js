import React from 'react';
import PropTypes from 'prop-types';

import AvailablePlayers from './AvailablePlayers'
import { connect } from 'react-redux';

export default class BestAvailablePlayers extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <i></i> Overall Rankings
      </div>

        <div>
        {/*====== Coming soon: Form for switching Game Format i.e ppr , 0.5 custom... */}
          <div>
            <input
              type="text"
              placeholder="Search"
              onChange={this.props.search}
              value={this.props.query}
            />
          </div>
        </div>

        <div>
          <AvailablePlayers
            fields={['Rank', 'Tier', 'Pos', 'Name', 'Bye']}
            players={this.props.players}
            draft={(player) => this.props.draft(player)}
          />
        </div>
      </div>
    )
  }

}


BestAvailablePlayers.propTypes = {
  players: PropTypes.array.isRequired,
  // format: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
};

connect()(BestAvailablePlayers);