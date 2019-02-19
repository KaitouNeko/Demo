import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import LbxXin from '../components/Lightbox/lbx_xin/LbxXin.js';
import BtXin from '../components/Button/bt_xin/BtXin.js';
import UaCrop from '../components/Avator/ua_crop/UaCrop.js';

class DemoLbxXin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    toggleBox = () => {
        this.setState((prevState) => ({
            isOpen: !this.state.isOpen,
        }));
    }
    render() {
        return (
            <div>
                <BtXin text="Button"
                    link="javascript:;"
                    className="bd_red"
                    onClick={this.toggleBox} />
                <LbxXin
                    isOpen={this.state.isOpen}
                    toggleBox={this.toggleBox}
                    component={
                        <BtXin
                            text="確定"
                            className="bd_red"
                            onClick={() => {
                                alert('Clicked!');
                            }}
                        />
                    }
                />
            </div>
        );
    }
}

class DemoLbxXinCrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    toggleBox = () => {
        this.setState((prevState) => ({
            isOpen: !this.state.isOpen,
        }));
    }
    render() {
        return (
            <div>
                <BtXin text="Crop Button"
                    link="javascript:;"
                    className="bd_red"
                    onClick={this.toggleBox} />
                <LbxXin
                    isOpen={this.state.isOpen}
                    toggleBox={this.toggleBox}
                    component={
                        <UaCrop />
                    }
                />
            </div>
        );
    }
}

storiesOf('Lightbox', module).add('LbxXin', () => (
    <div>
        <DemoLbxXin />
        <DemoLbxXinCrop />
    </div>
));
