import { StyleSheet } from "react-native";
import { width, height } from "../../constants/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    header: {
        width: "100%",
        height: "15%",
        paddingHorizontal: "5%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1179e2",
    },

    headerTitle: {
        fontSize: 40,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    mainContainer: {
        width: "100%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
    },

    searchBarContainer: {
        width: "90%",
        height: "10%",
    },

    searchBar: {
        width: "100%",
        height: 60,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#1179e2",
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        backgroundColor: "#fff",
    },

    userListContainer: {
        width: "90%",
        height: "80%",
    },

    userList: {
        width: "100%",
    },

    userItem: {
        width: "100%",
        padding: 5,
        borderBottomWidth: 2,
        borderColor: "#1179e2",
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },

    userName: {
        fontSize: 15,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
    },

    userEmail: {
        fontSize: 10,
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