import React, { useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import colorConstant from "../../utility/colorConstant";

const CommunicationSection = ({ setActiveScreen, email, setEmail }) => {
  const [newEmail, setNewEmail] = useState(email);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setIsModified(newEmail !== email);
  }, [newEmail, email]);

  const handleSave = () => {
    setEmail(newEmail);
    setActiveScreen("profile");
  };

  return (
    <View>
      <Text style={styles.topTextStyle}>Your email address is required and used in our communications.If you wish to change Your
        email address, we will send you a 5-digit code that you will need to confirm.
      </Text>
      <Text style={[styles.sectionTitle, { textAlign: 'left', fontSize: 16, marginBottom: 20, paddingHorizontal: 10 }]}>Email address</Text>
      <TextInput
        style={styles.inputContainer}
        value={newEmail}
        onChangeText={setNewEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={[styles.buttonView, isModified ? { backgroundColor: "black" } : { backgroundColor: colorConstant.GREY_COLOR }]}
        onPress={handleSave}
        disabled={!isModified}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

    </View>
  );
};

export default CommunicationSection;
