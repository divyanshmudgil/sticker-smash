import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

interface ImageViewerProps {
    imageSource: ImageSourcePropType,
    selectedImage?: string | undefined,
}

export default function ImageViewer({ imageSource, selectedImage }: ImageViewerProps) {
    return (
        <Image style={styles.image} source={ selectedImage ? { uri: selectedImage } : imageSource} contentFit="cover" transition={1000} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 20,
    },
});