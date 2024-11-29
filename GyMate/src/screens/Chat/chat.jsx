import React from "react";
import styles from "./styleChat";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Chat() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require("../../assets/imgs/Fundo-GyMate.png")}/>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <MaterialCommunityIcons name="bell-check" size={50} color="#fff"/>
                </TouchableOpacity>
            </View>

            <View style={styles.mainContainer}>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Chat")}>
                    <Ionicons name="chatbubble" size={35} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Main")}>
                    <Ionicons name="home-outline" size={35} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Profile")}>
                    <Ionicons name="person-outline" size={35} color="#fff"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}