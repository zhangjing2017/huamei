import React from 'react';
import {render} from 'react-dom';
//App负责选择哪一个页面
import App from './containers/index';
import './assets/index.less';
import {Provider} from 'react-redux';
//导入store
import {configuerStore} from './store';
import List from "./containers/List/index";
let images=[
    {src:require('../app/assets/images/15.png')},
    {src:require('../app/assets/images/16.jpg')},
    {src:require('../app/assets/images/17.jpg')},
    {src:require('../app/assets/images/18.jpg')},
    {src:require('../app/assets/images/23.jpg')},
    {src:require('../app/assets/images/24.jpg')},
    {src:require('../app/assets/images/25.jpg')},
    {src:require('../app/assets/images/26.jpg')},
    {src:require('../app/assets/images/27.jpg')},
    {src:require('../app/assets/images/28.jpg')},
    {src:require('../app/assets/images/29.jpg')},
    {src:require('../app/assets/images/13.png')},
    {src:require('../app/assets/images/10.png')},
    {src:require('../app/assets/images/9.png')},
    {src:require('../app/assets/images/22.png')},
    {src:require('../app/assets/images/1.gif')},
    {src:require('../app/assets/images/30.jpg')},
    {src:require('../app/assets/images/31.jpg')},
    {src:require('../app/assets/images/32.jpg')},
];

let store=configuerStore();//生成store,可以在configuerStore里面传入初始状态
render(
    <Provider store={store}>
    <App images={images}/>
    </Provider>,
    document.querySelector('#root')
)
