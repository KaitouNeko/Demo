import React, { Component } from 'react';
import './css.scss';
import PropTypes from 'prop-types';
const ClpXin = (
    WrappedComponent,
    state,
    type,
    className,
    inputClassName,
    labelClassName
) => class ClpXin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...state,
        };
    }
    render() {
        return (
            <div className={`clp_xin ${className}`}> {
                Object.values(this.state).map((ele, idx) => (
                    <div className="tab"
                        key={idx} >
                        <input id={`${type}tab${idx}`}
                            name={'tabs'}
                            type={type}
                            className={`int_xin ${inputClassName}`} />
                        <label htmlFor={`${type}tab${idx}`}
                            title={ele.title}
                            className={`${labelClassName}`}>{ele.title}
                        </label>
                        <div className="tab-content" >
                            <WrappedComponent {...ele} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
};
ClpXin.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    labelClassName: PropTypes.string,
};

ClpXin.defaultProps = {
    type: 'checkbox',
    className: '',
    inputClassName: '',
    labelClassName: '',
};


export default ClpXin;
