var React = require('React'),
  ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.class({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  render: function() {
    return(
      <ConfirmBattle/>

    );


  }

});


module.exports = ConfirmBattleContainer;