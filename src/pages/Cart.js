import React, { Fragment, Component } from 'react'
// 引入复选框
import { List, Checkbox, Flex, SwipeAction, NavBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";


const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
class Cart extends Component {

    state = {}
    onChange = (val) => {
        console.log(val);
    }
    render() {

        return (
            <Fragment>
                {/* 头部-购物车 */}
                <div>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}
                    >购物车</NavBar>
                </div>
                <div className="cart_content">
                {this.props.cartList.map(v =>
                    <div className='goods_connent'>
                        <SwipeAction
                            style={{ backgroundColor: 'gray' }}
                            autoClose
                            right={[
                                {
                                    text: '取消',
                                    onPress: () => console.log('cancel'),
                                    style: { backgroundColor: '#ddd', color: 'white' },
                                },
                                {
                                    text: '删除',
                                    onPress: () => console.log('delete'),
                                    style: { backgroundColor: '#F4333C', color: 'white' },
                                },
                            ]}
                            onOpen={() => console.log('global open')}
                            onClose={() => console.log('global close')}
                        >{/* 头部-复选框 */}
                            <div className="cart_inner">
                                <div className='goods_chk_wrap'>
                                    <CheckboxItem key={v.value} onChange={() => this.onChange(v.value)}>

                                    </CheckboxItem>
                                </div>
                                {/* 商品图片 */}
                                <div className="goods_img_wrap">
                                    <img src={v.img_url} alt="" />
                                </div>
                                {/* 商品名称和价格 */}
                                <div className="goods_name_wrap">
                                    <div className="goods_title">{v.goods_name}</div>
                                    <div className="goods_price">{v.price}</div>
                                </div>
                                {/* 商品数量 */}
                                <div className="goods_num_wrap">
                                    <span className="iconfont icon-minus btn_substr "></span>
                                    <span className="goods_num">{v.num}</span>
                                    <span className="iconfont icon-plus btn_add "></span>
                                </div>
                            </div>
                        </SwipeAction>

                    </div>
                )
                }
                <style jsx>{`
  .cart_content{
    .cart_item{
      .cart_inner{
        display: flex;
        padding: 5px;
        .goods_chk_wrap{
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .goods_img_wrap{
          flex: 3;
          padding: 5px;
        }
        .goods_name_wrap{
          flex: 3;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .goods_title{
            font-size: 16px;
          }
          .goods_price{
            font-size: 17px;
            color: orangered;
            font-weight: 600;
          }
        }
        .goods_num_wrap{
          flex: 3;
          font-size: 20px;
          display: flex;
          align-items: center;
          .btn_substr{
            color: #666;
            font-size: 20px;
          }
          .btn_add{
            font-size: 20px;
            color: #666;
          }
          .goods_num{
            padding: 0 3px;
          }
        }
      }
    }
  }
  `}</style>
  </div>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    // 种类的数量也等于购物车的长度 
    return {
        cartList: state.cartReducer.cartList
    }
}


export default connect(mapStateToProps, null)(withRouter(Cart));
