import React, { useState } from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import styles from "./style";
import { VectorIcon } from "../../components";
import colorConstant from "../../utility/colorConstant";
import ProfileSection from "./ProfileSection";
import LoginSection from "./LoginSection";
import CommunicationSection from "./CommunicationSection";
import EditNameSection from "./EditNameSection";
import UpdatePhoneSection from "./UpdatePhoneModal";

const HomeView = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [activeScreen, setActiveScreen] = useState("profile");

  const [firstName, setFirstName] = useState("Smith");
  const [lastName, setLastName] = useState("John");
  const [username, setUsername] = useState("john_smith");
  const [email, setEmail] = useState("smith1234@yopmail.com");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              {activeScreen !== "profile" && (
                <TouchableOpacity
                  onPress={() => setActiveScreen("profile")}
                  style={styles.backButton}
                >
                  <VectorIcon
                    iconName={"arrow-left"}
                    color={colorConstant.BLACK_COLOR}
                    iconSize={24}
                    iconType={"FontAweSome"}
                  />
                </TouchableOpacity>
              )}

              <Text style={[styles.modalTitle, { flex: 1, textAlign: "center" }]}>
                Update Profile
              </Text>

              <TouchableOpacity
                onPress={() => setActiveScreen("profile")}
                style={styles.closeButton}
              >
                <VectorIcon
                  iconName={"close"}
                  color={colorConstant.BLACK_COLOR}
                  iconSize={24}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.divider} />
            {activeScreen === "profile" && (
              <ProfileSection
                setActiveScreen={setActiveScreen}
                firstName={firstName}
                lastName={lastName}
                username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
              />
            )}
            {activeScreen === "editName" && (
              <EditNameSection
                setActiveScreen={setActiveScreen}
                firstName={firstName}
                lastName={lastName}
                setFirstName={setFirstName}
                setLastName={setLastName}
              />
            )}
            {activeScreen === "login" && <LoginSection setActiveScreen={setActiveScreen} />}
            {activeScreen === "communication" && (
              <CommunicationSection setActiveScreen={setActiveScreen} email={email} setEmail={setEmail} />
            )}
            {activeScreen === "phone" && (
              <UpdatePhoneSection
                setActiveScreen={setActiveScreen}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeView;
