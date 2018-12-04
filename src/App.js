import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import MajorRecommend from './Recommend/MajorRecommend';
import SchoolRecommend from './Recommend/SchoolRecommend';
import AllRecommend from './Recommend/AllRecommend';
import QuestionAnswer from './QuestionAnswer';
import Area from './HistoryData/Area';
import Home from './Home';
import High from './HistoryData/High';
import HighArea from './HistoryData/HighArea';
import Detail from './HistoryData/SchoolDetail';
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
                    <Route path='/home/qa' component={QuestionAnswer}/>
                    <Route path='/home/search/area' component={Area}/>
                    <Route path='/home/search/high' component={High}/>
                    <Route path='/home/search/high-area' component={HighArea}/>
                    <Route path='/home/search/detail' component={Detail}/>
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
