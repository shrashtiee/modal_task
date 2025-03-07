import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./style";
import { VectorIcon } from "../../components";  // Import your icon component
import colorConstant from "../../utility/colorConstant";

const LoginSection = ({ setActiveScreen }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Text style={styles.topTextStyle}>
        Your password must contain at least 6 characters and a combination of numbers, letters, and special characters.
      </Text>

      <Text style={[styles.sectionTitle, { textAlign: 'left', fontSize: 16, marginBottom: 20, paddingLeft: 10 }]}>Update password*</Text>
      <View style={[styles.inputWrapper, { marginVertical: 10 }]}>
        <TextInput
          style={[styles.inputContainer, { borderWidth: 0, width: '90%' }]} secureTextEntry={!showCurrentPassword}
          value={currentPassword}
          onChangeText={setCurrentPassword}
          placeholder="Enter current password"
        />
        <TouchableOpacity onPress={() => setShowCurrentPassword(!showCurrentPassword)}>
          <VectorIcon
            iconName={showCurrentPassword ? "eye-slash" : "eye"}
            color={colorConstant.BLACK_COLOR}
            iconSize={22}
            iconType={"FontAweSome"}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.inputWrapper, { marginVertical: 10 }]}>
        <TextInput
          style={[styles.inputContainer, { borderWidth: 0, width: '90%' }]}
          secureTextEntry={!showNewPassword}
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Enter new password"
        />
        <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
          <VectorIcon
            iconName={showCurrentPassword ? "eye-slash" : "eye"}
            color={colorConstant.BLACK_COLOR}
            iconSize={22}
            iconType={"FontAweSome"}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.inputWrapper, { marginVertical: 10 }]}>
        <TextInput
          style={[styles.inputContainer, { borderWidth: 0, width: '90%' }]}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm new password"
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <VectorIcon
            iconName={showCurrentPassword ? "eye-slash" : "eye"}
            color={colorConstant.BLACK_COLOR}
            iconSize={22}
            iconType={"FontAweSome"}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgetPasswordText}>Forget password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonView}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

    </>
  );
};

export default LoginSection;
