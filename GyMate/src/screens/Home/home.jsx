import React from "react";
import styles from "./styleHome";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}/>

            <View style={styles.logoContainer}>
                <View style={styles.logoContent}>
                    <Text style={styles.logoTitle}>GyMate</Text>
                    <Text style={styles.logoText}>escolha seu modo de acesso</Text>
                </View>
            </View>

            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Pronto para treinar?</Text>
            </View>

            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.buttonSignin} onPress={ () => navigation.navigate("GyMate Sign-in")}>
                    <Text style={styles.buttonSigninText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSignup} onPress={ () => navigation.navigate("GyMate Sign-up")}>
                    <Text style={styles.buttonSignupText}>Registrar-se</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}/>
        </SafeAreaView>
    );
}