var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" components={Main}>
      <IndexRoute components={Home}/>
      <Route path="playerOne" header="Player One" components={PromptContainer} />
      <Route path="playerTwo/:playerOne" header="Player Two" components={PromptContainer} />
      <Route path="battle" component={ConfirmBattleContainer}/>
    </Route>
  </Router>

);

module.exports = routes;

