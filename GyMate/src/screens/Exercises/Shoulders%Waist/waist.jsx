import React from "react";
import styles from "./styleWaist";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Waist() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Waist</Text>
        </SafeAreaView>
    );
}