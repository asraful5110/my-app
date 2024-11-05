'use client'
import Input from "@/components/input";
import Title from "@/components/title";
import Error from "@/components/error";
import Label from "@/components/label";
import Button from "@/components/button";
import {useState} from 'react'
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
export default function Login(){
const [user,setUser] = useState({username : "",password : ""})
const [cookie,setCookie] = useCookies(['login']);
const route = useRouter();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleChange(e:any){
    e.preventDefault();
    setUser(prev=>{
        return {...prev,[e.target.name] : e.target.value}
    })
}
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function handleSubmit(e:any){
         e.preventDefault();
         const req = await fetch('http://localhost:4000/login',{
            method : "post",
            headers :{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
         })

         const res = await req.json();
        if(res.login){
           setCookie('login',res.token)
           location.reload()
           route.push('/profile')
           
        }
        
    }

    return (
        <div className="login text-left h-screen flex justify-center items-center">

         <form onSubmit={handleSubmit} className="space-y-2 p-6  w-[400px] shadow-lg">
         <Title className='' >Login now</Title>
            <div>
                <Label htmlFor='fname'>Username or E-mail</Label>
                <Input type='text' onChange={handleChange} name='username' value={user.username} placeholder="Your email or phone number" autoComplete="true"/>
                <Error> </Error>
            </div>
            <div>
                <Label htmlFor='password'>Password</Label>
                <Input type='password' onChange={handleChange} name='password' value={user.password} placeholder="Your password please..."/>
                <Error> </Error>
            </div>
            <div className="text-center">
               <Button type="submit" disabled={false}>Login</Button>  
            </div>
         </form>
        </div>
    )
}