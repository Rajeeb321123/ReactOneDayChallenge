//just to make our content centered and having some gap on both sides

type contentWrapperProps = {
    children: ReactNode
}


import { ReactNode } from "react";
import "./style.css";

const ContentWrapper = ({ children }:contentWrapperProps) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;

