var React = require('react');

var WeatherMessage = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0){
            this.refs.location.value = '';
            //this is a parent function in the Weather.jsx
            this.props.onSearch(location);
        }
    },
    render: function(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" placeholder="Enter city name"/>
                    <button className="hollow button expanded">Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherMessage;