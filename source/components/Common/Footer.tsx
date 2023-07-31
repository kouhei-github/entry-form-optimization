import {useState} from 'react'
import ModalNotFollow from '@/components/Common/parts/ModalNotFollow'
import FooterProtect from '@/components/Common/FooterProtect'
import Terms from '@/components/Common/Terms'

export default function Footer() {
  const [openProduct, setOpenProduct] = useState<boolean>(false)
  const [openTerms, setOpenTerms] = useState<boolean>(false)

  return (
      <footer className={"text-[1.6vw] text-[#333] w-2/3 mx-auto"}>
        <div className={"text-left text-[12px] flex justify-around space-x-5 "}>
          {openProduct ? (
            <ModalNotFollow modalState={openProduct} setTarget={setOpenProduct}>
              <FooterProtect />
            </ModalNotFollow>
          ) : (
            <>
              {!openTerms ? (<><p onClick={() => setOpenProduct(true)} className={"text-[rgb(22,161,255)] hover:underline border-r w-max"}>個人情報保護方針</p></>) : (<></>) }
            </>
          )}

          {openTerms ? (
              <ModalNotFollow modalState={openTerms} setTarget={setOpenTerms}>
                <Terms />
              </ModalNotFollow>
          ) : (
            <>
              {!openProduct ? (<><p onClick={() => setOpenTerms(true)} className={"text-[rgb(22,161,255)] hover:underline border-r w-max"}>個人情報の取扱い</p></>) : (<></>) }
            </>
          )}
        </div>

      </footer>
  )
}
