import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BtXin from '../../Button/bt_xin/BtXin';
import './css.scss';

class LbxXin extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        toggleBox: PropTypes.func,
        className: PropTypes.string,
        component: PropTypes.object,
    };
    static defaultProps = {
        isOpen: false,
    };

    render() {
        const { className, isOpen, toggleBox, component } = this.props;
        const style = cx('lbx_xin', className);
        const showBox = cx({ 'showbox': isOpen });
        return (
            <div className={style}>
                <div className={`lightbox ${showBox}`}
                    onClick={toggleBox}
                >
                    <div>
                        <BtXin className="btnClose"
                            onClick={toggleBox}
                            text='x'
                        />
                        <div>{component}</div>
                    </div>
                </div>
            </div>

        );
    }
}
export default LbxXin;
