import React from "react";
import styles from "./styleMain";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ChestBack } from "../../components/Chest&Back";
import { NeckCardio } from "../../components/Neck&Cardio";
import { ShouldersWaist } from "../../components/Shoulders&Waist";
import { UpperArmsLowerArms } from "../../components/UpperArms&LowerArms";
import { UpperLegsLowerLegs } from "../../components/UpperLegs&LowerLegs";
import { useNavigation } from "@react-navigation/native";

export default function Main() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../assets/imgs/Fundo-GyMate.png')}/>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification} onPress={() => navigation.navigate("GyMate AI")}>
                    <MaterialCommunityIcons name="bell-check" size={50} color="#fff"/>
                </TouchableOpacity>
            </View>

            <View style={styles.main}>

            </View>

            <View style={styles.boxScrollview}>
                <Text style={styles.scrollviewTitle}>Exercícios</Text>
                <ScrollView>
                    <ChestBack/>
                    <NeckCardio/>
                    <ShouldersWaist/>
                    <UpperArmsLowerArms/>
                    <UpperLegsLowerLegs/>
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Chat")}>
                    <MaterialCommunityIcons name="chat-outline" size={45} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Main")}>
                    <MaterialCommunityIcons name="home" size={45} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Profile")}>
                    <MaterialCommunityIcons name="account-outline" size={45} color="#fff"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}