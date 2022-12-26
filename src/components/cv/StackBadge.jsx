import React from "react"

const StackBadge = ({ stack }) => {

    let stackArray = []

    if (typeof stack === "string") {
        stackArray = stack.split(",");
    } else {
        stackArray = stack;
    }
    return (
        <ul className="stack-project-cont">
            {
                stackArray.map((stackName, indexStack) => {
                    return (
                        <li key={indexStack} className={"stack-item " + stackName}>
                            {stackName}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default StackBadge