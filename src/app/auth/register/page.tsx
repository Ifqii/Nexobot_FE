"use client";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { useRouter } from "next/navigation";
import { SwitchTabs } from "@/src/components/SwitchTabs";

const page = () => {
  const router = useRouter();

  return (
    <div className="flex w-full h-screen items-center">
      {/* left side */}
      <div className="flex flex-col items-center w-1/2 p-20">
        <h3 className="text-[#525252] text-4xl font-bold my-5">
          Welcome Back!!
        </h3>

        <div className="w-full h-1/2 flex flex-col justify-center items-center gap-3">
          <SwitchTabs
            active="register"
            onChange={(tab) => {
              router.push(`/auth/${tab}`);
            }}
          />

          {/* form */}
          <form action="">
            <div className="w-[400px] h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#F4FFFD] border rounded-3xl border-gray-400">
              <div>
                <p className="text-xs">Masukan nama anda</p>
                <div className="flex gap-2">
                  <Input
                    placeholder="First Name"
                    type="text"
                    variant="primary"
                  />
                  <Input
                    placeholder="Last Name"
                    type="text"
                    variant="primary"
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="text-xs">Masukan email anda</p>
                <Input
                  placeholder="First Name"
                  type="email"
                  variant="primary"
                />
              </div>
              <div className="w-full">
                <p className="text-xs place-self-start">
                  Masukan password anda
                </p>
                <Input
                  placeholder="First Name"
                  type="password"
                  variant="primary"
                />
              </div>
              <div className="w-full">
                <p className="text-xs place-self-start">
                  Masukan ulang password anda
                </p>
                <Input
                  placeholder="First Name"
                  type="password"
                  variant="primary"
                />
              </div>
            </div>

            <div className="mt-3">
              <Button label="Continue" variant="primary" />
            </div>
          </form>
          {/* Another Login */}
          <div className="flex items-center gap-3">
            <p className="text-xs font-medium text-gray-500">
              or continue with
            </p>
          </div>

          <div className="flex gap-5">
            <div className="w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer">
              Gugel
            </div>
            <div className="w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer">
              Fesnuk
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="w-1/2 h-full bg-[#01D2B3]"></div>
    </div>
  );
};

export default page;
