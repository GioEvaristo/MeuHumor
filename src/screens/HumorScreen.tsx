import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

export default function MoodSelectionScreen({ route, navigation }: any) {

    const {email} = route.params;

    const humor = {
        alegre: require('../../assets/alegria.png'),
        titulo1: 'Alegre',
        cor1: '#ffd000',
        alegria: "você está alegre!",
        
        raiva: require('../../assets/raiva.png'),
        titulo2: 'Raiva',
        cor2: '#9dfcfd',
        raivoso: "você está com raiva!",

        triste: require('../../assets/tristeza.png'),
        titulo3: 'Tristeza',
        cor3: '#f5454f',
        tristeza: "você está triste!",
    };

    function resultado(escolha: number){
        if(escolha == 1){
            navigation.navigate('pag-result', {
                emoji: humor.alegre,
                titulo: humor.titulo1,
                cor: humor.cor1,
                texto: humor.alegria,
                usuario: email,
            });
        }
        if(escolha == 2){
            navigation.navigate('pag-result', {
                emoji: humor.raiva,
                titulo: humor.titulo2,
                cor: humor.cor2,
                texto: humor.raivoso,
                usuario: email,
            });
        }
        if(escolha == 3){
            navigation.navigate('pag-result', {
                emoji: humor.triste,
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
