import { FC, ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import AuthProvider from "@/components/provider/auth.provider";

const CartLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <div className="padding-x flex flex-col gap-6 pb-24 pt-9">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Cart</h2>
          <p className="text-sm text-gray-500">Manage your cart products</p>
        </div>
        <Separator />

        {children}
      </div>
    </AuthProvider>
  );
};

export default CartLayout;
