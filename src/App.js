import React, { useEffect, useState } from "react";
import CreatePlan from "./Components/CreatePlan";
import ShowPlan from "./Components/ShowPlan";

function App() {
    const [allPlans, setAllPlans] = useState([]);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Plans"));
        if (data) {
            setAllPlans(data);
        }
    }, []);

    function deletePlan(plan) {
        let index = allPlans.indexOf(plan);
        allPlans.splice(index, 1);
        localStorage.setItem("Plans", JSON.stringify(allPlans));
        setAllPlans([...allPlans]);
    }

    function changeHour(value, plan) {
        let index = allPlans.indexOf(plan);
        if (value === "inc") {
            allPlans[index].hours++;
        } else {
            allPlans[index].hours--;
        }
        localStorage.setItem("Plans", JSON.stringify(allPlans));
        setAllPlans([...allPlans]);
    }

    function deleteAllPlans() {
        const sure = window.confirm(
            "Are you sure you want to delete all plans?"
        );
        if (!sure) {
            return;
        }
        localStorage.removeItem("Plans");
        setAllPlans([]);
    }

    return (
        <div className="app">
            <h1>Study Schedule Plan</h1>

            <CreatePlan setAllPlans={setAllPlans} allPlans={allPlans} />

            {allPlans.length === 0 ? (
                <h3 className="noPlan">Please Enter A Plan</h3>
            ) : (
                <ShowPlan
                    setAllPlans={setAllPlans}
                    allPlans={allPlans}
                    deletePlan={deletePlan}
                    changeHour={changeHour}
                />
            )}
            {allPlans.length !== 0 ? (
                <div className="deleteAll">
                    <button onClick={deleteAllPlans} className="deleteAllBtn">
                        Delete All Plans
                    </button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
