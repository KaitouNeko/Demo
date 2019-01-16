import React from 'react';
import {storiesOf} from '@storybook/react';
import IntXin from '../components/Form/Input/int_xin/IntXin.js';

const arrData = [
    {
        inputType: 'text',
        className: 'input',
        placeholder: '請輸入文字',
        inputValue: 'text here',
    },
    {
        inputType: 'text',
        className: 'input',
        placeholder: '請輸入文字',
    },
    {
        inputType: 'radio',
        className: 'input',
        placeholder: '請輸入文字',
        inputValue: '12312312312',
    },
    {
        inputType: 'select',
        className: 'select',
        placeholder: '請輸入文字',
        inputValue: '12312312312',
        selectionData: [
            {text: '1', value: 1},
            {text: '2', value: 2},
            {text: '3', value: 3},
            {text: '4', value: 4},
            {text: '5', value: 5},
        ],
    },
    {
        inputType: 'radio',
        className: 'radio',
        name: 'gender',
        selectionData: [
            {text: '男', value: 'M'},
            {text: '女', value: 'F'},
        ],
    },
    {
        inputType: 'checkbox',
        className: 'input',
        placeholder: '請輸入文字',
        inputValue: '12312312312',
    },
];

const renderComponent = (arrData) =>{
    const arr = [];
    arrData && arrData.map((item)=>{
        arr.push(
            <div style={Object.assign({}, {margin: '10px'})}>
                <IntXin {...item}/>
            </div>
        );
    });
    return arr;
};
storiesOf('Input', module).add('int_xin', () => (
    renderComponent(arrData)
));
