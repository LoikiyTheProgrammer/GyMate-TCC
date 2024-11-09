import React, { useState, useEffect } from "react";
import styles from "./styleProfile";
import { Alert, SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../firebase/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Profile() {
    const navigation = useNavigation();

    const [fullName, setFullName] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
            setUser(user);

            if (user) {
                const userDocRef = doc(FIREBASE_DB, "Users", user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    setFullName(userDoc.data().FullName);
                } else {
                    console.log("User not found on Firestore!");
                }
            }
        });

        return () => unsubscribe();
    }, []);

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
            <Image style={styles.BackgroundImage} source={require("../../assets/imgs/Fundo-GyMate.png")}/>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <MaterialCommunityIcons name="bell-check" size={50} color="#fff"/>
                </TouchableOpacity>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileContent}>
                        <MaterialCommunityIcons name="account-circle" size={300} color="#000"/>
                        <Text style={styles.profileTitle}>Nome:</Text>
                        <Text style={styles.profileText}>{fullName}</Text>
                        <Text style={styles.profileTitle}>E-mail:</Text>
                        <Text style={styles.profileText}>{user?.email}</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonSignout} onPress={handleSignOut}>
                        <Text style={styles.buttonSignoutText}>Sair da conta</Text>
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