// import things related to React-Native
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// import screens

import Home from './screens/Home';
import About from './screens/About';
import Budget from './screens/Budget';

// create a stack
const MyStack = createNativeStackNavigator();

const App = ()=>{

  return(

    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name = 'Home' component = {Home}/>

        <MyStack.Screen name = 'About' component = {About}/>
        
        <MyStack.Screen name = 'Budget' component = {Budget}/>

      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;