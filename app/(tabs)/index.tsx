import * as Location from "expo-location";
import { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function HomeScreen() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const locationSent = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Location",
        textBody: "Permission to access location was denied",
      });
      setPosition({ latitude: 0, longitude: 0 });
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log("location", location);
    const { latitude, longitude } = location.coords;
    setPosition({ latitude, longitude });
  };
  const map = useRef<MapView>(null);
  console.log("position", position);

  useEffect(() => {
    locationSent();
  }, []);
  return (
    <View>
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
        {position.latitude !== 0 && position.longitude !== 0 && (
          <Marker
            coordinate={{
              latitude: 40.3,
              longitude: 35,
            }}
            title="Your Location"
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 30,
  },
});
