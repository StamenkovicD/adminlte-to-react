import React from 'react'
import SubHeader from '../../components/subHeader/subHeader'
import StatBox from '../../components/stat-box/stat-box'
import SalesBox from '../../components/sales-box/salesBox'
import ChatBox from '../../components/chat-box/chatBox'
import ToDoList from '../../components/toDoList-box/toDoList'
import Visitors from '../../components/visitors-box/visitors'
import SolidSalesBox from '../../components/solid-sales-box/solidSales-box'
import Calendar from '../../components/calendar-box/calendar'


const Dashboard = () => {
    return (
    <div>
        {/* Right side column. Contains the navbar and content of the page */}
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <SubHeader title={'Control Panel'} currentTab={'Dashboard'} />
            {/* Main content */}
            <section className="content">
                    <StatBox />
                <div className="row">
                    {/* Left col */}
                    <section className="col-lg-7 connectedSortable">
                        <SalesBox />
                        <ChatBox />
                        <ToDoList />
                    </section>{/* /.Left col */}
                    <section className="col-lg-5 connectedSortable">
                        <Visitors />
                        <SolidSalesBox />
                        <Calendar />
                    </section>{/* right col */}
                </div>{/* /.row (main row) */}
            </section>{/* /.content */}
        </div>
    </div>
    )
}

export default Dashboard
