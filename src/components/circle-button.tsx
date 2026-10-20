import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
    onPress: () => void,
}

export default function CircleButton({ onPress }: Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <MaterialIcons name="add" size={38} color="#25292e" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 84,
        height: 84,
        borderRadius: 42,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        padding: 3,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff',
    }
})