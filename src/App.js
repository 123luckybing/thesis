import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import MajorRecommend from './MajorRecommend';
import SchoolRecommend from './SchoolRecommend';
import AllRecommend from './AllRecommend';
import HistoryData from './HistoryData';
import QuestionAnswer from './QuestionAnswer';
import Home from './Home';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path='/' component={() => 
                <Home>
                  <Switch>
                    <Route path='/home/recommend/major' component={MajorRecommend}/>
                    <Route path='/home/recommend/school' component={SchoolRecommend}/>
                    <Route path='/home/recommend/all' component={AllRecommend}/>
                    <Route path='/home/search' component={HistoryData}/>
                    <Route path='/home/qa' component={QuestionAnswer}/>
                  </Switch>
                </Home> 
              }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
