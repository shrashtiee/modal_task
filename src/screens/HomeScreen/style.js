import { StyleSheet } from "react-native";
import colorConstant from "../../utility/colorConstant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorConstant.WHITE_COLOR,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: "#000"
  },
  buttonText: {
    fontSize: 16,
    color: "yellow",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: colorConstant.WHITE_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: "100%",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    position: "relative",
  },

  modalTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  // modalHeader: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottom: 20,
  // },
  // modalTitle: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   color: colorConstant.BLACK_COLOR,
  // },
  closeButton: {
    padding: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: colorConstant.BLACK_COLOR,
    marginTop: 16,
    marginBottom: 6,
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 15,
    backgroundColor: colorConstant.WHITE_COLOR,
    borderRadius: 30,
    marginVertical: 6,
    borderWidth: 0.6,
    width: "95%",
    alignSelf: 'center',
    paddingLeft: 20,
  },
  inputText: {
    fontSize: 16,
    color: colorConstant.BLACK_COLOR,
    marginLeft: 15,
  },
  input: {
    width: "100%",
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colorConstant.BLACK_COLOR,
    borderRadius: 30,
    overflow: "hidden",
    width: "100%",
  },
  countryCodeContainer: {
    backgroundColor: colorConstant.BLACK_COLOR,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colorConstant.BLACK_COLOR,
    paddingLeft: 10,
  },
  formatText: {
    fontSize: 12,
    color: colorConstant.BLACK_COLOR,
    marginTop: 10,
    alignSelf: "flex-start",
    paddingLeft: 15
  },
  saveButton: {
    backgroundColor: colorConstant.BLACK_COLOR,
    paddingVertical: 12,
    width: "100%",
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  deleteProfileText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "orange",
    marginTop: 16,
    marginBottom: 6,
    textAlign: 'center'
  },
  topTextStyle: {
    fontSize: 14,
    color: "#000",
    marginTop: 16,
    marginBottom: 6,
    paddingHorizontal: 10
  },
  forgetPasswordText: {
    fontSize: 14,
    color: "orange",
    marginTop: 16,
    marginBottom: 6,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  backButton: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  closeButton: {
    position: "absolute",
    right: 10,
  },

  divider: {
    height: 1,
    backgroundColor: colorConstant.BLACK_COLOR,
    marginVertical: 10,
  },
  warningText: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
   marginVertical:40
  },
  deleteButton: {
    backgroundColor: colorConstant.BLACK_COLOR,
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
