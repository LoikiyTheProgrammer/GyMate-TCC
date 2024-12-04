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

    profileContainer: {
        width: "90%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },

    profileImage: {
        width: "100%",
        borderRadius: 10,
        borderColor: "#1179e2",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    infoContainer: {
        width: "100%",
    },

    profileTitle: {
        width: "100%",
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: "#1179e2",
        paddingTop: "5%",
        paddingLeft: "5%",
        fontSize: 20,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
        alignSelf: "flex-start",
        backgroundColor: "#fff",
    },

    profileText: {
        width: "100%",
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: "#1179e2",
        marginBottom: "5%",
        paddingLeft: "5%",
        paddingBottom: "5%",
        fontSize: 15,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        alignSelf: "flex-start",
        backgroundColor: "#fff",
    },

    buttonSignout: {
        width: "100%",
        height: 60,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
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