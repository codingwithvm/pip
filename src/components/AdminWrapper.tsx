import React from "react";
import { AdminDashboardPresentation } from "./AdminDashboardPresentation";

export function AdminWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[100px] w-full h-full rounded-tl-[40px] bg-[#D9D9D9]/20 py-[40px] px-[40px] font-[Montserrat]">
      <AdminDashboardPresentation />
      {children}
    </div>
  )
}