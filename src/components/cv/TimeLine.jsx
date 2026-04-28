import React from "react"
import StackBadge from "./StackBadge"

const labels = {
  es: { year: 'año', years: 'años', month: 'mes', months: 'meses', and: 'y' },
  en: { year: 'year', years: 'years', month: 'month', months: 'months', and: 'and' },
};

const TimeLine = ({ items, lang = 'es' }) => {
    const L = labels[lang] ?? labels.es;

    const calculateDuration = (dateString) => {
        if (!dateString || !dateString.includes("-")) return "";
        const parts = dateString.split("-").map(s => s.trim());
        if (parts.length !== 2) return "";

        const parseDate = (str) => {
            const lowerStr = str.toLowerCase();
            if (lowerStr === "present" || lowerStr === "presente" || lowerStr === "actualidad") {
                return new Date();
            }
            const [month, year] = str.split("/").map(Number);
            if (!month || !year) return null;
            return new Date(year, month - 1);
        };

        const start = parseDate(parts[0]);
        const end = parseDate(parts[1]);

        if (!start || !end) return "";

        let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        months += 1;

        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        let result = "";
        if (years > 0) result += `${years} ${years === 1 ? L.year : L.years}`;
        if (remainingMonths > 0) {
            if (result) result += ` ${L.and} `;
            result += `${remainingMonths} ${remainingMonths === 1 ? L.month : L.months}`;
        }

        return result ? ` • (${result})` : "";
    };

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
                                {item.dates ? (
                                    <p className="font-light text-sm timeline-title">
                                        {item.dates} {calculateDuration(item.dates)}
                                    </p>
                                ) : null}
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
