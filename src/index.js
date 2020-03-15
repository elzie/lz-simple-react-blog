import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept()
}

//React component
const App = (props) => {
    return (
        <div>
            <h1>Welcome {props.name}</h1>
            This is the way
        </div>
    )
}

var rootElement = document.getElementById('root')

ReactDOM.render(
    <App name={'elzie'} />,
    rootElement
)