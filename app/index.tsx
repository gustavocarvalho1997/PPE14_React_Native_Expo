import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";

export default function Screen() {
    const updateCurrency = () => {
        console.log("Atualizando o valor do dólar...");
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Image
                source={require("../assets/dolar.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.h2}>O dólar americano está:</Text>
            <Text style={styles.currencyText}>R$ 5,00</Text>
            <Button label="Atualizar" onPress={updateCurrency} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0B1C2D",
        paddingHorizontal: 20,
    },
    logo: {
        width: 200,
        height: 180,
    },
    h2: {
        color: "#CCCCCC",
        fontSize: 24,
        marginTop: 30,
    },
    currencyText: {
        color: "#FFFFFF",
        fontSize: 52,
        marginTop: 20,
        marginBottom: 50,
    },
});
