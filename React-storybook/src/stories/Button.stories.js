import React from 'react';
import { storiesOf } from '@storybook/react';
import BtXin from '../components/Button/bt_xin/BtXin.js';


storiesOf('Button', module).add('bt_xin', () => (
    <div>
        <h3>Class:bd_red</h3>
        <BtXin text='加入購物車'
            type="button"
            link=''
            className='bd_red' />
        <h3>Class:bd_gray</h3>
        <BtXin text='一般按鈕'
            type="button"
            link=''
            className='bd_gray' />
        <h3>Class:tiny</h3>
        <BtXin text='冰島'
            type="button"
            link=''
            className='tiny' />
        <h3>Class:bd_none</h3>
        <BtXin text='一般按鈕'
            type="button"
            link=''
            className='bd_none' />
    </div>
));
