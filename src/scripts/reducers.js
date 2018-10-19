import { combineReducers } from 'redux';
import * as dashBoardReducers from './dashboard/store/reducers';


export default combineReducers({
   matchups : dashBoardReducers.matchupReducer
});
