import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { Marker, Callout, Circle } from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Titlestyle}>Smart Parking Prototype 1</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.016723794062763,
          longitude: 31.50167085377808,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Circle
          center={{
            latitude: 30.019855082510258, 
            longitude: 31.50183441674032,
          }}
          radius={650}
        />
        <Marker
          coordinate={{
            latitude: 30.016985492848804,
            longitude: 31.50161709548306,
            title: "Pepsie Gate",
          }}
          // On Press, Alert user of the name
          onPress={() => alert("Pepsie Gate")}
          
        >
          <Callout>
            <Text>Pepsie Gate</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 30.01773274853752,
            longitude: 31.499716838626366,
            title: "Pepsie Gate 2",
          }}
          onPress={() => alert("Pepsie Gate 2")}
        >
          <Callout>
            <Text>Pepsie Gate 2</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: 30.0220365198825,
            longitude: 31.497097431687813,
            title: "PVA Parking",
          }}
          onPress={() => alert("PVA Parking")}
        >
          <Callout>
            <Text>PVA Parking</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 30.024246952697407,
            longitude: 31.498748743228862,
            title: "Gate 1 Parking",
          }}
          onPress={() => alert("Gate 1 Parking")}
        >
          <Callout>
            <Text>Gate 1 Parking</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 30.02194652072718,
            longitude: 31.501141532601856,
            title: "Gardens Parking",
          }}
          onPress={() => alert("Gardens Parking")}
        >
          <Callout>
            <Text>Gardens Parking</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 30.0232043658741,
            longitude: 31.501118226211855,
            title: "Watson Parking ",
          }}
          onPress={() => alert("Watson Parking")}
        >
          <Callout>
            <Text>Watson Parking</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Titlestyle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 30,
    textAlign: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
