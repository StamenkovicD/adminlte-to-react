import React from 'react'

const Visitors = () => {
    return (
        <div>
              <div className="box box-solid bg-light-blue-gradient">
        <div className="box-header">
          {/* tools box */}
          <div className="pull-right box-tools">
            <button className="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range"><i className="fa fa-calendar" /></button>
            <button className="btn btn-primary btn-sm pull-right" data-widget="collapse" data-toggle="tooltip" title="Collapse" style={{marginRight: 5}}><i className="fa fa-minus" /></button>
          </div>{/* /. tools */}
          <i className="fa fa-map-marker" />
          <h3 className="box-title">
            Visitors
          </h3>
        </div>
        <div className="box-body">
          <div id="world-map" style={{height: 250, width: '100%'}} />
        </div>{/* /.box-body*/}
        <div className="box-footer no-border">
          <div className="row">
            <div className="col-xs-4 text-center" style={{borderRight: '1px solid #f4f4f4'}}>
              <div id="sparkline-1" />
              <div className="knob-label">Visitors</div>
            </div>{/* ./col */}
            <div className="col-xs-4 text-center" style={{borderRight: '1px solid #f4f4f4'}}>
              <div id="sparkline-2" />
              <div className="knob-label">Online</div>
            </div>{/* ./col */}
            <div className="col-xs-4 text-center">
              <div id="sparkline-3" />
              <div className="knob-label">Exists</div>
            </div>{/* ./col */}
          </div>{/* /.row */}
        </div>
      </div>
        </div>
    )
}

export default Visitors
