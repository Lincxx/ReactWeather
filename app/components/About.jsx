var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return(
//             <h3>About Component</h3>
//         );
//     }
// });



var About =  (props) => {
    return(
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application built with ReactJS. I have built this for The Complete React Web App Developer Course</p>
            <p>Some of the tools I used:</p>
            <ul>
                <li><a href="https://facebook.github.io/react/">ReactJS</a></li>
                <li><a href="http://openweathermap.org/">Openweathermap</a></li>
                
            </ul>
            <p>Found this project at:</p>
            <ul>
                <li><a href="https://github.com/Lincxx/ReactWeather">GitHub - React Weather App</a></li>
            </ul>
        </div>
    );
};

module.exports = About;