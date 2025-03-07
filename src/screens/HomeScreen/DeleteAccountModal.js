import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import styles from "./style";
import { VectorIcon } from "../../components";
import colorConstant from "../../utility/colorConstant";

const DeleteAccountModal = ({ visible, onClose, onDelete }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>

          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={onClose} style={styles.backButton}>
              <VectorIcon iconName="arrow-left" color={colorConstant.BLACK_COLOR} iconSize={24} iconType ={"FontAweSome"}/>
            </TouchableOpacity>
            <Text style={[styles.modalTitle, { flex: 1, textAlign: "center" }]}>
              Delete my profile
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <VectorIcon iconName="close" color={colorConstant.BLACK_COLOR} iconSize={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <Text style={styles.warningText}>
            By confirming your action by clicking the button, you will permanently delete your account.
            This action is irreversible. All your data will be lost, and you will no longer be able to access
            your information.
          </Text>


          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text style={styles.deleteButtonText}>Confirm delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteAccountModal;
