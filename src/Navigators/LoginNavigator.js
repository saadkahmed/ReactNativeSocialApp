import { createStackNavigator } from 'react-navigation';
import Login from '../components/Login';
import DashBoard from '../components/Dashboard';

export default createStackNavigator({
    Login: {
        screen: Login
    },
    DashBoard: {
        screen: DashBoard
    },
},
{
    initialRouteName: 'Login'
}
);