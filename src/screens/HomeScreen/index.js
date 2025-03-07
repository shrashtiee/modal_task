import React, { useState } from "react";
import { View } from "react-native";
import styles from "./style";
import HomeView from "./view";


const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <HomeView />
    </View>
  );
};

export default HomeScreen;
