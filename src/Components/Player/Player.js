import React, { Component } from "react";
import { Image, StyleSheet, Text, View, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import TrackPlayer from "react-native-track-player";
import { observer } from "mobx-react";

import ProgressBar from "./ProgressBar";
import ControlButton from "./ControlButton";

import TrackStore from "../../Mobx/Track"; // observable
import PlayerStore from "../../Mobx/Player"; // observable

@observer
export default class Player extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    onNext: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onTogglePlayback: PropTypes.func.isRequired
  };

  static defaultProps = {
    style: {}
  };

  render() {
    const { style, onNext, onPrevious, onTogglePlayback } = this.props;
    let middleButtonText = "Play";

    if (
      PlayerStore.playbackState === TrackPlayer.STATE_PLAYING ||
      PlayerStore.playbackState === TrackPlayer.STATE_BUFFERING
    ) {
      middleButtonText = "Pause";
    }

    return (
      <View style={[styles.card, style]}>
        <Image style={styles.cover} source={{ uri: TrackStore.artwork }} />
        <ProgressBar />
        <Text style={styles.title}>{TrackStore.title}</Text>
        <Text style={styles.artist}>{TrackStore.artist}</Text>
        <View style={styles.controls}>
          <ControlButton title={"<<"} onPress={onPrevious} />
          <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
          <ControlButton title={">>"} onPress={onNext} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: "center",
    shadowColor: "black",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 1 }
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: "grey"
  },
  title: {
    marginTop: 10
  },
  artist: {
    fontWeight: "bold"
  },
  controls: {
    marginVertical: 20,
    flexDirection: "row"
  }
});
