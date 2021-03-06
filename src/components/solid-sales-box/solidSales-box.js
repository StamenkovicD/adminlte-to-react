import React from 'react'

const SolidSalesBox = () => {
    return (
        <div>
              <div className="box box-solid bg-teal-gradient">
        <div className="box-header">
          <i className="fa fa-th" />
          <h3 className="box-title">Sales Graph</h3>
          <div className="box-tools pull-right">
            <button className="btn bg-teal btn-sm" data-widget="collapse"><i className="fa fa-minus" /></button>
            <button className="btn bg-teal btn-sm" data-widget="remove"><i className="fa fa-times" /></button>
          </div>
        </div>
        <div className="box-body border-radius-none">
          <div className="chart" id="line-chart" style={{height: 250}} />
        </div>{/* /.box-body */}
        <div className="box-footer no-border">
          <div className="row">
            <div className="col-xs-4 text-center" style={{borderRight: '1px solid #f4f4f4'}}>
              <input type="text" className="knob" data-readonly="true" defaultValue={20} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
              <div className="knob-label">Mail-Orders</div>
            </div>{/* ./col */}
            <div className="col-xs-4 text-center" style={{borderRight: '1px solid #f4f4f4'}}>
              <input type="text" className="knob" data-readonly="true" defaultValue={50} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
              <div className="knob-label">Online</div>
            </div>{/* ./col */}
            <div className="col-xs-4 text-center">
              <input type="text" className="knob" data-readonly="true" defaultValue={30} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
              <div className="knob-label">In-Store</div>
            </div>{/* ./col */}
          </div>{/* /.row */}
        </div>{/* /.box-footer */}
      </div>{/* /.box */}
        </div>
    )
}

export default SolidSalesBox
