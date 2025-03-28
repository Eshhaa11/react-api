import react, {useState, useEffect} from "react";


function RandomUser () {
    const fetchUser = async () => {
        const response = awaitaxios.get("https://randomuser.me/api/")
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