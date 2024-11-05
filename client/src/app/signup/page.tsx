"use client";
import Input from "@/components/input";
import Title from "@/components/title";
import Error from "@/components/error";
import Label from "@/components/label";
import Button from "@/components/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Signup() {
  const [loading,setLoading] = useState(false)
  const [error, setError] = useState();
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    cPassword: "",
  });

  const route = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(e: any) {
    e.preventDefault();
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e:any) {
    e.preventDefault();
     setLoading(true)
    if (userData.password !== userData.cPassword) {
      setError((prev) => {
        return { ...prev, cPassword: { msg: "Password is not match" } };
      });
    } else {
      const req = await fetch("http://localhost:4000/users/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const res = await req.json();
      if(res.success){
         route.push('/')
      }else{
        setError(res);
      }
    }
    setLoading(false)
  }


  return (
    <div className="login text-left h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="p-6 space-y-2  w-[400px] shadow-lg"
      >
        <Title className="mb-6">Registration form</Title>

        <div className="name flex space-x-2">
          <div>
            <Label htmlFor="fname">F-name</Label>
            <Input
              type="text"
              placeholder="First name"
              autoComplete="true"
              onChange={handleChange}
              name="fname"
              value={userData.fname}
            />
            <Error>{error?.fname?.msg}</Error>
          </div>
          <div>
            <Label htmlFor="fname">L-name</Label>
            <Input
              type="text"
              placeholder="Last name"
              autoComplete="true"
              onChange={handleChange}
              name="lname"
              value={userData.lname}
            />
            <Error>{error?.lname?.msg}</Error>
          </div>
        </div>
        <div>
          <Label htmlFor="fname">Username</Label>
          <Input
            type="text"
            placeholder="Username"
            autoComplete="true"
            onChange={handleChange}
            name="username"
            value={userData.username}
          />
          <Error>{error?.username?.msg}</Error>
        </div>
        <div>
          <Label htmlFor="fname">E-mail</Label>
          <Input
            type="email"
            placeholder="E-mail address"
            autoComplete="true"
            onChange={handleChange}
            name="email"
            value={userData.email}
          />
          <Error>{error?.email?.msg}</Error>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Your password please..."
            onChange={handleChange}
            name="password"
            value={userData.password}
          />
          <Error>{error?.password?.msg}</Error>
        </div>
        <div>
          <Label htmlFor="password">Confirm password</Label>
          <Input
            type="password"
            placeholder="Confirm password"
            onChange={handleChange}
            name="cPassword"
            value={userData.cPassword}
          />
          <Error>{error?.cPassword?.msg}</Error>
        </div>
        <div className="text-center">
          <Button type="submit" disabled={false}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
}
