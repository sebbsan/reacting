/**
 * Created by sebastianweikart on 08/03/2016.
 */

var React = require('react')
var ReactDOM = require('react-dom')
var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
      Hello World!
    </div>
    )
  }
});
ReactDOM.render(<HelloWorld />, document.getElementById('app'));
