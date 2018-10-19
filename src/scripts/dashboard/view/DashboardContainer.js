import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { matchupActions } from '../store/actions/MatchupsActions';
const SPORT_NAMES = ['NFL', 'CFB', 'NBA', 'CBB', 'MORE']
import Header from './../../shared/components/Header';

class DashboardContainer extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchMatchups();
    }
    render(){
        return (
            <React.Fragment>
            <Header />
            <div className='appContainer'>
              <div className='container-fluid matchupWrap'>
                <div className='matchupBanner'></div>
                <div className='leagueFilter'>
                  <ul className='d-flex justify-content-center leagueList'>
                    {SPORT_NAMES.map(SPORT_NAME => <li key={SPORT_NAME} onClick={(evt) => this.isSelected(evt) }><span>{SPORT_NAME}</span></li>)}
                  </ul>
                </div>
                <div className='matchupFilter'>
                  <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary active">UPCOMING</button>
                    <button type="button" className="btn btn-secondary">LIVE</button>
                    <button type="button" className="btn btn-secondary">FINAL</button>
                  </div>
                </div>
                <div className='searchFilter'>
                  <div className='row'>
                    <div className='col-7 matchupDate'>
                      <span>Week 4 Thursday 9/27, 2018</span>
                    </div>
                    <div className='col-5 filterButtons text-right'>
                      <button type="button" className="btn btn-icon">
                        <i className="material-icons">search</i>
                      </button>
                      <button type="button" className="btn btn-icon p-0">
                        <i className="material-icons">sort</i>
                      </button>
                    </div>
                    <div className='col-12 d-none'>
                      <div className="matchupSearchBar">
                        <input
                          type="text"
                          className="form-control"
                        />
                        <button className="btn btnInputSearch" type="button">
                          <i className="material-icons">search</i>
                        </button>
                        <button className="btn btnInputClose" type="button">
                          <i className="material-icons">close</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='matcupListWrap'>
                  <ul className='d-flex flex-column'>
                    <li className='matchupItem'>
                      <div className='row'>
                        <div className='col-7'>
                          <div className='matchDateTimeWrap'>
                            <span>8:20 | 9/27</span>
                          </div>
                          <div className='table teamsTable'>
                            <div className='tableRow'>
                              <div className='tableCell boardNuber'>103</div>
                              <div className='tableCell teamName'>PHILADELPHIA</div>
                            </div>                        
                            <div className='tableRow'>
                              <div className='tableCell boardNuber'>104</div>
                              <div className='tableCell teamName'>NY GIANTS</div>
                            </div>
                          </div>
                        </div>
                        <div className='col-5'>
                          <div className='table oddsTable'>
                            <div className='tableRow tableHead'>
                              <div className='tableCell open'>Open</div>
                              <div className='tableCell current'>Current</div>
                            </div>
                            <div className='tableRow'>
                              <div className='tableCell open'>-3</div>
                              <div className='tableCell current'>-3</div>
                            </div>
                            <div className='tableRow'>
                              <div className='tableCell open'>45</div>
                              <div className='tableCell current'>44.5</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='matchupItem'>
                      <div className='row'>
                        <div className='col-7'>
                          <div className='matchDateTimeWrap'>
                            <span>8:20 | 9/27</span>
                          </div>
                          <div className='table teamsTable'>
                            <div className='tableRow'>
                              <div className='tableCell boardNuber'>103</div>
                              <div className='tableCell teamName'>PHILADELPHIA</div>
                            </div>                        
                            <div className='tableRow'>
                              <div className='tableCell boardNuber'>104</div>
                              <div className='tableCell teamName'>NY GIANTS</div>
                            </div>
                          </div>
                        </div>
                        <div className='col-5'>
                          <div className='table oddsTable'>
                            <div className='tableRow tableHead'>
                              <div className='tableCell open'>Open</div>
                              <div className='tableCell current'>Current</div>
                            </div>
                            <div className='tableRow'>
                              <div className='tableCell open'>-3</div>
                              <div className='tableCell current'>-3</div>
                            </div>
                            <div className='tableRow'>
                              <div className='tableCell open'>45</div>
                              <div className='tableCell current'>44.5</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}


  DashboardContainer.propTypes = {
    fetchMatchups: PropTypes.func.isRequired
  };
  
  
  //=====================================
  //  CONNECT
  //-------------------------------------
  
  const mapDispatchToProps = {
    fetchMatchups: matchupActions.loadMatchups,
  };
  
  
  export default withRouter(
      connect(
      null,
      mapDispatchToProps
    )(DashboardContainer)
  );