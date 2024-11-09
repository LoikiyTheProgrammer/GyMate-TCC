import React, { useState } from "react";
import styles from "./styleSignUp";
import { Alert, SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
    const navigation = useNavigation();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        const auth = FIREBASE_AUTH;

        if (password !== confirmPassword) {
            console.error("As senhas não são iguais!");
            return;
        }

        const userData = {
            fullName,
            email,
            password,
        };

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = userCredential.user;

            await setDoc(doc(FIREBASE_DB, "Users", user.uid), {
                FullName: userData.fullName,
                Email: userData.email,
                Password: userData.password,
            });

            console.log("User created successfully!");
            navigation.navigate("GyMate Main");
        } catch (error) {
            console.error("Authentication error:", error.message);
            Alert.alert("Authentication Error", error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}/>

            <View style={styles.logoContainer}>
                <View style={styles.logoContent}>
                    <Text style={styles.logoTitle}>GyMate</Text>
                    <Text style={styles.logoText}>coloque seus dados de acesso para criar sua conta</Text>
                </View>
            </View>

            <View style={styles.mainContainer}>
                <TextInput
                    style={styles.mainInput}
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Digite seu nome"
                    placeholderTextColor={"#fff"}
                />
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
                <TextInput
                    style={styles.mainInput}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirme sua senha"
                    placeholderTextColor={"#fff"}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.buttonSignup} onPress={handleSignUp}>
                    <Image style={styles.buttonSignupImage} source={require("../../../assets/imgs/Fundo-GyMate-90º.png")} />
                    <Text style={styles.buttonSignupText}>Criar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate("GyMate")}>
                    <Text style={styles.buttonBackText}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.navContainer}>
                <Text style={styles.navText}>Já possui uma conta?</Text>
                <TouchableOpacity style={styles.buttonSignin} onPress={() => navigation.navigate("GyMate Sign-in")}>
                    <Text style={styles.buttonSigninText}>Clique aqui!</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer} />
        </SafeAreaView>
    );
}