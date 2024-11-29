import React from "react";
import styles from "./styleMain";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArmsLegs } from "../../components/Arms&Legs";
import { ChestBack } from "../../components/Chest&Back";
import { ShouldersWaist } from "../../components/Shoulders&Waist";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Main() {
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
                <View style={styles.navContainer}>
                    <Text style={styles.navText}>Começe seu treino agora</Text>
                    <TouchableOpacity style={styles.buttonRoutine} onPress={() => navigation.navigate("GyMate Routine")}>
                        <Image style={styles.buttonRoutineImage} source={require("../../assets/imgs/Fundo-GyMate-90º.png")} />
                        <Text style={styles.buttonRoutineText}>Crie sua rotina</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAI} onPress={() => navigation.navigate("GyMate AI")}>
                        <Text style={styles.buttonAIText}>Teste nossa IA</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.scrollviewContainer}>
                    <Text style={styles.scrollviewText}>Treine também em casa</Text>
                    <ScrollView style={styles.scrollview}>
                        <ArmsLegs/>
                        <ChestBack/>
                        <ShouldersWaist/>
                    </ScrollView>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Chat")}>
                    <Ionicons name="chatbubble-outline" size={35} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Main")}>
                    <Ionicons name="home" size={35} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Profile")}>
                    <Ionicons name="person-outline" size={35} color="#fff"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}