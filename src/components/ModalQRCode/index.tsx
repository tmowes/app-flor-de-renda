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

const ModalQRCode: React.FC<ModalQRCodeProps> = ({ handlerQrcode }) => {
  return (
    <>
      <PopUpOffButton onPress={handlerQrcode}>
        <PopUpOff />
      </PopUpOffButton>
      <DetailsPopUpOn>
        <PopUpHeader>
          <PopUpTitle>QRCODE</PopUpTitle>
          <MinimizeButton onPress={handlerQrcode}>
            <MinimizeIcon />
          </MinimizeButton>
        </PopUpHeader>
      </DetailsPopUpOn>
    </>
  )
}

export default ModalQRCode
