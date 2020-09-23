import React from 'react'

import {
  PopUpOffButton,
  MinimizeButton,
  PopUpOff,
  DetailsPopUpOn,
  PopUpHeader,
  PopUpTitle,
  MinimizeIcon,
} from './styles'
import { ModalQRCodeProps } from './types'

const ModalQRCode: React.FC<ModalQRCodeProps> = ({
  modalTitle,
  handleQrcode,
}) => {
  return (
    <>
      <PopUpOffButton onPress={handleQrcode}>
        <PopUpOff />
      </PopUpOffButton>
      <DetailsPopUpOn>
        <PopUpHeader>
          <PopUpTitle>{modalTitle}</PopUpTitle>
          <MinimizeButton onPress={handleQrcode}>
            <MinimizeIcon />
          </MinimizeButton>
        </PopUpHeader>
      </DetailsPopUpOn>
    </>
  )
}

export default ModalQRCode
