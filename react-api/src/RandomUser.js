import react, {useState, useEffect} from "react";


function RandomUser () {

    const [user, setUser] = useState("null");

    const fetchUser = async () => {
        try {
            const response = await fetch ('https://randomuser.me/api/');
            const data = await response.json();
            console.log(data);
            
        }

    }
    return (
        <div>
            <h1>Random User</h1>

        </div>
    );
}