import { JSX, ClassAttributes, InputHTMLAttributes } from "react";

export default function Input(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {
  return  <input {...props} className="border border-t-0 focus:border-blue-500 border-l-0 border-r-0 py-2 text-slate-600 border-slate-400 block focus:outline-none w-full text-[12px] px-4" />

}
