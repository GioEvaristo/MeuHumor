import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Pressable } from 'react-native';

export default function MoodSelectionScreen({ route, navigation }: any) {

    const { emoji, titulo, cor, texto, usuario } = route.params;
    
    const [resposta, setResposta] = useState("");
    const [motivo, setMotivo] = useState("Ainda não há nenhuma respostas");
    const [user, setUser] = useState("");

    function enviar(){
        setMotivo(resposta);
        setUser(usuario + ": ");
        setResposta("");
    }; 

    return (
        <ScrollView style={{backgroundColor: '#96ceb4', paddingTop: 30}}>

            <View style={{flex: 1, alignItems: 'center'}}>

                <Text 
                    style={{fontSize: 28, 
                            color: cor, 
                            textShadowColor: 'black', 
                            textShadowRadius: 3.5, 
                            fontWeight: 'bold', 
                            paddingTop: 20
                        }}
                >
                    {titulo}
                </Text>

                <Text style={{textAlign: 'justify', fontSize: 16.5, width: 350, marginBottom: 20}}>{texto}</Text>
                
                <View style={{backgroundColor: '#ffeead', borderWidth: 5, borderRadius: 30, marginBottom: 30, borderColor: "#ffcc5c", padding: 5,}}>
                    
                    <Text 
                        style={{fontSize: 20, 
                                fontWeight: 'bold', 
                                paddingLeft: 3, 
                                paddingBottom: 5
                            }}
                    >
                        Por que ele está assim?
                    </Text>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>

                        <TextInput 
                            style={{backgroundColor: 'white', 
                                    borderWidth: 0.2, 
                                    borderRadius: 10, 
                                    height: 41, 
                                    width: 260
                                }}
                            value={resposta}
                            onChangeText={setResposta}
                            placeholder='Digite aqui...'
                        />

                        <Pressable 
                            onPress={enviar} 
                            style={{borderWidth: 2, 
                                    borderRadius: 10, 
                                    padding: 4, 
                                    marginLeft: 7, 
                                    width: 70, 
                                    height: 38, 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    backgroundColor: cor
                                }}
                        >
                            <Text 
                                style={{fontSize: 18, 
                                        fontWeight: 'bold',
                                        color: 'white',
                                        textShadowColor: 'black', 
                                        textShadowRadius: 4
                                    }}
                            >
                                Enviar
                            </Text>

                        </Pressable>
                    
                    </View>

                    <Text style={{marginBottom: 5, marginTop: 20, fontWeight: 'bold', fontSize: 17}}>Respostas:</Text>

                    <View style={{flexDirection: 'row'}}>

                        <Text style={{fontWeight: 'bold'}}>{user}</Text>
                        
                        <Text>{motivo}</Text>
                    
                    </View>
                
                </View>
                
                <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', width: 350, marginTop: 15}}>

                </View>
                
            </View>
            
        </ScrollView>
    )
}