import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="selected option"
    >
        <h3>Selected Options</h3>
    </Modal>
)

export default OptionModal