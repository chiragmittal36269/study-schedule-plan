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

    function changeHour(e, plan) {
        let index = allPlans.indexOf(plan);
        console.log("hello", e.target);
        if (e.target.className === "inc") {
            allPlans[index].hours++;
        } else {
            allPlans[index].hours--;
        }
        localStorage.setItem("Plans", JSON.stringify(allPlans));
        setAllPlans([...allPlans]);
    }

    function deleteAllPlans() {
        localStorage.removeItem("Plans");
        setAllPlans([]);
    }

    return (
        <div>
            <CreatePlan setAllPlans={setAllPlans} allPlans={allPlans} />
            {allPlans.length === 0 ? (
                <div>Please Enter A Plan</div>
            ) : (
                <ShowPlan
                    setAllPlans={setAllPlans}
                    allPlans={allPlans}
                    deletePlan={deletePlan}
                    changeHour={changeHour}
                    deleteAllPlans={deleteAllPlans}
                />
            )}
        </div>
    );
}

export default App;
