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

    boxLogo: {
        width: "100%",
        height: "20%",
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        width: "90%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    logoText: {
        fontSize: 80,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
        textAlign: "center",
    },

    logoSubText: {
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        textAlign: "center",
    },

    main: {
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
    },

    mainInput: {
        width: "90%",
        height: 60,
        margin: 5,
        paddingHorizontal: "5%",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        backgroundColor: "#fff",
    },

    buttonForgot: {
        width: "90%",
        margin: 5,
    },

    buttonForgotText: {
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
    },

    buttonSignIn: {
        width: "90%",
        height: 60,
        margin: 5,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
    },

    buttonSignInText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    buttonSignInImage: {
        width: "100%",
        height: "100%",
        borderRadius: 18,
        position: "absolute",
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

    nav: {
        width: "100%",
        height: "20%",
        alignItems: "center",
        justifyContent: "center",
    },

    navText: {
        fontSize: 25,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        textAlign: "center",
    },

    navButtonSignUp: {
        alignItems: "center",
        justifyContent: "center",
    },

    navButtonSignUpText: {
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