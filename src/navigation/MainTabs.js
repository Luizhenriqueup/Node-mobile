import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//importando as telas que serão abas
import HomeStack from "./HomeStack"
import Search from "../screens/Search"
import Library from "../screens/Library"
import Premium from "../screens/Permium"
import CreatePlaylist from "../screens/CreatePlaylist"
import Home from "../screens/Home"


//Instanciando um objeto da navegação do tipo BottomTab
const Tabs = createBottomTabNavigator()


export default function MainTabs(){
    return(
        <Tabs.Navigator screenOptions={{headerShown: false}}>
            <Tabs.Screen name="HomeStack" component={HomeStack} options={{title: 'Home'}}/>
            <Tabs.Screen name="Search" component={Search}/>
            <Tabs.Screen name="Library" component={Library}/>
            <Tabs.Screen name="Premium" component={Premium}/>
            <Tabs.Screen name="CreatePlaylist" component={CreatePlaylist}/>
        </Tabs.Navigator>
    )
}
