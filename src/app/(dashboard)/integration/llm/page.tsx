"use client"
import { Button } from "@/src/components/ui/Button"
import { Icon } from "@iconify/react"
import { useState } from "react";
import { AddLlmIntegrationModal } from "../../../../components/ui/modal/AddLlmIntegrationModal";

const Page = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="mt-6 p-9 bg-white">
      <div className="header">
        <h1 className="text-4xl font-medium text-[#01D2B3]">
          LLM Integration
        </h1>
        <p className="text-[#655E5E] my-2">
          Make Sure Your Bot Know What He Doing Next
        </p>
        <hr />
      </div>

      <div className="mt-6">
        <h1 className="mb-2.5">Bot Father</h1>
      </div>

      <div className="flex items-center w-full rounded-lg border border-[#575555] px-6 py-4">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4">
            <Icon icon="mingcute:grok-2-fill" className="text-white w-8 h-8 p-1 rounded-full" />
        </div>
        <div className="w-40 text-gray-500 font-normal">
            <p>Nama LLM</p>
            <p className="text-sm font-light">Model LLM</p>
        </div>
        <div className="h-6 w-px bg-gray-500 mx-7"></div>
        <div className="flex-1 text-gray-500">ajkgd adiuechehn</div>
      </div>
      <div className="selection-info flex items-center justify-end mt-5 p-5 bg-[#01D2B3] rounded-lg text-gray-500 font-medium">
        <div className="flex">
          <Button variant="custom" label="Tambahkan Bot" onClick={() => setOpenModal(true)}/>
          <AddLlmIntegrationModal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
      </div>
    </div>
  )
}

export default Page