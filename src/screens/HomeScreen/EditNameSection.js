import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import colorConstant from "../../utility/colorConstant";

const EditNameSection = ({ setActiveScreen, firstName, lastName, setFirstName, setLastName }) => {
  const [tempFirstName, setTempFirstName] = useState(firstName);
  const [tempLastName, setTempLastName] = useState(lastName);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  useEffect(() => {
    const hasChanged = tempFirstName.trim() !== firstName.trim() || tempLastName.trim() !== lastName.trim();
    setIsSaveEnabled(hasChanged);
  }, [tempFirstName, tempLastName, firstName, lastName]);

  const handleSaveName = () => {
    if (isSaveEnabled) {
      setFirstName(tempFirstName.trim());
      setLastName(tempLastName.trim());
      setActiveScreen("profile");
    }
  };

  return (
    <View style={styles.modalBody}>
      <Text style = {styles.topTextStyle}>We will display your name alongside each of your interactions, enhancing the personalization and recognition of your profile.</Text>
      <Text style={[styles.sectionTitle, {textAlign:'left', fontSize: 16, marginBottom:20}]}>Your name*</Text>
      <TextInput 
        style={styles.inputContainer}
        value={tempFirstName}
        onChangeText={setTempFirstName}
      />

      <TextInput 
        style={styles.inputContainer}
        value={tempLastName}
        onChangeText={setTempLastName}
      />

      <TouchableOpacity 
        style={[styles.buttonView, { 
          backgroundColor: isSaveEnabled ? colorConstant.BLACK_COLOR : colorConstant.GREY_COLOR,
          opacity: isSaveEnabled ? 1 : 0.5 
        }]} 
        onPress={handleSaveName}
        disabled={!isSaveEnabled}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditNameSection;
