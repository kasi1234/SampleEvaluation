import { Platform } from "react-native";

export const Colors = {
    black: '#000000',
    body: '#4a4a4a',
    border: '#cecece',
    disable: '#00000033',
    primary: '#0f61a9',
    white: '#ffffff',
    lightgray: '#707070',
  };

export const Navigation = {
    primary: {
      headerStyle: {
        backgroundColor: Colors.white,
        height: Platform.select({ android: 80, ios: 48 }),
      },
      headerTitleStyle: {
        textColor: Colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    }
  };

  export default { Colors, Navigation };