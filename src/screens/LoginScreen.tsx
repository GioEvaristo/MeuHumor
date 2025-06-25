import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Alert, Image } from 'react-native';

export default function LoginScreen({ navigation }: any) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [texto, setTexto] = useState("");

    const usuario = { login: email };

    const campos = () => {
        if (email.includes('@') == false) {
            Alert.alert(
                'O email deve conter um @!'
            )
        }
        if (senha.length < 4) {
            Alert.alert(
                'A senha deve conter no mínimo 4 caracteres!'
            )
        }
        else {
            verificarLogin();
        }
    }

    function verificarLogin() {
        if (email == 'adm@email' && senha == '1234') {
            navigation.navigate('pag-mood', { email: usuario.login });
            setTexto("");
        }
        else {
            setTexto('Senha ou email incorretos');
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 70, backgroundColor: '#96ceb4' }}>

            <Text style={{ fontSize: 50, fontWeight: 'bold', color: "green" }}>Meu Humor</Text>

            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 40, color: "green" }}>Hamster Edition</Text>

            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 10 }}>Entre e veja o humor do seu hamster</Text>



            <View style={{ backgroundColor: '#ffeead', borderWidth: 5, borderRadius: 30, marginBottom: 30, borderColor: "#ffcc5c" }}>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        margin: 10,
                        marginTop: 30
                    }}
                >

                    <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Email: </Text>

                    <TextInput
                        style={{ backgroundColor: 'white', borderWidth: 0.2, borderRadius: 10, height: 41, width: 220 }}
                        value={email}
                        onChangeText={setEmail}
                    />

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: 10 }}>

                    <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Senha: </Text>

                    <TextInput
                        style={{ backgroundColor: 'white', borderWidth: 0.2, borderRadius: 10, height: 41, width: 220 }}
                        value={senha}
                        onChangeText={setSenha}
                    />

                </View>

                <Text style={{ color: 'red', fontWeight: 'bold', paddingLeft: 12, paddingBottom: 12 }}>{texto}</Text>

            </View>

            <Pressable
                onPress={campos}
                style={{
                    borderWidth: 5,
                    borderRadius: 20,
                    borderColor: '#cc5854',
                    padding: 7,
                    width: 100,
                    alignItems: 'center',
                    backgroundColor: '#ff6f69'
                }}
            >

                <Text style={{ fontSize: 23, color: 'white', fontWeight: 'bold' }}>Entrar</Text>

            </Pressable>

            <Image style={{ width: 160, height: 160, }}
                source={require('../../assets/bolotinha.png')}>
            </Image>

        </View>
    )
}