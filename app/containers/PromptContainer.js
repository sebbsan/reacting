var React = require('React'),
  Prompt = require('../components/Prompt');


var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    };
  },
  handleUpdateUser: function (event) {
    this.setState({
      username: event.target.value
    });
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      // go to battle
      console.log(this.context);
      this.context.router.push({
        pathName: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })

    } else {
      console.log(this.context);
      this.context.router.push('/playerTwo/' + this.context.username);
    }
  },
  render: function () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}/>

    )

  }
});

module.exports = PromptContainer;