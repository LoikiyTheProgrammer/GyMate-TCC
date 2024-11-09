import { StyleSheet } from "react-native";
import { width, height } from "../../constants/dimensions";

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
        width: "90%",
        height: "10%",
        marginTop: height*0.05,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    headerTitle: {
        fontSize: 40,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    buttonNotification: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    mainContainer: {
        width: "100%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
    },

    profileContainer: {
        width: "90%",
        height: "90%",
        paddingVertical: "5%",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#1179e2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },

    profileContent: {
        width: "100%",
        paddingHorizontal: "5%",
        alignItems: "center",
        justifyContent: "center",
    },

    profileTitle: {
        fontSize: 20,
        fontFamily: "Lexend Bold",
        color: "#000",
        alignSelf: "flex-start",
    },

    profileText: {
        fontSize: 15,
        fontFamily: "Lexend Regular",
        color: "#000",
        alignSelf: "flex-start",
    },

    buttonSignout: {
        width: "90%",
        height: 60,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },

    buttonSignoutText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    footer: {
        width: "100%",
        height: "5%",
        paddingHorizontal: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1179e2",
      },
    
    footerButton: {
        width: 50,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;