import Logo from "@/components/misc/logo";
import Image from "next/image";
import { FC, ReactNode, Suspense } from "react";

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="padding-x relative flex h-full min-h-screen w-full max-md:flex-col">
      <Image
        alt="auth background image"
        src="/auth-bg.svg"
        width={1000}
        height={1000}
        className="fixed left-0 top-0 -z-10 h-full w-full object-cover"
      />
      <div className="fixed flex h-full min-h-screen flex-col justify-center max-md:hidden">
        <Logo className="w-full max-w-[15rem] fill-white" />
        <p className="text-sm font-medium text-fuchsia-300">The purple pill</p>
      </div>
      <div className="h-24 w-full max-md:mx-auto max-md:max-w-sm">
        <Logo className="w-full max-w-[12.5rem] fill-white md:hidden" />
      </div>
      <div className="flex h-full min-h-screen w-full flex-col items-center py-12 md:justify-center md:py-20">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
};

export default AuthLayout;
