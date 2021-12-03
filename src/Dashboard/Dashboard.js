import React from 'react'
import LeftSideBar from './LeftSideBar'
import MiddleOfDash from './MiddleOfDash'
import { UserData } from './RightSideBar'

function Dashboard() {
    return (
        <div>
            <div>
            <LeftSideBar/>
            </div>
            <div>
                <MiddleOfDash />
            </div>
            <div>
                <UserData />
            </div>
        </div>
    )
}

export default Dashboard
