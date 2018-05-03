import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default class NFLTable extends React.Component {
  rows() {
    let players
    if (this.props.players) {
      players = this.props.players.slice()

      if (this.props.size) {
        players = players.slice(0, this.props.size);
      }
    }
    if (!players) {
      return
    }

    return players.map((player, i) => {
      //  console.log(player)
      return (
        <tr key={i} className={i}
          onClick={() => this.onClick(player)}>
          {this.columns(player)}
        </tr>
      )
    });
  }

  onClick(player) {
    if (this.props.onClick) {
      return this.props.onClick(player);
    }
  }

  columns(player) {
    
    return this.props.fields.map((f, i) => {
      if (f === 'Tier') {
        return <td className={i} key={i}>Tier {player[f]}</td>
      } else {
        return <td key={i}>{player[f]}</td>
      }
    });
  }

  render() {
    return (
      <table>
        <tbody className="pointer">{this.rows()}</tbody>
      </table>
    );
  }
}


NFLTable.propTypes = {
  players: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,

  onClick: PropTypes.func,
  size: PropTypes.number,
  disableColor: PropTypes.bool,
};

connect()(NFLTable)
