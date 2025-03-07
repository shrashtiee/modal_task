import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { VectorIcon } from "../../components";
import colorConstant from "../../utility/colorConstant";
import EditUsernameSection from "./EditUsernameSection";
import DeleteAccountModal from "./DeleteAccountModal";

const ProfileSection = ({
  setActiveScreen,
  firstName,
  lastName,
  username,
  setUsername,
  email,
  phoneNumber,
}) => {
  const [usernameModalVisible, setUsernameModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <>
      <View style={{ height: 2, backgroundColor: "#000", width: "100%", marginBottom: 40 }} />

      <TouchableOpacity style={styles.inputContainer} onPress={() => setActiveScreen("editName")}>
        <VectorIcon iconName="edit" color={colorConstant.BLACK_COLOR} iconSize={18} style={{ paddingLeft: 10 }} />
        <Text style={styles.inputText}>{firstName} {lastName}</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Login</Text>

      <TouchableOpacity style={[styles.inputContainer, { marginTop: 40 }]} onPress={() => setUsernameModalVisible(true)}>
        <VectorIcon iconName="edit" color={colorConstant.BLACK_COLOR} iconSize={18} style={{ paddingLeft: 10 }} />
        <Text style={styles.inputText}>{username}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.inputContainer, { marginTop: 10 }]} onPress={() => setActiveScreen("login")}>
        <VectorIcon iconName="edit" color={colorConstant.BLACK_COLOR} iconSize={18} style={{ paddingLeft: 10 }} />
        <Text style={styles.inputText}>Modify your password</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Communication</Text>

      <TouchableOpacity style={[styles.inputContainer, { marginTop: 40 }]} onPress={() => setActiveScreen("communication")}>
        <VectorIcon iconName="edit" color={colorConstant.BLACK_COLOR} iconSize={18} style={{ paddingLeft: 10 }} />
        <Text style={styles.inputText}>{email}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.inputContainer, { marginTop: 10 }]} onPress={() => setActiveScreen("phone")}>
        <VectorIcon iconName="edit" color={colorConstant.BLACK_COLOR} iconSize={18} style={{ paddingLeft: 10 }} />
        <Text style={styles.inputText}>{phoneNumber || "Phone number"}</Text>
      </TouchableOpacity>

      {/* Delete Profile Button */}
      <TouchableOpacity onPress={() => setDeleteModalVisible(true)}>
        <Text style={styles.deleteProfileText}>Delete my profile</Text>
      </TouchableOpacity>

      {/* Modals */}
      <EditUsernameSection
        visible={usernameModalVisible}
        setVisible={setUsernameModalVisible}
        username={username}
        setUsername={setUsername}
        setActiveScreen={setActiveScreen}
      />

      <DeleteAccountModal
        visible={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onDelete={() => {
          setDeleteModalVisible(false);
          console.log("Account Deleted");
        }}
      />
    </>
  );
};

export default ProfileSection;
