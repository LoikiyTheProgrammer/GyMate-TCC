import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
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
        color: "#fff",
        textAlign: "center",
    },

    logoSubText: {
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#fff",
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
        borderColor: "#fff",
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#fff",
        backgroundColor: "#1179e2",
    },

    buttonSignUp: {
        width: "90%",
        height: 60,
        margin: 5,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    buttonSignUpText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    buttonSignUpImage: {
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
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
    },

    buttonBackText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#fff",
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
        color: "#fff",
        textAlign: "center",
    },

    navButtonSignIn: {
        alignItems: "center",
        justifyContent: "center",
    },

    navButtonSignInText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },
    
    footer: {
        width: "100%",
        height: "5%",
        backgroundColor: "#fff",
    },
});

export default styles;