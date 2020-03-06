import React ,{Component} from 'react';
import { connect } from 'react-redux';
//import * as actions from '../action';
import {LatestMovieList,UpcomingMovieList,EventMovie} from '../action';
import LatestMovie from '../component/Home/LatestMovie';
import UpcomingMovie from '../component/Home/UpcomingMovie';
import EventList from '../component/Home/NearbyEvent';
import {bindActionCreators} from 'redux';


class App extends Component {

    componentDidMount(){
        this.props.LatestMovieList()
        this.props.UpcomingMovieList()
        this.props.EventMovie()
       
    }

    render(){
        return(
            <div>
                <LatestMovie list={this.props.moviesdata.latest}></LatestMovie>
                <UpcomingMovie list={this.props.upcomingMovieData.upcoming}></UpcomingMovie>
                <EventList list={this.props.EventData.EventmovieDetails}></EventList>
            </div>
        )
    }

}

function mapStateToProps(state){
    console.log(state)
    return{
        moviesdata: state.movies,
        upcomingMovieData:state.upcoming,
        EventData: state.event
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({LatestMovieList,UpcomingMovieList,EventMovie},dispatch)

}


export default connect(mapStateToProps,mapDispatchToProps)(App);
