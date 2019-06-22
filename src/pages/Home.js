import React,{Fragment,Component} from 'react' 
import {getGoods} from '../api'
import { Carousel } from 'antd-mobile';


class Home extends Component {
    state = { 
        sliderlist:[],
        imgHeight: 176,
     }
    // 页面渲染完成后发送请求
    componentDidMount(){
        // console.log(123);
        getGoods()
        .then((res)=>{
            console.log(res);
            if (res.status===0){
                this.setState({
                    sliderlist:res.message.sliderlist
                })
            }
        })
    }

    
    render() { 
        return ( 
            <Fragment>
               {/* 轮播图 开始 */}
        <Carousel
          autoplay
          infinite
        >
          {this.state.sliderlist.map(val => (
            <a
              key={val.id}
              href="#"
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
            </Fragment>
         );
    }
}
 
export default Home;

