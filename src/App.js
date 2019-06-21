import React,{Fragment,Component} from 'react';
import Mylayout from './components/Mylayout'
// 引入ant插件
import { TabBar } from 'antd-mobile';
// 引入路由
import {HashRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Mine from './pages/Mine'
import Cart from './pages/Cart'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <Router>
          <Route path='/' exact render={(props)=><Mylayout {...props}> <Home/> </Mylayout>}></Route>
          <Route path='/mine' exact render={(props)=><Mylayout {...props}> <Mine/> </Mylayout>}></Route>
          <Route path='/cart' exact render={(props)=><Mylayout {...props}> <Cart/> </Mylayout>}></Route>
        </Router>
      </Fragment>
     );
  }
}
 
export default App;


