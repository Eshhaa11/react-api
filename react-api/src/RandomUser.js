import react, {useState, useEffect} from "react";


function RandomUser () {
    const fetchUser = async () => {
    
        useEffect(() => {
            fetchUser(); 
        }, []); 

    }
    
    return (
        <div>
            <h1>Random User</h1>

        </div>
    );
}

export default RandomUser;