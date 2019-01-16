import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './css.scss';

class IntXin extends Component {
    static propTypes = {
        inputType: PropTypes.string,
        className: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        onKeyUp: PropTypes.func,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        inputValue: PropTypes.func,
        selectionData: PropTypes.array,
    };
    static defaultProps = {
        inputType: 'text',
        placeholder: '',
    };
    handleBlur() {
        const {onBlur} = this.props;
        onBlur && onBlur();
    }
    handleChange() {
        const {onChange} = this.props;
        onChange && onChange();
    }
    handleFocus() {
        const {onFocus} = this.props;
        onFocus && onFocus();
    }
    handleKeyUp() {
        const {onKeyUp} = this.props;
        onKeyUp && onKeyUp();
    }
    createSelectOptions() {
        const {selectionData, className} = this.props;
        const arr = [];
        selectionData && this.props.selectionData.map((item)=>{
            arr.push(
                <option
                    className={className}
                    text={item.text}
                    value={item.value}
                >
                    {item.text}
                </option>
            );
        });
        return arr;
    }

    renderSelect() {
        const {className} = this.props;
        const style = cx('int_xin', 'int-control', className);
        return (
            <label className={style}>
                <select>
                    {this.createSelectOptions()}
                </select>
            </label>
        );
    }
    renderRadio() {
        const {selectionData, className, name} = this.props;
        const arr = [];
        const style = cx('int_xin', 'int-control', className);
        selectionData && this.props.selectionData.map((item)=>{
            arr.push(
                <label className={style}>
                    <input
                        name={name}
                        type='radio'
                        value={item.value}
                    />
                    <span className="indicator"></span>
                    <span className="control-text">{item.text}</span>
                </label>
            );
        });
        return arr;
    }
    render() {
        const {inputType, placeholder, inputValue, className} = this.props;
        const style = cx('int_xin', className);
        switch (inputType) {
            case 'select':
                return (
                    <React.Fragment>
                        {this.renderSelect()}
                    </React.Fragment>
                );
            case 'radio':
                return (
                    <React.Fragment>
                        {this.renderRadio()}
                    </React.Fragment>
                );

            default:
                return (
                    <input
                        className={style}
                        type={inputType}
                        placeholder={placeholder}
                        value={inputValue}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onKeyUp={this.handleKeyUp}
                    />);
        }
    }
}

export default IntXin;
