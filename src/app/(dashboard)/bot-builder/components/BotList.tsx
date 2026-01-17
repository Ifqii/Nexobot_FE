import { Cards } from "@/src/components/ui/Cards";
import { Icon } from "@iconify/react";

const BotList = () => {
  return (
    <div className="agent-list flex gap-5 mt-6">
      <div className="flex-2">
        <div className="grid grid-cols-2 gap-5">
          <Cards className="p-3">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center justify-center">
                <Icon icon="bx:bot" width={24} />
                <p>Bot 1</p>
              </div>
              <Icon icon="mdi:dots-vertical" width={24} />
            </div>

            <div className="describe bg-[#EFEFEF] rounded-lg p-2 mt-4 text-[16px] text-[#655E5E]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              officia cupiditate modi voluptate perspiciatis velit ipsam a
              ratione blanditiis neque!
            </div>
            <div className="flex justify-end">Toggle</div>
          </Cards>
          <Cards className="p-3">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center justify-center">
                <Icon icon="bx:bot" width={24} />
                <p>Bot 1</p>
              </div>
              <Icon icon="mdi:dots-vertical" width={24} />
            </div>

            <div className="describe bg-[#EFEFEF] rounded-lg p-2 mt-4 text-[16px] text-[#655E5E]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              officia cupiditate modi voluptate perspiciatis velit ipsam a
              ratione blanditiis neque!
            </div>
            <div className="flex justify-end">Toggle</div>
          </Cards>
        </div>
      </div>
      <div className="flex-1">
        <Cards className="p-4">History Log</Cards>
      </div>
    </div>
  );
};

export { BotList };
