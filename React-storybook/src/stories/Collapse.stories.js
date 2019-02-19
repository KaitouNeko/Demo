import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import ClpXin from '../components/Collapse/clp_xin/ClpXin';
import CdXmcc from '../components/Card/cd_xmcc/CdXmcc';
import BtXin from '../components/Button/bt_xin/BtXin';
import ThXin from '../components/Title/th_xin/ThXin';
import PropTypes from 'prop-types';

const arr = [
    {
        title: '收到太多電子報',
        description: `歡迎您聯絡我們，讓我們為您取消欲退訂之電子報。
        溫馨提醒您，移除帳戶將影響您的訂單/文章管理/旅遊金權益。`,
        className: 'half',
        subComponet: [{
            text: '聯絡我們',
            className: 'bd_gray',
        },
        {
            text: '移除我們的帳戶',
            className: 'bd_red',
        },
        ],
    },
    {
        title: '我已經有另一個帳戶',
        description: '請留意，移除帳戶將影響您的訂單/文章管理/旅遊金權益，您真的要移除帳戶嗎？',
        className: 'inline',
        subComponet: [{
            text: '聯絡我們',
            className: 'bd_gray',
        },
        ],
    },
    {
        title: '我想使用其他 Email 登入帳戶',
        description: '使用更換電子信箱，您可隨時更新此項資料。',
        className: 'half',
        subComponet: [{
            text: '聯絡我們',
            className: 'bd_gray',
        },
        {
            text: '移除我們的帳戶',
            className: 'bd_red',
        },
        ],
    },
    {
        title: '其他',
        description: `移除帳戶（請留意，移除帳戶將影響您的 訂單/文章管理/旅遊金 權益歸零，您真的要移除帳戶嗎？），
        很遺憾無法繼續為您服務，請提供您的保貴意見，以便我們改善服務。`,
        className: 'inline',
        subComponet: [{
            text: '聯絡我們',
            className: 'bd_gray',
        },
        ],
    },
];
const arr1 = [{
    title: '個人訂單查詢',
    description: '歡迎您聯絡我們，讓我們為您取消欲退訂之電子報。溫馨提醒您，移除帳戶將影響您的訂單/文章管理/旅遊金權益。',
    className: 'inline',
    subComponet: [{
        text: '移除我們的帳戶',
        className: 'bd_gray',
    },
    ],
},
{
    title: '文章管理',
    description: '請留意，移除帳戶將影響您的訂單/文章管理/旅遊金權益，您真的要移除帳戶嗎？',
    className: 'half',
    subComponet: [{
        text: '聯絡我們',
        className: 'bd_gray',
    },
    {
        text: '移除我們的帳戶',
        className: 'bd_red',
    },
    ],
},
{
    title: '旅遊金',
    description: '使用更換電子信箱，您可隨時更新此項資料。',
    className: 'half',
    subComponet: [{
        text: '聯絡我們',
        className: 'bd_gray',
    },
    {
        text: '移除我們的帳戶',
        className: 'bd_red',
    },
    ],
},
{
    title: '其他',
    description: `移除帳戶（請留意，移除帳戶將影響您的 訂單/文章管理/旅遊金 權益歸零，您真的要移除帳戶嗎？），
    很遺憾無法繼續為您服務，請提供您的保貴意見，以便我們改善服務。`,
    className: 'half',
    subComponet: [{
        text: '聯絡我們',
        className: 'bd_gray',
    },
    {
        text: '移除我們的帳戶',
        className: 'bd_red',
    },
    ],
},
];

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
                <CdXmcc {...this.props}
                    subComponet={(props)=><SubComponet parentState={props}
                        {...this.props} />} />
            </div>
        );
    }
}

const FeedList = new ClpXin(DemoCdXmccComponet, arr, 'radio', 'default show', '', 'white');
const FeedList1 = new ClpXin(
    DemoCdXmccComponet,
    arr1,
    'checkbox',
    'default titlewhite',
    '',
    'white');

class DemoClpXinComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static propTypes = {
    };
    static defaultProps = {
    };
    render() {
        return (
            <div>
                <ThXin text='RADIO TYPE'
                    className='md' />
                <h3>請問您欲移除帳戶的原因？</h3>
                <FeedList />
                <ThXin text='CHECKBOX TYP'
                    className='md' />
                <FeedList1 />
            </div>
        );
    }
}
storiesOf('Collapse', module).add('clp_xin', () => (
    <DemoClpXinComponet />
));

