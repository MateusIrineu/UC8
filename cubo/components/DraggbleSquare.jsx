import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
} from "react-native-reanimated";

export default function DraggbleSquare() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);
  const backgroundColor = useSharedValue("#3498db");

// INÍCIO DO GESTO PAN
  const panGesture = Gesture.Pan()

    .onStart(() => {
      startX.value = translateX.value;
      startY.value = translateY.value;
    })

    .onUpdate((event) => {
      translateX.value = startX.value + event.translationX;
      translateY.value = startY.value + event.translationY;
    })

    .onEnd(() => {
      translateX.value = withSpring(translateX.value);
      translateY.value = withSpring(translateY.value);
    });
// FIM DO GESTO PAN


// INICIO GESTO TAP
  const tapGesture = Gesture.Tap().onEnd(() => {
    backgroundColor.value = backgroundColor.value === "#3498db" ? "#e74c3c" : "#3498db"
  })
// FIM DO GESTO TAP


// INICIO GESTO DE PINÇA(ZOOM)
const pinchGesture = Gesture.Pinch().onUpdate((event) => {
  scale.value = interpolate(event.scale, [0.5, 3], [0.5, 3]);
});
// FIM DO GESTO PINÇA


// INICIO DO GESTO ROTAÇÃO
const rotationGesture = Gesture.Rotation().onUpdate((event) => {
  rotation.value = event.rotation;
})
// FIM DO GESTO ROTATION


  const composedGesture = Gesture.Simultaneous(Gesture.Exclusive(panGesture, tapGesture, pinchGesture, rotationGesture),
);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },

      { scale: scale.value }
    ],
    backgroundColor: backgroundColor.value,
  }));

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View style={[styles.square, animatedStyle]} />
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
