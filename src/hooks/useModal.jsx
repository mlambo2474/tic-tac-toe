import React, { useState } from 'react'

const useModal = () => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState("this is a modal")

    const handleModal = (content) =>{
        setModal(!modal);
        if(content){
            setModalContent(content)

        }
    }
  return {modal, modalContent, handleModal}
}

export default useModal;
