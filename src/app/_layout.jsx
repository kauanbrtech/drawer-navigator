import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'


export default function RootLayout() {
    return (
        <GestureHandlerRootView >
            <Drawer screenOptions={{
                // drawerActiveBackgroundColor: '#001928',
                // drawerActiveTintColor: '#FCFCFC',
                // drawerInactiveTintColor: "#FFF",
                // drawerStyle: {
                //     backgroundColor: '#001928'
                // }
            }}>
                <Drawer.Screen name="index" options={{
                    drawerLabel: 'Início',
                    headerTitle: 'Home',
                    headerTintColor: "#fff",
                    headerStyle: {
                        backgroundColor: '#001922'
                    }
                }} />
                <Drawer.Screen name="about" options={{
                    drawerLabel: 'Sobre mim',
                    headerTitle: 'Sobre mim'
                }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}