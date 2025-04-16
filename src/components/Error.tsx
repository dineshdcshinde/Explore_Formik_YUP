import { ReactNode } from "react";

type Errors={
    children?: ReactNode
}
const Error = (props:Errors) => {
  return <div style={{color:"red"}}>{props.children}</div>;
};

export default Error;
