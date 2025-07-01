import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

export default function MoodSelectionScreen({ route, navigation }: any) {

    const {email} = route.params;

    const humor = {
        alegre: require('../../assets/alegria.png'),
        alegroso: require('../../assets/alegroso.png'),
        titulo1: 'Alegre',
        cor1: '#f7c297',
        alegria: "Embora não possam sorrir ou falar, os hamsters demonstram sinais claros de alegria e bem-estar quando vivem em um ambiente saudável, seguro e estimulante. A felicidade de um hamster está diretamente ligada à sua qualidade de vida, e os tutores atentos conseguem identificar quando seu pequeno companheiro está satisfeito e emocionalmente equilibrado.",
        
        raiva: require('../../assets/raiva.png'),
        raivoso: require('../../assets/raivoso.png'),
        titulo2: 'Raiva',
        cor2: '#f6a6b2',
        raivante: "Embora pequenos e muitas vezes associados à fofura e docilidade, os hamsters também podem apresentar sinais de raiva ou agressividade, especialmente quando se sentem ameaçados, estressados ou desconfortáveis. A raiva em hamsters não é igual à raiva humana no sentido emocional profundo, mas representa uma resposta instintiva de defesa diante de situações que o animal percebe como perigosas ou invasivas.",

        triste: require('../../assets/tristeza.png'),
        tristonho: require('../../assets/tristonho.png'),
        titulo3: 'Tristeza',
        cor3: '#4fc2f1',
        tristeza: "A tristeza em hamsters, embora muitas vezes ignorada, é um estado emocional real e importante de se observar. Esses pequenos roedores, apesar de parecerem simples à primeira vista, são animais sensíveis e suscetíveis a mudanças no ambiente, na rotina e nos estímulos sociais. A tristeza em um hamster pode surgir por diversos motivos, incluindo solidão, estresse, tédio, dor física ou até mesmo luto pela perda de um companheiro (quando acostumados à presença de outro hamster, o que é raro, mas possível em algumas espécies).",
    };

    function resultado(escolha: number){
        if(escolha == 1){
            navigation.navigate('pag-result', {
                emoji: humor.alegre,
                emoji1: humor.alegroso,
                titulo: humor.titulo1,
                cor: humor.cor1,
                texto: humor.alegria,
                usuario: email,
            });
        }
        if(escolha == 2){
            navigation.navigate('pag-result', {
                emoji: humor.raiva,
                emoji1: humor.raivoso,
                titulo: humor.titulo2,
                cor: humor.cor2,
                texto: humor.raivante,
                usuario: email,
            });
        }
        if(escolha == 3){
            navigation.navigate('pag-result', {
                emoji: humor.triste,
                emoji1: humor.tristonho,
                titulo: humor.titulo3,
                cor: humor.cor3,
                texto: humor.tristeza,
                usuario: email,
            });
        }
        
    }

    return (
        <View style={{backgroundColor: '#96ceb4', flex: 1, alignItems: 'center', paddingTop: 40}}>

            <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center',}}>Como seu hamster está se sentindo hoje?</Text>

            <Text style={{fontSize: 20, paddingBottom: 20, paddingTop: 5, color: '#aa66cc', fontWeight: 'bold',}}>Clique em uma figurinha</Text>

            <Pressable onPress={() => resultado(1)}>

                <Image
                    style={{ width: 150, height: 150, borderRadius: 100, borderWidth: 5, borderColor: '#f7c297',}} 
                    source={ require('../../assets/alegria.png')}
                />

            </Pressable>

            <Pressable onPress={() => resultado(2)}>

                <Image
                    style={{ width: 150, height: 150, margin: 20, borderRadius: 100, borderWidth: 5, borderColor: '#f6a6b2',}} 
                    source={ require('../../assets/raiva.png')}
                />

            </Pressable>

            <Pressable onPress={() => resultado(3)}>

                <Image
                    style={{ width: 150, height: 150, borderRadius: 100, borderWidth: 5, borderColor: '#4fc2f1',}} 
                    source={ require('../../assets/tristeza.png')}
                />

            </Pressable>

        </View>
    )
}
