import React from 'react';

import {Icon} from 'react-fa';
import AreaChart from 'react-icons/lib/fa/area-chart';
import BarChart from 'react-icons/lib/fa/bar-chart';
import LineChart from 'react-icons/lib/fa/line-chart';
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
  return <div>
    <h1> app rendering... </h1>
    {children}
  </div>;
};

export default App;
