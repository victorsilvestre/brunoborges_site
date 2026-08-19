import { NextResponse } from "next/server";
import { brandManifest } from "../manifest";

export function GET() {
    return NextResponse.json(brandManifest, {
        headers: {
            "Cache-Control": "public, max-age=3600",
        },
    });
}
