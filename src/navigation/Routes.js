import React, { Component } from 'react'
import { Route,BrowserRouter as Router,Switch } from 'react-router-dom';
import Head  from '../pages/header/header'
import Footer from '../pages/footer/footer'
import Home from '../pages/home/home'
import Privacypolicy from '../pages/privacypolicy/privacypolicy'
import Landingpage from '../pages/landingpage/landingpage'
import Ourteam from '../pages/Ourteam/Ourteam'
class Routes extends Component
{
    render()
        {
           
            return(
                <Router>
                   {/* <div>
                        <Header/>
                    </div> */}
                <Switch>
                     <Route exact path="/" component={Head}/>
                     <Route exact path="/footer" component={Footer}/>
                     <Route exact path="/home" component={Home}/>
                     <Route exact path="/Ourteam" component={Ourteam}/>
                     <Route exact path="/landingpage" component={Landingpage}/>
                     <Route exact path="/privacypolicy" component={Privacypolicy}/>
                </Switch>
                   {/* <div>
                        <Footer/>
                    </div> */}
                </Router>
            );
                }
}
export default Routes;