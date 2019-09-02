import { createStackNavigator } from 'react-navigation'
import Splash from '../containers/StartScreens/Splash'

const Start = createStackNavigator({
    SplashScreen: Splash,
});
Start.navigationOptions = () => {
    return {
        header : null
    };
};
export default Start;