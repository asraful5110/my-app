import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
export function GET(req : NextRequest){
    const cookie = cookies();
     cookie.delete("login")
    return NextResponse.redirect(new URL('/login',req.url))
}