import React, { useState } from "react";
import styles from "./styleSignUp";
import { Alert, SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        const auth = FIREBASE_AUTH;
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created successfully!");
            navigation.navigate("GyMate Main");
        } catch (error) {
            console.error("Authentication error:", error.message);
            Alert.alert("Authentication Error", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}/>

            <View style={styles.boxLogo}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>GyMate</Text>
                    <Text style={styles.logoSubText}>coloque seus dados de acesso para criar sua conta</Text>
                </View>
            </View>

            <View style={styles.main}>
                <TextInput
                    style={styles.mainInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor={"#fff"}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.mainInput}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Digite sua senha"
                    placeholderTextColor={"#fff"}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.buttonSignUp} onPress={handleSignUp}>
                    <Image style={styles.buttonSignUpImage} source={require("../../../assets/imgs/Fundo-GyMate-90º.png")} />
                    <Text style={styles.buttonSignUpText}>Criar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate("GyMate")}>
                    <Text style={styles.buttonBackText}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.nav}>
                <Text style={styles.navText}>Já possui uma conta?</Text>
                <TouchableOpacity style={styles.navButtonSignIn} onPress={() => navigation.navigate("GyMate Sign-in")}>
                    <Text style={styles.navButtonSignInText}>Clique aqui!</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer} />
        </SafeAreaView>
    );
}