import React,{Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from '../container/app'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Upcomingmovie from '../container/upcomingmovie'
//import Home from '../component/Home/Homedata'
//import Listview from '../component/Home/Listview'
class Routing extends Component{
    render(){
        return(
            
            <BrowserRouter>
            <div>
                <Header/>
   
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to='/'>LatestMovie</Link></li>
                            <li> <Link to='/Upcomingmovie'>UpcomingMovie</Link></li>
                        </ul>
                        </div>
                
                <Route exact path="/" component={App}></Route>
                <Route exact path="/Upcomingmovie" Component={Upcomingmovie}></Route>
                {/* <Route exact path="/" Component={App}></Route> */}
                 <Footer/>
            </div>
            </BrowserRouter>
        )
    }
}
export default Routing;
