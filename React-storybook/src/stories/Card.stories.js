import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import CdXmcc from '../components/Card/cd_xmcc/CdXmcc';
import BtXin from '../components/Button/bt_xin/BtXin';
import PropTypes from 'prop-types';

const arr =
{
    title: '收到太多電子報',
    description: `歡迎您聯絡我們，讓我們為您取消欲退訂之電子報。
    溫馨提醒您，移除帳戶將影響您的訂單/文章管理/旅遊金權益。`,
    className: 'half',
};
const subarr =
{
    subComponet: [{
        text: '聯絡我們',
        className: 'bd_gray',
    },
    {
        text: '移除我們的帳戶',
        className: 'bd_gray',
    },
    ],
};
class SubComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static propTypes = {
        subComponet: PropTypes.array,
        onClick: PropTypes.func,
    };
    static defaultProps = {
        subComponet: [],
    };
    onClick=(e)=> {
        this.props.onClick && this.props.onClick(e);
        console.log('onClick');
    }
    render() {
        const { subComponet } = this.props;
        return (
            <div className="btn">
                {subComponet.map((item, idx) => (
                    <BtXin
                        {...item}
                        onClick={(e) => this.onClick(e)}
                        key={`${item.text} ${idx}`}
                    />
                ))}
            </div>
        );
    }
}

class DemoCdXmccComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static propTypes = {
        CdXmcc: PropTypes.func,
        SubComponet: PropTypes.func,
    };
    static defaultProps = {
    };
    render() {
        return (
            <div>
                <CdXmcc {...arr}
                    subComponet={(props)=><SubComponet parentState={props}
                        {...subarr} />} />
            </div>
        );
    }
}
storiesOf('Card', module).add('cd_xmcc', () => (
    <DemoCdXmccComponet />
));

