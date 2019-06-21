import React,{Fragment,Component} from 'react';
import Mylayout from './components/Mylayout'
// 引入ant插件
import { TabBar } from 'antd-mobile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <Mylayout></Mylayout>
      </Fragment>
     );
  }
}
 
export default App;


