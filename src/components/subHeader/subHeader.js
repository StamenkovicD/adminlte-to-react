import React from 'react'

const SubHeader = ({title, currentTab}) => {
    return (
        <div>
            <section className="content-header">
                <h1>
                    {currentTab}<small>{title}</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                    <li className="active">{currentTab}</li>
                </ol>
            </section>
        </div>
    )
}

export default SubHeader
