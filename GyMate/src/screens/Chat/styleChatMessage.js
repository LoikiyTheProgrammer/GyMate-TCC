import { StyleSheet } from "react-native";
import { width, height } from "../../constants/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    buttonBack: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    headerTitle: {
        width: "80%",
        fontSize: 30,
        fontFamily: "Lexend Bold",
        color: "#fff",
    },

    mainContainer: {
        flex: 1,
        padding: "5%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    messagesContainer: {
        width: "100%",
    },

    myMessage: {
        marginBottom: 5,
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignSelf: "flex-end",
        backgroundColor: "#1179e2",
    },

    otherMessage: {
        marginBottom: 5,
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignSelf: "flex-start",
        backgroundColor: "#b9b9b9",
    },

    messageText: {
        fontSize: 15,
        fontFamily: "Lexend Regular",
        color: "#fff",
    },

    messageDate: {
        fontSize: 8,
        fontFamily: "Lexend Regular",
        color: "#fff",
    },

    footer: {
        width: "100%",
        borderTopWidth: 2,
        borderColor: "#1179e2",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    input: {
        flex: 1,
        height: 60,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        paddingHorizontal: 5,
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        backgroundColor: "#fff",
    },

    sendButton: {
        width: 60,
        height: 60,
        marginLeft: 10,
        backgroundColor: "#1179e2",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
    },
});

export default styles;