import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import DatasetReducer from './dataset_reducer';
import ChartReducer from './chart_reducer';
import ShareReducer from './share_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  data: DatasetReducer,
  chartsInfo: ChartReducer,
  shareInfo: ShareReducer
});

export default RootReducer;
