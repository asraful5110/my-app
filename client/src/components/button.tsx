import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import { Fragment } from "react";

export default function Button(props: {
  type: 'submit';
  disabled : boolean;
  children:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
}) {
  return (
    <Fragment>
      <button
        {...props}
        className="bg-blue-500 hover:bg-transparent hover:text-blue-500 transition-all text-white px-4 py-1 rounded-sm border-2 border-blue-500"
      >
        {props.children}
      </button>
    </Fragment>
  );
}
