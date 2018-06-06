import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TrackPlayer from "react-native-track-player";

import PlayerComponent from "../Components/Player";
import playlistData from "../data/playlist.json";
import PlayerStore from "../Mobx/Player";

class TestScreen extends React.Component {
  static navigationOptions = {
    title: "Test Space"
  };

  componentDidMount() {
    console.log("test screen has been mounted");
  }

  togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      TrackPlayer.reset();
      await TrackPlayer.add(playlistData);
      TrackPlayer.play();
    } else if (PlayerStore.playbackState === TrackPlayer.STATE_PAUSED) {
      TrackPlayer.play();
    } else {
      TrackPlayer.pause();
    }
  };

  skipToNext = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (_) {
      TrackPlayer.reset();
    }
  };

  skipToPrevious = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Integrating the layer</Text>
        <PlayerComponent
          onNext={this.skipToNext}
          onPrevious={this.skipToPrevious}
          onTogglePlayback={this.togglePlayback}
        />
      </View>
    );
  }
}

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 30
  }
});
