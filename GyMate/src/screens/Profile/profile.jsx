import React, { useState, useEffect } from "react";
import styles from "./styleProfile";
import { Alert, SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from "../../firebase/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function Profile() {
    const navigation = useNavigation();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, [FIREBASE_AUTH]);

    const [loading, setLoading] = useState(false);

    const handleSignOut = async () => {
        const auth = FIREBASE_AUTH;
        try {
            await signOut(auth)
            console.log("User signed out successfully!");
            navigation.navigate("GyMate");
        } catch (error) {
            console.error("Sign out error:", error.message);
            Alert.alert("Authentication Error", error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../assets/imgs/Fundo-GyMate.png')}/>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <MaterialCommunityIcons name="bell-check" size={50} color="#fff"/>
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <View style={styles.boxProfile}>
                    <View style={styles.profile}>
                        <MaterialCommunityIcons name="account-circle" size={300} color="#000"/>
                        <Text style={styles.profileText}>{user?.email}</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonSignOut} onPress={handleSignOut}>
                        <Text style={styles.buttonSignOutText}>Sair da conta</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Chat")}>
                    <MaterialCommunityIcons name="chat-outline" size={45} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Main")}>
                    <MaterialCommunityIcons name="home-outline" size={45} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Profile")}>
                    <MaterialCommunityIcons name="account" size={45} color="#fff"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}