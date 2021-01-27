import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from '../components/AppTabNavigator';
import CustomMenu from '../components/customMenu';
import Settings from '../screens/SettingScreen';

export const AppDrawer = createDrawerNavigator({
Home : {
screen: AppTabNavigator
},


Settings:{
screen: Settings
},
},

{contentComponent:CustomMenu},
{intialRouteName:'Home'}


)
