/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Label(props:any){

   return <label {...props} className="text-[12px]">{props.children}</label> 
}