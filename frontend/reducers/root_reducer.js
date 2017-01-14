import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import DatasetReducer from './dataset_reducer';
import DataViewReducer from './data_view_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  data: DatasetReducer
});

export default RootReducer;
