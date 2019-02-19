import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css.scss';

class CdXmcc extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        description: PropTypes.string,
        className: PropTypes.string,
        subComponet: PropTypes.func,
    };
    static defaultProps = {
        description: 'description',
        className: '',
    };
    render() {
        const { description, className } = this.props;
        return (
            <div className={`cd_xmcc ${className}`}>
                <p>{description}</p>
                {this.props.subComponet && this.props.subComponet(this.state)}
            </div>
        );
    }
}

export default CdXmcc;
