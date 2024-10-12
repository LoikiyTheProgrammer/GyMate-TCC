import React from "react";
import styles from "./styleLegs";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Legs() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Legs</Text>
        </SafeAreaView>
    );
}