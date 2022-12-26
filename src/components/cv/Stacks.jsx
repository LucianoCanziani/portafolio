import React from "react"

const TimeLine = ({ items }) => {


    return (
        <ul className="stack-project-cont">
            {
                items.map((stackName, indexStack) => {
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

export default TimeLine