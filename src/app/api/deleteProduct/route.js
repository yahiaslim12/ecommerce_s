import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import cloudinary from "@/lib/cloudinary";
const sql = neon(process.env.DATABASE_URL);

export async function POST(req) {
    try {
        const { id } = await req.json();

        const result = await sql(
            "delete from product where id_product = $1 RETURNING *",
            [ id ]
        );
        if (result.length > 0) {
            const imageUrl = result[0].img;
            console.log(imageUrl)
            const publicId = imageUrl.split("/").pop().split(".")[0];
            await cloudinary.v2.uploader.destroy(publicId)
            return NextResponse.json({ message: "Product deleted successfuly", product: result[0], status: 200 });
        } else {
            return NextResponse.json({ message: "No product found with given ID", status: 404 });
        }
    } catch (err) {
        console.error("Database error:", err);
        return NextResponse.json({ message: "Internal Server Error", status: 500 });
    }
}
