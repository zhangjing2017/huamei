import React,{Component} from 'react';
import {getNav} from '../../../fetch/home';
import './nav.less';
export default class Nav extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        return (
            <div className="nav">
                <ul>
                        {this.state.data.length?this.state.data.map((item,index)=>(
                            <li key={index}>
                                <img src={item.img}/>
                                <p>{item.title}</p>
                            </li>
                        )) :<div>正在加载</div>}
                </ul>

            </div>
        )
    }
    componentDidMount(){  //页码一加载的时候
        this.processData(getNav(this.props.cityName,0));//0 代表页码的索引，默认第一页

    }

    //处理成功后的逻辑
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }
}
