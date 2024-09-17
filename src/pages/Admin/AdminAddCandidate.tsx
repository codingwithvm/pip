import { FormAddCandidate } from "../../components/admin/forms/FormAddCandidate";
import { AdminWrapper } from "../../components/admin/layout/AdminWrapper";

export function AdminAddCandidate() {
  return (
    <AdminWrapper>
      <div className="w-full p-[40px] rounded-[30px] bg-white">
        <FormAddCandidate />
      </div>
    </AdminWrapper>
  )
}