import { Appbar } from "../components/Appbar.jsx"
import { Balance } from "../components/Balance.jsx"
import { Users } from "../components/Users.jsx"


export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance />
            <Users />
        </div>
    </div>
}