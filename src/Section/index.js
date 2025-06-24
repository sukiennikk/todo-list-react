import React from "react";
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
   <section className="section">
            <h2 className="section__header">{title}</h2>
            {extraHeaderContent}
            <div>
                <button className="task-list__button">
                Ukryj ukończone
                </button>
                <button className="task-list__button" disabled>
                Ukończ wszystkie
                </button>
                </div>
            <div className="section__body">
                {body}
            </div>
        </section>
);

export default Section;