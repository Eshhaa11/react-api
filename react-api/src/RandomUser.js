import react, {useState, useEffect} from "react";
import axios from "axios";


function RandomUser () {

    const [user, getUser] = useState(1);

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