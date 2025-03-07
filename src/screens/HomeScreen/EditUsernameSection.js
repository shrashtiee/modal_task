import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import styles from "./style";
import { VectorIcon } from "../../components";
import colorConstant from "../../utility/colorConstant";

const EditUsernameSection = ({ visible, setVisible, username, setUsername, setActiveScreen }) => {
  const [tempUsername, setTempUsername] = useState(username);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const [error, setError] = useState("");

  const validateUsername = (text) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;

    if (!specialCharRegex.test(text)) {
      setError("Username must contain at least one special character.");
      return false;
    }
    if (!numberRegex.test(text)) {
      setError("Username must contain at least one number.");
      return false;
    }
    setError("");
    return true;
  };

  useEffect(() => {
    setIsSaveEnabled(tempUsername !== username && validateUsername(tempUsername));
  }, [tempUsername, username]);

  const handleSaveUsername = () => {
    if (isSaveEnabled) {
      setUsername(tempUsername);
      setVisible(false);
      setActiveScreen("profile"); 
    }
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setVisible(false)} style={styles.backButton}>
              <VectorIcon
                iconName={"arrow-left"}
                color={colorConstant.BLACK_COLOR}
                iconSize={24}
                iconType={"FontAweSome"}
              />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Edit Username</Text>

            <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
              <VectorIcon iconName={"close"} color={colorConstant.BLACK_COLOR} iconSize={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <Text style={styles.topTextStyle}>
            Your username will be used to create your profile address. Please choose a unique name that adheres to the allowed character format.
            Note that if you change your username, active references to your profile may not work.
          </Text>

          <Text style={[styles.sectionTitle, { textAlign: "left", fontSize: 16, marginBottom: 10, paddingLeft: 10 }]}>
            Update Username
          </Text>

          <TextInput
            style={styles.inputContainer}
            value={tempUsername}
            onChangeText={setTempUsername}
            placeholder="Enter new username"
          />

          {/* Show validation error */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity
            style={[styles.buttonView, { backgroundColor: isSaveEnabled ? colorConstant.BLACK_COLOR : colorConstant.GREY_COLOR }]}
            onPress={handleSaveUsername}
            disabled={!isSaveEnabled}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

export default EditUsernameSection;
