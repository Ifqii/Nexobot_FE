import BarChartDashboard from "@/src/components/ui/BarChart";
import { Icon } from "@iconify/react";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Statistik */}
      <div className="grid grid-cols-3 gap-5 text-[#655E5E]">
        <div className="flex flex-col justify-between rounded-lg w-full h-50 bg-white shadow p-5 hover:bg-linear-to-r from-[#61EFDA] to-[#98FFF0] cursor-pointer">
          <div className="flex gap-4 items-center">
            <span  className="bg-white rounded-xl w-10 h-10 flex justify-center items-center">

            <Icon icon="fluent:bot-24-filled" width={20} />
            </span>
            <p>Total Bot Aktif</p>
          </div>
          <p className="text-[40px]">10 Bot</p>
        </div>
        <div className="flex flex-col justify-between rounded-lg w-full h-50 bg-white shadow p-5 hover:bg-linear-to-r from-[#61EFDA] to-[#98FFF0] cursor-pointer">
          <div className="flex gap-4 items-center">
            <Icon icon="material-symbols:interactive-space" width={20} className="bg-white rounded-xl" />
            <p>Total Agent</p>
          </div>
          <p className="text-[40px]">5 Agent</p>
        </div>
        <div className="flex flex-col justify-between rounded-lg w-full h-50 bg-white shadow p-5 hover:bg-linear-to-r from-[#61EFDA] to-[#98FFF0] cursor-pointer">
          <div className="flex gap-4 items-center">
            <Icon icon="tabler:message-filled" width={20} className="bg-white rounded-xl" />
            <p>Total Pesan</p>
          </div>
          <p className="text-[40px]">250 Pesan</p>
        </div>
      </div>

      {/* Bagian Chart */}
      <div className="w-full h-100 rounded-lg shadow my-5">
        <BarChartDashboard />
      </div>

      <div className="grid grid-cols-3 gap-5 text-[#655E5E]">
        <div className="rounded-lg w-full h-auto bg-white shadow p-5">
          <p className="w-40 mb-3">Integration Platform Connected</p>
          <div className="flex h-20 justify-center items-center border-4 border-[#CCCCCC] hover:border-[#A4F5A6] rounded-lg mb-3 cursor-pointer">

          </div>
          <div className="flex h-20 justify-center items-center border-4 border-[#CCCCCC] hover:border-[#A4F5A6] rounded-lg mb-3 cursor-pointer">

          </div>
          <div className="flex h-20 justify-center items-center border-4 border-[#CCCCCC] hover:border-[#A4F5A6] rounded-lg mb-3 cursor-pointer">

          </div>
          <div className="flex h-20 justify-center items-center border-4 border-[#CCCCCC] hover:border-[#A4F5A6] rounded-lg mb-3 cursor-pointer">

          </div>
        </div>
        <div className="rounded-lg w-full h-auto bg-white shadow p-5">
          <p className="w-40 mb-3">Integration Platform Connected</p>
          <div className="flex h-20 justify-center items-center border-4 border-[#CCCCCC] hover:border-[#A4F5A6] rounded-lg mb-3 cursor-pointer">

          </div>
          <div className="flex h-20 justify-center items-center border-4 border-[#CCCCCC] hover:border-[#A4F5A6] rounded-lg mb-3 cursor-pointer">

          </div>
          <div className="flex h-20 justify-center items-center border-4 border-[#CCCCCC] hover:border-[#A4F5A6] rounded-lg mb-3 cursor-pointer">

          </div>
        </div>
        <div className="rounded-lg w-full h-auto bg-white shadow p-5">
          <p className="w-40">Active Product</p>
        </div>
      </div>
    </div>
  );
};

export default page;
