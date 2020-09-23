import React from 'react'
import PaymentModal from './PaymentModal'
import {
  DetailsPopUpOn,
  MinimizeButton,
  MinimizeIcon,
  PopUpHeader,
  PopUpOff,
  PopUpOffButton,
  PopUpTitle,
} from './styles'
import { ModalProps } from './types'

const Modal: React.FC<ModalProps> = ({ modalTitle, handleModal }) => {
  return (
    <>
      <PopUpOffButton onPress={handleModal}>
        <PopUpOff />
      </PopUpOffButton>
      <DetailsPopUpOn>
        <PopUpHeader>
          <PopUpTitle>{modalTitle}</PopUpTitle>
          <MinimizeButton onPress={handleModal}>
            <MinimizeIcon />
          </MinimizeButton>
        </PopUpHeader>
        <PaymentModal />
      </DetailsPopUpOn>
    </>
  )
}

export default Modal
