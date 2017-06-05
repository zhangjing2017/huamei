import React,{Component} from 'react';
import {getFace} from '../../../fetch/home';
import ListComponent from '../../../components/ListComponent/index';
import {Link} from 'react-router-dom';
//import LoadMore from "../../../components/LoadMore/index";
import './face.less';
export default class Face extends Component{
    constructor(){
        super();
        this.state={
            hasMore:true,  //是否有更多
            data:[],
            page:0,    //页码
            isLoading:true  //是否正在加载
        }
    }
    render(){
        return (
            <div>
                {/*将数据传递给ListComponent组件，让其展示*/}
                <div className="face">
                    <h1>面部</h1>
                    {this.state.data.length?
                        <ListComponent data={this.state.data}/>
                        :<div>正在加载</div>
                    }
                    <Link to={'/list'}>
                    <span>查看更多</span>
                    </Link>
                    {/*<LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>*/}
                </div>

            </div>
        )
    }
    componentDidMount(){  //页码一加载的时候
        this.processData(getFace(this.props.cityName,0));//0 代表页码的索引，默认第一页

    }
    //需要在当前写一个加载更多的函数，传递给loadMore，当点击按钮，触发我们传递函数
    loadMore(){
        this.setState({
            page:this.state.page+1,
            isLoading:true  //每次加载更多时，状态都应该为正在加载
        },()=>{  //这个函数可以获取到最新的页面状态
            this.processData(getFace(this.props.cityName,this.state.page));
        })
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
