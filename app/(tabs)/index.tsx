import { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function HomeScreen() {
  const map = useRef<MapView>(null);
  return (
    <View style={styles.titleContainer}>
      <MapView
        ref={map}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        camera={{
          center: {
            latitude: 40.3,
            longitude: 35,
          },
          pitch: 90,
          heading: 0,
          altitude: 500,
          zoom: 4.8,
        }}
        onUserLocationChange={(e) => {}}
        onPress={(e) => {}}
        onMapReady={() => {}}
        pitchEnabled
        rotateEnabled
        scrollEnabled
        zoomEnabled
        zoomControlEnabled
      >
        <>
          {/* Markers */}
          {/* <BuildingMarkers /> */}
        </>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
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
    position: "absolute",
  },
  map: {
    flex: 1,
  },
});
