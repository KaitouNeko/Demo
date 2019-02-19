import React from 'react';
import { storiesOf } from '@storybook/react';
import UaCrop from '../components/Avator/ua_crop/UaCrop';
import ThXin from '../components/Title/th_xin/ThXin.js';

const arr1 = {
    className: '',
    labelText: 'UpLoad',
};

const DemoUaCropComponet = ()=>{
    return (
        <div>
            <ThXin text='Drop and Crop'
                className='md' />
            <UaCrop {...arr1} />
        </div>
    );
};

storiesOf('Avator', module).add('ua_crop', () => (
    <DemoUaCropComponet />
));

