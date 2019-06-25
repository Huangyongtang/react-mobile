import React from 'react';
import '../style/iconfont.css'
import { connect } from "react-redux";
// 引入ant插件
import { TabBar } from 'antd-mobile';
// import { className } from 'postcss-selector-parser';
class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
      
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    // console.log(this.props);
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          // hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Home"
            key="Home"
            icon={<span className='iconfont icon-home' />}
            selectedIcon={ <span className='iconfont icon-home' />}
            selected={this.props.match.url === '/'}
            
            onPress={() => {
              this.props.history.push('/')
            }}
            data-seed="logId"
          >
              {/* 内容1 */}
              
          {this.props.match.url==='/'?this.props.children:null}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className='iconfont icon-gouwuche' />}
            selectedIcon={<span className='iconfont icon-gouwuche' />}
            title="Cars"
            key="Cars"
            badge={this.props.cartLength}
            selected={this.props.match.url === '/cart'}
            onPress={() => {
                this.props.history.push('/cart')
            }}
            data-seed="logId1"
          >
              {/* 内容2 */}
              {this.props.match.url==='/cart'?this.props.children:null}
          </TabBar.Item>
          <TabBar.Item 
            icon={<span className='iconfont icon-weibiaoti2fuzhi12' />}
            selectedIcon={<span className='iconfont icon-weibiaoti2fuzhi12' />}
            title="Mine"
            key="Mine"
            
            selected={this.props.match.url === '/mine'}
            onPress={() => {
                this.props.history.push('/mine')
            }}
          >
              {/* 内容3 */}
              { this.props.match.url==='/mine'?this.props.children:null}
          </TabBar.Item>
         
        </TabBar>
      </div>
    );
  }
}

// ReactDOM.render(<TabBarExample />, mountNode);

const mapStateToProps = (state) => {
  // 种类的数量也等于购物车的长度 
  return {
   cartLength:state.cartReducer.cartList.length
  }
}


export default connect(mapStateToProps, null)(TabBarExample);

