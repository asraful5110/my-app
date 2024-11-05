import Link from "next/link";
import { cookies } from "next/headers";
export default async function Navbar(){
    const cookie = cookies();
    const token : string = cookie.get('login') || ""
    let isLogin;
    if(token.value){
      isLogin = false
    }else{
        isLogin = true
    }
    return (
        <div className="text-center">
            <ul className="flex justify-center space-x-2 py-3">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/signup">Signup</Link></li>
                {isLogin ?  <li><Link href="/login">Login</Link></li> :  <li><Link href="/api">Logout</Link></li>}
                <li><Link href="/profile">Profile</Link></li>
            </ul>
        </div>
    )
}