import React from 'react'

import { Data } from './data';

const StatBox = () => {
    console.log(Data)
    return (
        <div>
            {/* Main row */}
            <div className="row">
                    {
                        Data.map((item, index) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-xs-6" key={index}>
                                        <div className={`small-box bg-${item.color}`}>
                                            <div className="inner">
                                            <h3>{item.number}</h3>
                                            <p>{item.title}</p>
                                            </div>
                                            <div className="icon">
                                            <i className={`ion ion-${item.icon}`} />
                                            </div>
                                            <a href={item.urlMoreInfo} className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
                                        </div>
                                    </div>{/* ./col */}
                                </>
                            )
                        })
                    }
            </div>{/* Main row END */}            
        </div>
    )
}


export default StatBox;