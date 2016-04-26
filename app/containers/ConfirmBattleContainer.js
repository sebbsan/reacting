var React = require('React'),
  ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    console.log('getInitialState');
    return {
      isLoading: true,
      playersInfo: []
    }
  },

  componentWillMount: function () {
    console.log('componentWillMount');
  },

  componentDidMount: function () {
    var query = this.props.location.query;
    console.log('got players', query);
    // fetch info from github
    console.log('componentDidMount');
  },

  componentWillReceiveProps: function () {
    console.log('componentWillReceiveProps');
  },

  componentWillUnmount: function () {
    console.log('componentWillUnmount');
  },

  render: function() {
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}/>

    );


  }

});


module.exports = ConfirmBattleContainer;