import React, { useState } from "react";
import styles from "./styleSignIn";
import { Alert, SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        const auth = FIREBASE_AUTH;
        setLoading(true);
    
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Usuário logado com sucesso!");
            navigation.navigate("GyMate Main");
        } catch (error) {
            console.error("Erro de autenticação:", error.message);
            Alert.alert(
                "Falha no login", "Não foi possível realizar o login. Verifique se o e-mail e a senha estão corretos e tente novamente."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}/>

            <View style={styles.logoContainer}>
                <View style={styles.logoContent}>
                    <Text style={styles.logoTitle}>GyMate</Text>
                    <Text style={styles.logoText}>coloque seus dados de acesso para iniciar sua sessão</Text>
                </View>
            </View>

            <View style={styles.mainContainer}>
                <TextInput
                    style={styles.mainInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor={"#1179e2"}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.mainInput}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Digite sua senha"
                    placeholderTextColor={"#1179e2"}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />

                <TouchableOpacity style={styles.buttonForgot}>
                    <Text style={styles.buttonForgotText}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSignin} onPress={handleSignIn}>
                    <Text style={styles.buttonSigninText}>Entrar na conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate("GyMate")}>
                    <Text style={styles.buttonBackText}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.navContainer}>
                <Text style={styles.navText}>Não possui uma conta?</Text>
                <TouchableOpacity style={styles.buttonSignup} onPress={() => navigation.navigate("GyMate Sign-up")}>
                    <Text style={styles.buttonSignupText}>Clique aqui!</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}/>
        </SafeAreaView>
    );
}