import React from "react";

function CreatePlan({ allPlans, setAllPlans }) {
    const [plans, setPlans] = React.useState({
        subject: "",
        hours: "",
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setPlans({ ...plans, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (plans.subject === "") {
            alert("please enter the subject name");
        } else if (plans.hours === "") {
            alert("please enter the hours");
        } else {
            // setAllPlans([...allPlans, plans]);
            // localStorage.setItem("Plans", JSON.stringify([...allPlans, plans]));
            setAllPlans(() => {
                let data = JSON.parse(localStorage.getItem("Plans")) || [];
                data.push(plans);
                localStorage.setItem("Plans", JSON.stringify(data));
                return data;
            });
        }
        setPlans({
            subject: "",
            hours: "",
        });
    }

    return (
        <div className="createPlan">
            <form action="" onSubmit={handleSubmit}>
                <div className="subject">
                    {/* <label htmlFor="">Name of the Subject: </label> */}
                    <input
                        type="text"
                        name="subject"
                        placeholder="Enter the Subject"
                        value={plans.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="hours">
                    {/* <label htmlFor="">Hours for study: </label> */}
                    <input
                        type="number"
                        name="hours"
                        min={1}
                        max={4}
                        placeholder="Enter the hours"
                        value={plans.hours}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button className="btn" type="submit">
                    {/* <FaPlus /> */}
                    Add Plan
                </button>
            </form>
        </div>
    );
}

export default CreatePlan;
