import { StyleSheet } from 'react-native';
import { width, height } from '../../constants/dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    BackgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    header: {
        width: '90%',
        height: '10%',
        marginTop: height*0.05,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headerTitle: {
        fontSize: 40,
        fontFamily: 'Lexend Bold',
        color: '#fff',
        textAlign: 'center',
    },

    buttonNotification: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    main: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxProfile: {
        width: '90%',
        height: '90%',
        paddingVertical: '5%',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#1179e2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },

    profile: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileText: {
        fontSize: 20,
        fontFamily: 'Lexend Bold',
        color: '#000',
        textAlign: 'center',
    },

    buttonSignOut: {
        width: '90%',
        height: 60,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },

    buttonSignOutText: {
        fontSize: 25,
        fontFamily: 'Lexend Bold',
        color: '#fff',
        textAlign: 'center',
    },

    footer: {
        width: '100%',
        height: '5%',
        paddingHorizontal: '10%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1179e2',
      },
    
    footerButton: {
        width: 50,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;