import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept()
}

const App = (props) => {
    return (
        <div>hello react world</div>
    )
}

var rootElement = document.getElementById('root')

ReactDOM.render(
    <App />,
    rootElement
)