import TableOrderAdmin from "@/components/table/TableOrderAdmin";
import { AllOrders } from "@/utils/actions";
import React from "react";

async function page() {
  const allorders = await AllOrders();

  return (
    <div>
      {allorders?.map((order) => (
        <TableOrderAdmin order={order} />
      ))}
    </div>
  );
}

export default page;
