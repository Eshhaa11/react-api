import react, {useState, useEffect} from "react";


function RandomUser () {
    const fetchUser = async () => {
        const response = awaitaxios.get("https://randomuser.me/api/")
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