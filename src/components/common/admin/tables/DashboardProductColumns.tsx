import { ColumnDef } from "@tanstack/react-table";
import { ProductType } from "@types";

export const dashboardProductColumns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="w-12 h-12 rounded-sm relative overflow-hidden">
          <img
            src={Object.values(product.images)[0] || ""}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-sm font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <div className="text-sm">${row.getValue("price")}</div>
    ),
  },
];
