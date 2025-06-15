import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import Parkitup_logo from "@/components/assets/Parkitup_logo.png";

export default function LoginPage() {
  return (
    <div className="bg-[#141a24] flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="top-0 fixed left-0 flex items-center">
        <Image src={Parkitup_logo} alt='logo' height={100} width={100}/>
        <span className="text-[#1985df] font-semibold md:text-3xl text-2xl">Park It Up</span>
      </div>
      <div className="w-[28rem] max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}
