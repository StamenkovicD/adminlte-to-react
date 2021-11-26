import React from 'react'

const SalesBox = () => {
    return (
        <div>
              {/* Sales TAB */}
            <div className="nav-tabs-custom">
                {/* Tabs within a box */}
                <ul className="nav nav-tabs pull-right">
                    <li className="active"><a href="#revenue-chart" data-toggle="tab">Area</a></li>
                    <li><a href="#sales-chart" data-toggle="tab">Donut</a></li>
                    <li className="pull-left header"><i className="fa fa-inbox" /> Sales</li>
                </ul>
                <div className="tab-content no-padding">
                    {/* Morris chart - Sales */}
                    <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}} />
                    <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}} />
                </div>
            </div>
        </div>
    )
}

export default SalesBox
