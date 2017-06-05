import React,{Component} from 'react';
import ReactSwipe from 'react-swipe'; //轮播图插件
import {Link} from  'react-router-dom';
import './index.less'
export default class Slider extends Component{
    constructor(){
        super();
            this.state={
            index:0
            }
    }
    render(){
        let opts={
        continuous: false,
        callback:(index)=>{
            this.setState({
                index
            })
        }
        };

        return (
            <div >
                <ReactSwipe className="carousel" swipeOptions={opts}>
                        {
                            this.props.images.map((item,index)=>(
                                <div key={index}>
                                    <img src={item.src}/>
                                </div>
                            ))
                        }
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index===0?"active":""}></li>
                    <li className={this.state.index===1?"active":""}></li>
                    <li className={this.state.index===2?"active":""}></li>
                </ul>
            </div>
        )
    }
}

