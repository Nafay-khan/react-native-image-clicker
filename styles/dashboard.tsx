import { StyleSheet } from "react-native";

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
      height: 500,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 20
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white'
    },
    capturedImage: {
      width: 300,
      height: 300,
      marginBottom: 10,
      alignSelf: 'center',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });

  export default styles