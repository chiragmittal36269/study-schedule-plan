import React from "react";

function ShowPlan({
    allPlans,
    setAllPlans,
    deletePlan,
    changeHour,
    deleteAllPlans,
}) {
    return (
        <div className="showPlan">
            {allPlans.map((plan, index) => (
                <div key={index} className="plan">
                    <div>
                        <h3>{plan.subject}</h3>
                    </div>

                    <div>
                        <h3>{plan.hours}</h3>
                    </div>

                    <div className="buttons">
                        <button
                            className="inc"
                            onClick={(e) => changeHour(e, plan)}>
                            +
                        </button>
                        <button
                            className="dec"
                            onClick={(e) => changeHour(e, plan)}>
                            -
                        </button>
                        <button
                            className="delete"
                            onClick={() => deletePlan(plan)}>
                            del
                        </button>
                    </div>
                </div>
            ))}

            <button onClick={deleteAllPlans}>Delete All Plans</button>
        </div>
    );
}

export default ShowPlan;
