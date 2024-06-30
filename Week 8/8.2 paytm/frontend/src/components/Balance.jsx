import axios from "axios";
import { useEffect, useState } from "react";



export const Balance = () => {

    const [finalBalance, setFinalBalance] = useState(0);

    useEffect(() => {
        const makeRequest = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            });
            setFinalBalance(response.data.balance);
        } catch (error) {
            console.error("Error fetching balance", error);
        }
        };

        makeRequest();
    }, []); // Empty dependency array ensures this runs once when component mounts

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {finalBalance}
        </div>
    </div>
}