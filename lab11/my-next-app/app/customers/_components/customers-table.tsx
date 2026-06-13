import { customerService } from "@/lib/services/customer-service";
import { deleteCustomerAction } from "../actions";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";

export default async function CustomersTable() {
  const customers = await customerService.getAll();

  return (
    <table className="table-auto w-full max-w-4xl">
      <thead>
        <tr>
          <th className="border px-4 py-1 text-left">ID</th>
          <th className="border px-4 py-1 text-left">First name</th>
          <th className="border px-4 py-1 text-left">Last name</th>
          <th className="border px-4 py-1 text-left">Email</th>
          <th className="border px-4 py-1 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c) => (
          <tr key={c.id}>
            <td className="border px-4 py-1">
              <Link href={`/customers/${c.id}/edit`} className="underline hover:text-blue-800">
                {c.id}
              </Link>
            </td>
            <td className="border px-4 py-1">{c.firstName}</td>
            <td className="border px-4 py-1">{c.lastName}</td>
            <td className="border px-4 py-1">{c.email}</td>
            <td className="border px-4 py-1">
              <form action={deleteCustomerAction}>
                <input type="hidden" name="id" value={c.id} />
                <SubmitButton label="Delete" pendingLabel="Deleting..." />
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}