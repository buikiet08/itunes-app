import React from "react"
import { Link } from "react-router-dom"

export const Breadcrumb = ({children}) => {
    return (
        <ol className="flex items-center mb-md-0 font-size-xs text-gray-400">
            {children}
        </ol>
    )
}

Breadcrumb.Title = ({ to, children }) => {
    // const Comp = to ? Link : React.Fragment
    return (
        <li className="mr-3 !text-gray-400">
            <Link to={to}>{children}</Link>
        </li>
    )
}