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
        height: "20%",
        alignItems: "center",
        justifyContent: "center",
    },

    logoContent: {
        width: "90%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
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

    mainContainer: {
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
    },

    mainInput: {
        width: "90%",
        height: 60,
        margin: 5,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        backgroundColor: "#fff",
    },

    buttonSignup: {
        width: "90%",
        height: 60,
        margin: 5,
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

    buttonBack: {
        width: "45%",
        height: 60,
        margin: 5,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    buttonBackText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
        textAlign: "center",
    },

    navContainer: {
        width: "100%",
        height: "20%",
        alignItems: "center",
        justifyContent: "center",
    },

    navText: {
        fontSize: 25,
        color: "#1179e2",
        textAlign: "center",
    },

    buttonSignin: {
        alignItems: "center",
        justifyContent: "center",
    },

    buttonSigninText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
        textAlign: "center",
    },
    
    footer: {
        width: "100%",
        height: "5%",
        backgroundColor: "#1179e2",
    },
});

export default styles;