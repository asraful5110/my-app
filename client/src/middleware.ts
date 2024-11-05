import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { cookies } from "next/headers";
export default async function middlewares(req:NextRequest){
   const cookie = cookies();
  const token = cookie.get("login");
    if(token){
        const requiest = await fetch("http://localhost:4000/verify",{
            method : "POST",
            headers : {
                "Authorization" : `${token.value}`
            }
           })  
           const response = await requiest.json();
  
           if(response.success){
              return NextResponse.next();
           }else{
            return NextResponse.redirect(new URL('/login',req.url))
           }

    }else{
        return NextResponse.redirect(new URL('/login',req.url))
    }
 
}


export const config = {
    matcher : "/profile"
}

