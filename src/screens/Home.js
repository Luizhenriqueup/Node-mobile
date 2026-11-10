import { Button, Text } from "react-native";
import { View } from "react-native";


export default function Home({navigation}){
    return(
        <View>
            <Text>Pagina Home</Text>
            <Button title="Player" onPress={() => navigation.navigate("Playing")} />
        </View>
    )
}