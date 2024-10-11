import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export function NeckCardio() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Neck</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Cardio</Text>
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
        justifyContent: "center",
        backgroundColor: "#fff",
    },
  
    text: {
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#000",
        textAlign: "center",
    },
});