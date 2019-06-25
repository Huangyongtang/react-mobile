import React,{Fragment,Component} from 'react' 
import {getGoods,getGoodsGroup} from '../api'
import { Carousel } from 'antd-mobile';
// 为了让HOME组件获取到props里面的history属性
import {withRouter} from 'react-router-dom'

class Home extends Component {
    state = { 
      // 轮播图
        sliderlist:[],
        imgHeight: 176,
        // 推荐商品
        toplist:[],
        // 首页剩余商品
        goodsGroupList:[]

     }
    // 页面渲染完成后发送请求
    componentDidMount(){
        // console.log(123);
        // 获取推荐商品
       
        getGoods()
        .then((res)=>{
            if (res.status===0){
                this.setState({
                    sliderlist:res.message.sliderlist,
                    toplist:res.message.toplist
                })
            }
        })
        // 获取商品列表
        getGoodsGroup()
          .then((res)=>{
            // console.log(res);
            if (res.status===0){
                this.setState({
                    goodsGroupList:res.message
                })
            }
        })
      }
    
    render() { 
        return ( 
            <Fragment>
              <div className="box"></div>
                {/* 轮播图 开始 */}
                    <Carousel
          autoplay
          infinite
        >
          {this.state.sliderlist.map(val => (
            <a
              key={val.id}
              onClick={()=>this.props.history.push('/GoodsGroups/'+val.id)}
              href="javascript:;"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.img_url}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                // 留下来
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
                {/* 轮播图 结束 */}
                {/* 推荐商品开始 */}
                <div>
                <div className="recommend_title">推荐商品</div>
                <div className="recommend_connent">
                  {this.state.toplist.map((v)=><a href="javascript:;" key={v.id} className='recommend_connent_box' 
                  onClick={()=>this.props.history.push('/GoodsGroups/'+v.id)}>
                   <div className='recommend_connent_pit'> <img src={v.img_url} /></div>
                    <div className='recommend_connent_text'> <p>{v.title}</p></div>
                  </a>)}
                </div>
                  
              <style jsx>{`
                .recommend_title{
                    background-color: #f5f5f9;
                    padding: 10px;
                    color: #666;
                }
                .recommend_connent{
                   
                    .recommend_connent_box{
                        border-bottom: 1px solid #666;
                        display: flex;
                        background-color: #fff;
                        .recommend_connent_pit{
                            flex: 1;
                             /* padding: 20px; */
                             img{}
                        }
                        .recommend_connent_text{
                             flex: 6;
                display: flex;
                align-items: center;
                font-size: 14px;

                overflow: hidden;
                p{
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
                        }
                    }
                    
                }
              `}</style>
                </div>
                {/* 推荐商品结束 */}
                
                {/* 首页剩余部分 */}
                <div className="goods_grops">
                
                {this.state.goodsGroupList.map(v1=>  
                
                <div key={v1.level1cateid} className="goods_grops_item">
                      <div className="goods_grops_item_title">{ v1.catetitle}</div>
                      <div className="goods_grops_item_connent">
                        {v1.datas.map(v2 => 
                        <a href='javascript:;' key={v2.artID} className='goods_item_a' 
                            onClick={()=>this.props.history.push('/GoodsGroups/'+v2.artID)}>
                            <img src={v2.img_url} alt="" className='goods_grops_img'/>
                            <div className='goods_grops_title'>{v2.artTitle}</div>
                            <div className="goods_grops_price"><span className='sell_price'>{v2.sell_price}</span><span className='market_price'>{v2.market_price}</span></div>
                            热卖中<span className='stock_quantity'>{v2.stock_quantity}</span>
                        </a>)}
                      </div>
                     
                  </div>
                  
                  )}
                  <style jsx>
                  {`
                  .goods_grops{
                    .goods_grops_item{
                        .goods_grops_item_title{
                            padding: 10px;
                            background-color: #f5f5f9;
                            font-size: 14px;
                        }
                        .goods_grops_item_connent{
                            display: flex;
                            flex-wrap: wrap;
                            .goods_item_a{
                                width: 50%;
                                padding: 10px;
                                background-color: #fff;
                                border-bottom: 1px solid #666;
                                &:nth-child(odd){
                                  border-right: 1px solid #666;
                                }
                                .goods_grops_img{
                                    // width: 50%;
                                }.goods_grops_title{
                                    font-size: 15px;
                      display: -webkit-box;
                      overflow: hidden;
                      white-space: normal!important;
                      text-overflow: ellipsis;
                      word-wrap: break-word;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                                }
                                .goods_grops_price{
                                    display: flex;
                                    justify-content: space-between;
                                    .sell_price{
                                        color: red;
                                        font-size: 15px;
                                    }
                                    .market_price{
                                        font-size: 13px;
                                        color: #666;
                                        text-decoration: line-through ;
                                    }
                                }
                                .stock_quantity{
                                    font-size: 15px;
                                    color: red;
                                }
                            }
                           
                        }
                    }
                  }
                 `}
                  </style>
                </div>
            </Fragment>
         );
    }
}
 
export default withRouter(Home);

