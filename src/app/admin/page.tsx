import Image from "next/image";
import AdminProducts from "../modules/views/admin/products/products";
import connectDB from "../api/db";

export default function Admin() {
  connectDB()

  return (
        <AdminProducts />
  );
}
