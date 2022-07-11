import { useState } from 'react';

function UserSummary(props) {
    const [showMore, setShowMore] = useState(false);
    const data = props.userData ? props.userData : "No data on this person available";
    function changeState() {
        setShowMore((prevState) => !prevState);
    }
    return (
        <div>
            {
                <div>
                    <h1>Full Name: {data.name.first} {data.name.last}</h1>
                    <h2>Gender: {data.gender}</h2>
                    <p>Email: {data.email}</p>
                </div>
            }
            {showMore ? (
                <div className="morebox">
                    <h1>More Information</h1>
                    <p>Street Number: {data.location.street.number}</p>
                    <p>Street Name: {data.location.street.name}</p>
                    <p>City: {data.location.city}</p>
                    <p>State: {data.location.state}</p>
                    <p>Country: {data.location.country}</p>
                    <p>Username: {data.login.username}</p>
                    <img src={data.picture.medium} alt="pic"/>
                    <p>Date of Birth: {data.dob.date}</p>
                    <p>Age: {data.dob.age}</p>
                    <p>Phone Number: {data.phone}</p>
                </div>) : ("")}
            <button onClick={changeState}>
                {showMore ? "Less Information" : "More Information"}
            </button>
        </div>
    );
}

export default UserSummary;