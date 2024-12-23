import React from "react";
import PropTypes from "prop-types";
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import Modal from "../modal";
import styles from "./styles";

const AddModal = ({
    isOpen,
    closeModal,
    takePhoto,
    selectFromCameraRoll
}) => (
    <Modal 
        isOpen={isOpen}
        closeModal={closeModal}>
        <TouchableOpacity
            onPress={() => takePhoto()}>
            <Entypo style={styles.icon} name="camera"/>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => selectFromCameraRoll()}>
            <Entypo style={styles.icon} name="image"/>
        </TouchableOpacity>
    </Modal>
);
AddModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    takePhoto: PropTypes.func.isRequired,
    selectFromCameraRoll: PropTypes.func.isRequired
}
export default AddModal;