import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    header: {
        width: "100%",
        height: "5%",
    },

    logoContainer: {
        width: "100%",
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
    },

    logoContent: {
        width: "90%",
        height: "100%",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
    },

    logoTitle: {
        fontSize: 80,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    logoText: {
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#fff",
        textAlign: "center",
    },

    welcomeContainer: {
        width: "100%",
        height: "35%",
        alignContent: "center",
        justifyContent: "center",
    },

    welcomeText: {
        fontSize: 30,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
        textAlign: "center",
    },

    navContainer: {
        width: "100%",
        height: "15%",
        alignItems: "center",
        justifyContent: "space-between",
    },

    buttonSignin: {
        width: "90%",
        height: 60,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
    },

    buttonSigninText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    buttonSignup: {
        width: "90%",
        height: 60,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
    },

    buttonSignupText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    footer: {
        width: "100%",
        height: "5%",
    },
});

export default styles;