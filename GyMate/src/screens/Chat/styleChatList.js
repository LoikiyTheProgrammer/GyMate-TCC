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
        marginTop: height * 0.05,
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
        width: "90%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
    },

    searchBar: {
        width: "100%",
        height: 60,
        marginBottom: 20,
        paddingHorizontal: "5%",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#1179e2",
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        backgroundColor: "#fff",
    },

    userList: {
        width: "100%",
    },

    userItem: {
        width: "100%",
        marginBottom: 10,
        padding: "5%",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        backgroundColor: "#fff",
    },

    userName: {
        fontSize: 15,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
    },

    userEmail: {
        fontSize: 15,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
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