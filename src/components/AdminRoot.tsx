import { Outlet } from "react-router-dom";
import { AdminHeader } from "./AdminHeader";
import { AdminSideMenu } from "./AdminSideMenu";

export function AdminRoot() {
  return(
    <>
      <AdminHeader />
      <main className="flex">
        <AdminSideMenu />
        <Outlet />
      </main>
    </>
  )
}