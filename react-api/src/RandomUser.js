import react, {useState, useEffect} from "react";
import axios from "axios";


function RandomUser () {

    const [error, setError] = useState([]);
    const [data, setData] = useState([])

    const fetchUser = async () => {
       try {
         const response = await axios.get("https://randomuser.me/api/")
        console.log(response)
    }   catch (error){
        setError ([error])
    }

}

    useEffect(() => {
        fetchUser(); 
    }, []); 


    return (
        <>
        {error.length > 0 && error.map ((v,i) => <span key={i}>{v}</span>)}
        </>
        
    );
}

export default RandomUser;