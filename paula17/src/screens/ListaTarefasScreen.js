import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import {API_URL} from "../config/api"
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import { Button } from "react-native";

export default function ListaTarefasScreen({navigation}){
     //Dados vindos da API
     const [filmes, setFilmes] = useState([]);
     //interruptor para informar se já carregou
     const [carregando, setCarregando] = useState(false);
     //Erros
     const [erro, setErro] = useState(null);

//Função ASSINCRONA que obtem os dados da api
async function getData(){
        try{
            //Limpando o objeto de erro
            setErro(null);

            //Acessando a API e fazendo a requisição GET
            const resposta = await fetch(`${API_URL}/movies.json`)

            if(!resposta.ok){
                throw new Error('O servidor respondeu com erro: ' + resposta.status);
            }
                const dados = await resposta.json();
                setFilmes(dados.movies);
                console.log(`Dados vindos da API ${dados}`);
            
        }catch(error){
            setErro(error.message);
        }finally{
            //informando q a aplicação foi finalizada a requisição
            setCarregando(false);
        }
    }

    useEffect(()=>{
        getData();
    }, []);

    if(carregando){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff"}}>
            <ActivityIndicator size="large" />
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Carregando...</Text>
            </View>
        )
    }

    return(
        <View>
            <Text>Lista de tarefas</Text>
            <FlatList
                data={filmes}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(<Text>{item.title} | {item.releaseYear} </Text>)}
            />

            <Button
            title="Atualizar" onPress={()=> getData()}
            />

            <Button
            title="Novo filme"
            onPress={() => navigation.navigate('NovaTarefa')}
            />
        </View>
    )
}