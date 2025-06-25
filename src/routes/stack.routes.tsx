//importação do "gerente" de navegação baseado em pilha
import { createStackNavigator } from "@react-navigation/stack"
//importação do NavigationContainer que será um componente visual
import { NavigationContainer } from "@react-navigation/native";

//desestruturação de componente
const {Screen, Navigator} = createStackNavigator();

import Login from '../screens/LoginScreen'
import Mood from '../screens/HumorScreen'
import Result from '../screens/ResultadoScreen'

export default function StackRoutes(){
    return (
        <NavigationContainer>
            <Navigator>

                <Screen 
                    name='pag-login'
                    component={Login}
                    options={{title: 'Login', headerTintColor: "green", headerStyle:{backgroundColor: '#78a490',}}}
                />
                <Screen
                    name='pag-mood'
                    component={Mood}
                    options={{title: 'Perfil do Hamster', headerTintColor: "green", headerStyle:{backgroundColor: '#78a490',}}}
                />
                <Screen
                    name='pag-result'
                    component={Result}
                    options={{title: 'Resultado', headerTintColor: "green", headerStyle:{backgroundColor: '#78a490',}}}
                />

            </Navigator>
        </NavigationContainer>
    )
}