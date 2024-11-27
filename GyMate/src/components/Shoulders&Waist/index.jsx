import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function ShouldersWaist() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("GyMate Shoulders")}>
                <Image style={styles.buttonImage} source={require("../../assets/imgs/Treino-Ombros.png")}/>
                <Text style={styles.text}>Ombros</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("GyMate Waist")}>
                <Image style={styles.buttonImage} source={require("../../assets/imgs/Treino-Abdômen.png")}/>
                <Text style={styles.text}>Abdômen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 250,
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
  
    button: {
        width: "45%",
        height: "100%",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#fff",
    },

    buttonImage: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        position: "absolute",
    },

    text: {
        marginBottom: 5,
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#fff",
        textAlign: "center",
    },
});