//importando navegacao stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//importando as telas
import ListaTarefasScreen from "../screens/ListaTarefasScreen";
import NovaTarefaScreen from "../screens/NovaTarefaScreen";

//instaciando um navegacao do tipo stack
const Stack = createNativeStackNavigator();


export default function AppStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen component={ListaTarefasScreen} name="Tarefas" options={{title:"Minhas Tarefas"}} />

            <Stack.Screen component={NovaTarefaScreen} name="NovaTarefa" options={{title:"Nova Tarefa"}}/>
        </Stack.Navigator>
    )
}