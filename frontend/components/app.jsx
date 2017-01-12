import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
// const data = [
//       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
//       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
//       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
// ];

// class SimpleLineChart extends React.Component{
// 	render () {
//   	return (
//     	<LineChart width={600} height={300} data={data}
//             margin={{top: 5, right: 30, left: 20, bottom: 5}}>
//        <XAxis dataKey="name"/>
//        <YAxis/>
//        <CartesianGrid strokeDasharray="3 3"/>
//        <Tooltip/>
//        <Legend />
//        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
//        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//       </LineChart>
//     );
//   }
// }

// <SimpleLineChart />


import {Icon} from 'react-fa';
import AreaChart from 'react-icons/lib/fa/area-chart';
import BarChart from 'react-icons/lib/fa/bar-chart';
// import LineChart from 'react-icons/lib/fa/line-chart';
import PieChart from 'react-icons/lib/fa/pie-chart';
import Table from 'react-icons/lib/fa/table';

import Upload from 'react-icons/lib/fa/upload';
import Dashboard from 'react-icons/lib/fa/dashboard';
import Lock from 'react-icons/lib/fa/lock';
import Unlock from 'react-icons/lib/fa/unlock';
import Edit from 'react-icons/lib/md/edit';
import Share from 'react-icons/lib/fa/share-square-o';
import AddUser from 'react-icons/lib/fa/user-plus';
import RemoveUser from 'react-icons/lib/fa/user-times';
import SignIn from 'react-icons/lib/fa/sign-in';
import SignOut from 'react-icons/lib/fa/sign-out';
import Spinner from 'react-icons/lib/fa/spinner';
import Superscript from 'react-icons/lib/fa/superscript';
import Trash from 'react-icons/lib/fa/trash';
import Add from 'react-icons/lib/md/add';
import Home from 'react-icons/lib/md/home';
// <PieChart name="AreaChart"/>

const App = ({ children }) => {

  return <div className="god-div">
    <NavBarContainer />
    {children}
  </div>;
};

export default App;
