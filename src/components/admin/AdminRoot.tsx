import { Outlet } from "react-router-dom";
import { AdminHeader } from "./layout/AdminHeader";
import { AdminSideMenu } from "./layout/AdminSideMenu";

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