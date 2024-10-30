import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.text}>
                    Tela inicial
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,

    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 27,
        fontWeight: 'bold',
    },
});
