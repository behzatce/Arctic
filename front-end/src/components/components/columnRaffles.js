import React, { Component } from "react";
import Clock from "./clock";
import { createGlobalStyle } from 'styled-components';
import { getRaffleAllProjects } from '../../scripts/controller/raffle'
const GlobalStyles = createGlobalStyle`
    .de_countdown{
        position: relative;
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
        top: 0;
        left: 0;
        margin-bottom: 20px;
        div{
            display: flex;
            justify-content: center;
        }
        .Clock-days, .Clock-hours, .Clock-minutes{
            margin-right: 10px;
        }
    }
    .cardCenter{
        margin:auto
    }
`;


export default class Responsive extends Component {

    dummyData = [{
        deadline:"December, 30, 2022",
        nftLink: "/itemDetail",
        bidLink: "/itemDetail",
        previewImg: "./img/items/static-1.jpg",
        title: "Pinky Ocean",
        sold: "600 sold",
        winners: 50
    }]

  constructor(props) {
    super(props);
    this.state = {
        raffles: this.dummyData.slice(0,8),
        height: 0
    };
    this.onImgLoad = this.onImgLoad.bind(this);
    }
    getRaffle =  async() =>  {
        console.log("tes")
        const raffleProjects = await getRaffleAllProjects()
        var result = await raffleProjects.text()
        result = JSON.parse(result)
        return result

    }
    loadMore = () => {
        let raffleState = this.state.raffles
        let start = raffleState.length
        let end = raffleState.length+4
        this.setState({
            raffles: [...raffleState, ...(this.dummyData.slice(start, end))]
        });
        }

    onImgLoad({target:img}) {
        let currentHeight = this.state.height;
        if(currentHeight < img.offsetHeight) {
            this.setState({
                height: img.offsetHeight
            })
        }
      
    }

    componentDidMount() {
        let raffleState = this.state.raffles
        this.getRaffle().then((res) => this.setState({
            raffles: [...raffleState, ...(res)]
        }));
        setTimeout(() => {
            console.log(this.state.raffles)
        }, 1000); 
      }
    

 render() {
  return (
    <div className='row'>
    <GlobalStyles />
        {this.state.raffles.map( (raffle, index) => (
            <div key={index} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4 cardCenter">
                <div className="nft__item m-0">
                    <div className="nft__item_wrap" style={{height: `${this.state.height}px`}}>
                        <span>
                            <img onLoad={this.onImgLoad} src={raffle.previewImg} className="lazy nft__item_preview" alt=""/>
                        </span>
                    </div>
                    <div className="de_countdown">
                        <Clock deadline={raffle.deadline} />
                    </div>
                    <div className="nft__item_info">
                        <span onClick={()=> window.open(raffle.nftLink, "_self")}>
                            <h4>{raffle.title}</h4>
                        </span>
                        <div className="nft__item_price">
                        <i className="fa fa-ticket"></i><span>{raffle.ticketPrice}</span>
                        </div>
                        <div className="nft__item_action">
                            <span onClick={()=> window.open(raffle.bidLink, "_self")}>join raffles</span>
                        </div>
                        <div className="nft__item_like">
                            <i className="fa fa-trophy"></i><span>{raffle.totalWinners}</span>
                        </div>                            
                    </div> 
                </div>
            </div>  
        ))}
        { this.state.raffles.length !== this.dummyData.length &&
            <div className='col-lg-12'>
                <div className="spacer-single"></div>
                <span onClick={() => this.loadMore()} className="btn-main lead m-auto">Load More</span>
            </div>
        }
    </div>              
    );
}
}