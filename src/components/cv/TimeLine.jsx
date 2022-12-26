import React from "react"
import StackBadge from "./StackBadge"

const TimeLine = ({ items }) => {

    return (
        <>
            {
                items.map((item, index) => {
                    return (
                        <div className="flex timeline-item" key={index}>
                            <div className="education__time">
                                <span className="w-4 h-4 bg-primary block rounded-full mt-1"></span>
                                <span
                                    className="education__line bg-primary block h-full w-[2px] translate-x-[7px]"
                                ></span>
                            </div>
                            <div className="experience__data bd-grid px-5">
                                <h3 className="font-semibold mb-1 timeline-title">{item.title}</h3>
                                <p className="font-light text-sm timeline-title">{item.subtitle}</p>
                                {item.dates ? <p className="font-light text-sm timeline-title">{item.dates}</p> : null}
                                <StackBadge stack={item.stack} />
                                {item.desc ? <p className="my-2 text-justify timeline-desc">
                                    {item.desc}
                                </p> : null}

                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TimeLine