import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const MyModal = () => {
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = ()=>{
        setModalVisible(!isModalVisible)
    };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Show Modal</Text>
      </TouchableOpacity>

      <Modal
      animationType='fade'
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}
      
      style={styles.ModalContainer}>
        <View style={styles.modalContent}>
            <Text>This is our modal</Text>
            <TouchableOpacity onPress={toggleModal}>
                <Text>Close Modal</Text>
            </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default MyModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      modalContent: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
})