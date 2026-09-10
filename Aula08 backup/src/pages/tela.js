import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.fundoRoxo}>
      <Text style={styles.textoRoxo}>
            Luiz henrique
      </Text>
      <AntDesign style={styles.iconesRoxo} name="user" size={40} color="black" />
             

      <View style={styles.fundoBranco}>

        <View style={styles.icones}>
          <Octicons name="paste" size={40} color="black" />
          <Octicons name="paste" size={40} color="black" />
          <Octicons name="paste" size={40} color="black" />
          <Octicons name="paste" size={40} color="black" />
        </View>

        <Text style={styles.texto1}>
            Últimos lançamentos
        </Text>
        <Text style={styles.texto}>
            Salário
        </Text>
        <Text style={styles.texto}>
           Investimento
        </Text>
        <Text style={styles.texto}>
            Combustível
        </Text>
        <Text style={styles.texto}>
            Parcela Celular 7/12
        </Text>
        <Text style={styles.texto}>
            Tênis
        </Text>
        <Text style={styles.texto}>
           Parcela Apê 27/180
        </Text>
        <Text style={styles.texto}>
           Fone de ouvido
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundoRoxo: {
    flex: 1,
    backgroundColor: '#670D88',
  },
  fundoBranco: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '75%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
  },
  textoRoxo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 60,
  },
  iconesRoxo: {
    fontSize: 50,
    marginLeft: 500,
  },
  icones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  texto1: {
    textAlign: 'left',
    color: '#000',
    fontSize: 18,
    marginTop: 50,
  },
  texto: {
    textAlign: 'left',
    color: '#000',
    fontSize: 18,
    marginTop: 50,
    fontWeight: 'bold'
  },
});
