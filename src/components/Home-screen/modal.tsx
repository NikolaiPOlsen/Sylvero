import { Modal, Text, TextInput } from 'react-native';

export const HomeModal = (showModal: boolean, setShowModal: (show: boolean) => void) => {
    return (
        <Modal visible={showModal} onRequestClose={() => setShowModal(false)} animationType='slide' transparent>
            <Text>Kundens telefonnummer:</Text>
            <TextInput placeholder='Telefonnummer' />
        </Modal>
    );
}