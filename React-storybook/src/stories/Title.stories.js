import React from 'react';
import { storiesOf } from '@storybook/react';
import ThXin from '../components/Title/th_xin/ThXin';

storiesOf('Title', module).add('th_xin', () => (
    <div>
        <ThXin text='會員功能選單'
            className='md' />
        <ThXin text='會員頭像設定'
            className='sm red' />
        <ThXin text='個人訂單查詢'
            link='#ticket'
            className='sm' />
        {/* <ThXin text='欣嚴選訂單查詢'
            className='xs' /> */}
    </div>
));

