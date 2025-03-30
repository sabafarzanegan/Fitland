import TableOrderAdmin from "@/components/table/TableOrderAdmin";
import { AllOrders } from "@/utils/actions";
import React from "react";

async function page() {
  const allorders = await AllOrders();

  return (
    <div>
      {allorders?.map((order) => (
        <TableOrderAdmin key={order?.id} order={order} />
      ))}
    </div>
  );
}

export default page;
