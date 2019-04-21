import {StyleSheet} from 'react-native';

export const Colors = {
    dark: 'black',
    light: 'white'
};

const baseContainerStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:30
};

const baseBoxStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150,
}

const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyle,
        borderColor: Colors.dark
    }
});

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyle,
        borderColor: Colors.light
    }
})

export default getStyleSheet = (useDarkTheme) => {
    console.log({useDarkTheme})
    return useDarkTheme ? darkStyleSheet : lightStyleSheet
}
