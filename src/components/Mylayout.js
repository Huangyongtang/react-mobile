import React from 'react';
import '../style/iconfont.css'

// 引入ant插件
import { TabBar } from 'antd-mobile';
import { className } from 'postcss-selector-parser';
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
            selected={this.state.selectedTab === 'blueTab'}
            
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            1
          </TabBar.Item>
          <TabBar.Item
            icon={<span className='iconfont icon-gouwuche' />}
            selectedIcon={<span className='iconfont icon-gouwuche' />}
            title="Cars"
            key="Cars"
            badge={'1'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            2
          </TabBar.Item>
          <TabBar.Item 
            icon={<span className='iconfont icon-weibiaoti2fuzhi12' />}
            selectedIcon={<span className='iconfont icon-weibiaoti2fuzhi12' />}
            title="Mine"
            key="Mine"
            
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
           3
          </TabBar.Item>
         
        </TabBar>
      </div>
    );
  }
}

// ReactDOM.render(<TabBarExample />, mountNode);


export default TabBarExample;
