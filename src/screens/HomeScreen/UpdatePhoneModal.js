import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

const UpdatePhoneModal = ({ setActiveScreen, phoneNumber, setPhoneNumber }) => {
  const [inputPhone, setInputPhone] = useState(formatPhoneNumber(phoneNumber || ""));

  const handlePhoneChange = (text) => {
    const formatted = formatPhoneNumber(text);
    setInputPhone(formatted);
  };

  const handleSave = () => {
    setPhoneNumber(inputPhone);
    setActiveScreen("profile");
  };

  return (
    <View>
      <Text style={styles.topTextStyle}>
        You can enter your phone number to receive SMS notifications. To complete registration,
        confirm a 5-digit code.
      </Text>

      <Text style={[styles.sectionTitle, { textAlign: 'left', fontSize: 16, marginBottom: 20, paddingHorizontal: 10 }]}>Mobile phone</Text>
      <View style={styles.inputWrapper}>
        <View style={styles.countryCodeContainer}>
          <Text style={styles.countryCode}>+1</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="123-456-7890"
          keyboardType="number-pad"
          value={inputPhone}
          onChangeText={handlePhoneChange}
          maxLength={12}
        />
      </View>
      <Text style={styles.formatText}>Format: 123-456-7890</Text>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const formatPhoneNumber = (text) => {

  const cleaned = text.replace(/\D/g, "");


  let formatted = "";
  if (cleaned.length > 0) {
    formatted = cleaned.slice(0, 3);
  }
  if (cleaned.length > 3) {
    formatted += "-" + cleaned.slice(3, 6);
  }
  if (cleaned.length > 6) {
    formatted += "-" + cleaned.slice(6, 10);
  }

  return formatted;
};

export default UpdatePhoneModal;
