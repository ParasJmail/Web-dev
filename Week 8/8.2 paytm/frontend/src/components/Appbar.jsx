import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export const Appbar = () => {
    const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:3000/api/v1/users/me', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
      setUser(response.data.user.firstName[0].toUpperCase());
    };

    fetchUser();
  }, []);

    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
            <button onClick={() => {
                localStorage.removeItem("token")
                navigate("/signin")
                }} label={"Log out"}>
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
            </button>
            </div>
            


            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user}
                </div>
            </div>
            
        </div>
    </div>
}