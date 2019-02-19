import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DemoPgXin from './stories/Pagination.stories';
class Preview extends Component {
    render() {
        return (
            <DemoPgXin />
        );
    }
}

ReactDOM.render(<Preview />, document.getElementById('root'));
