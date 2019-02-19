import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css.scss';

class ThXin extends Component {
    static propTypes = {
        text: PropTypes.string,
        className: PropTypes.string,
        link: PropTypes.string,
        target: PropTypes.string,
        onClick: PropTypes.func,
    };
    static defaultProps = {
        text: '',
        className: '',
        link: '#',
        target: '_blank',
    };
    handleOnClick() {
        const { onClick } = this.props;
        onClick && onClick();
    }
    render() {
        const { text, className } = this.props;
        return (
            <span
                className={`th_xin ${className}`}
            >
                {text}
            </span>
        );
    }
}

export default ThXin;
