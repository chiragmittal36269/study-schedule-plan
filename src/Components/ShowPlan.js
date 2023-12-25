import React from "react";
import { FaCircleMinus, FaCirclePlus, FaTrash } from "react-icons/fa6";

function ShowPlan({ allPlans, setAllPlans, deletePlan, changeHour }) {
    return (
        <div className="showPlan">
            {allPlans.map((plan, index) => (
                <div key={index} className="plan">
                    <div className="info">
                        <h3>{plan.subject}</h3>
                        <h3>{plan.hours}hours</h3>
                    </div>

                    <div className="buttons">
                        <button
                            className="inc"
                            onClick={() => changeHour("inc", plan)}>
                            <FaCirclePlus />
                        </button>
                        <button
                            className="dec"
                            onClick={() => changeHour("dec", plan)}>
                            <FaCircleMinus />
                        </button>
                        <button
                            className="delete"
                            onClick={() => deletePlan(plan)}>
                            <FaTrash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ShowPlan;
