import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    BackgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
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
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    logoTitle: {
        fontSize: 80,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
        textAlign: "center",
    },

    logoText: {
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        textAlign: "center",
    },

    welcomeContainer: {
        width: "100%",
        height: "35%",
        alignContent: "center",
        justifyContent: "center",
    },

    welcomeText: {
        fontSize: 40,
        fontFamily: "Lexend Regular",
        color: "#fff",
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
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    buttonSigninText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
        textAlign: "center",
    },

    buttonSignup: {
        width: "90%",
        height: 60,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    buttonSignupText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
        textAlign: "center",
    },

    footer: {
        width: "100%",
        height: "5%",
    },
});

export default styles;