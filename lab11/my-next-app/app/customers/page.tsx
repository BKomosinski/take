import NewCustomerForm from "./_components/new-customer-form";
import CustomersTable from "./_components/customers-table";

export default function CustomersPage() {
  return (
    <>
      <NewCustomerForm />
      <p>&nbsp;</p>
      <CustomersTable />
    </>
  );
}