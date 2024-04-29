import React, { Component } from "react"
import "./data.css"

class Datarecord extends Component {
  render() {
    this.record = this.props.data;
    return (
      <div className="container">
        {this.record.map((val) => {
          return (
            <div key={val.grid} className="card-wrapper">
              <div className="card">
              <img src={val.images} alt="Image" width={180} height={150} style={{objectFit:"cover",backgroundPosition:"top"}}/>
                <h2>Grid : - {val.grid}</h2>
                <h3>Name :- {val.name}</h3>
                <p>Email :- {val.email}</p>
                <p>Course:- {val.course}</p>
                <span>City:- {val.city}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Datarecord;
