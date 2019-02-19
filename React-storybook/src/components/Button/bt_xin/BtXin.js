import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../scss/core.scss';
import './css.scss';

class BtXin extends Component {
    static propTypes = {
        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
        type: PropTypes.string,
        onClick: PropTypes.func,
        link: PropTypes.string,
        target: PropTypes.string,
        className: PropTypes.string,
    };
    static defaultProps = {
        type: '',
        text: '',
        className: '',
    };
    handleOnClick() {
        const { onClick } = this.props;
        onClick && onClick();
    }
    render() {
        const {
            type,
            text,
            link,
            target,
            className,
        } = this.props;
        {
            switch (type) {
                case 'linkbutton':
                    return (
                        <a className={`bt_xin ${className}`}
                            href={link}
                            rel="noopener noreferrer"
                            target={target}>{text}
                        </a>
                    );
                    break;
                default:
                    return (
                        <div className={`bt_xin ${className}`}
                            onClick={() => this.handleOnClick()}>{text}</div>
                    );
            }
        }
    }
}

export default BtXin;
