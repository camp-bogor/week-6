import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Loading from "./Loading";
import Map from "../Map"
import LoginScreen from "../screens/login/Login";
import RegisterScreen from "../screens/register/Register";
import HomeScreen from "../screens/home/Home";


const AppStack = createStackNavigator({
  
  Apps: {
    screen: HomeScreen,
    navigationOptions: {
      headerStyle: {
          backgroundColor: '#f4f4f4',
          elevation: 0,
          height:35,
      },
    }
  },
  Map 
});

const AuthStack = createStackNavigator({
  Register: RegisterScreen,
  Login: LoginScreen
});

export default createAppContainer(
  createSwitchNavigator(
      {
          Loading: Loading,
          App: AppStack,
          Auth: AuthStack
      },
      {
          initialRouteName: "Loading"
      }
  )
);