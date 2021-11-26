import React from 'react'
import { ChatData } from './chatData'

const ChatBox = () => {
    return (
      <div>
        {/* Chat box */}
        <div className="box box-success">
          <div className="box-header">
            <i className="fa fa-comments-o" />
            <h3 className="box-title">Chat</h3>
            <div className="box-tools pull-right" data-toggle="tooltip" title="Status">
              <div className="btn-group" data-toggle="btn-toggle">
                <button type="button" className="btn btn-default btn-sm active"><i className="fa fa-square text-green" /></button>
                <button type="button" className="btn btn-default btn-sm"><i className="fa fa-square text-red" /></button>
              </div>
            </div>
          </div>
          <div className="box-body chat" id="chat-box">
            {
              ChatData.map((chat, index) => {
                return (
                  <>
                    <div className="item">
                        <img src={`dist/img/${chat.image}.jpg`} alt="{chat.imageAlt}" className="online" />
                        <p className="message">
                          <a href="#" className="name">
                            <small className="text-muted pull-right"><i className="fa fa-clock-o" /> {chat.time}</small>
                            {chat.name}
                          </a>
                            {chat.content}
                        </p>

                        {/* /.attachment, if there, SHOW */}
                        {
                          chat.attachment ?
                          
                          <div className="attachment">
                            <h4>Attachments:</h4>
                            <p className="filename">{chat.attachmentName}</p>
                            <div className="pull-right">
                              <button className="btn btn-primary btn-sm btn-flat">Open</button>
                            </div>
                          </div>

                          : null
                        }
                    </div>{/* /.item */}
                  </>
                )
              })
            }
        </div>{/* /.chat */}
          <div className="box-footer">
            <div className="input-group">
              <input className="form-control" placeholder="Type message..." />
              <div className="input-group-btn">
                <button className="btn btn-success"><i className="fa fa-plus" /></button>
              </div>
            </div>
          </div>
        </div>{/* /.box (chat box) */}
      </div>
    )
}

export default ChatBox
