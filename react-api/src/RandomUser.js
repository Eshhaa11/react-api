import react, {useState, useEffect, axios} from "react";


function RandomUser () {
    const fetchUser = async () => {
        const response = await axios.get("https://randomuser.me/api/")
        console.log(response)
    }

    useEffect(() => {
        fetchUser(); 
    }, []); 

    return (
        <div>
            <h1>Random User</h1>

        </div>
    );
}

export default RandomUser;