import { View, Text, Button } from "react-native";


export default function Playing({navigation}){
    return(
        <View>
            <Text>Tocando Agora</Text>
            <Button title="Voltar para Home" onPress={()=> navigation.goBack()} />
        </View>
    )
}