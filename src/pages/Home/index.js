import { useState } from "react";
import { View, Text, TouchableOpacity,TextInput } from "react-native";
import styles from './styles';
import axios from 'axios';





export default function Home() {

  const [CEP, setCep] = useState('');
  const [result, setResult] = useState(null);

  async function getDataCep() {
    if (CEP) {
      await axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
        .then(data => setResult(data.data))
        .catch(error => setResult('Error'));
    }
  }




  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Insira um CEP'
          value={CEP}
          onChangeText={value => setCep(value)}
        />
        <TouchableOpacity style={styles.button} onPress={getDataCep}>
          <Text>Buscar CEP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.result}>
        {
          result
            ?
            <>
              {
                result === 'Error'
                  ?
                  <Text>Erro</Text>
                  :
                  <>
                    <Text>Bairro: {result.bairro}</Text>
                    <Text>CEP: {result.cep}</Text>
                    <Text>Complemento: {result.complemento}</Text>
                    <Text>DDD: {result.ddd}</Text>
                    <Text>LOCALIDADE: {result.localidade}</Text>
                    <Text>LOGRADOURO: {result.logradouro}</Text>
                    <Text>UF: {result.uf}</Text>
                  </>
              }
            </>
            :
            <Text>Sem Resultado</Text>
          }
      </View>
    </View>
  );
}