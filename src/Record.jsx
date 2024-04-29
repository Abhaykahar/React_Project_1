import React from 'react'
import "./record.css";


const Record = ({employee}) => {

  return (
    <div className='container'>
        {
            employee.map((val)=>{
                return(
                    <div key={val.empid} className="card-wrapper">
                        <div className='card-any'>
                            <img src={val.image}  width={180} height={150} style={{objectFit:"cover",backgroundPosition:"top"}}/>
                            <h2>Empid :- {val.empid}</h2>
                            <h2>Empname :- {val.empname}</h2>
                            <h3>Empphone :- {val.empphone}</h3>
                            <p>Empaddress :- {val.empaddress.country}</p>
                            <p>State :- {val.empaddress.state}</p>
                            <p>City :- {val.empaddress.city}</p>
                            <p>Area :- {val.empaddress.area}</p>
                            <p>Empdeg :- {val.empdeg}</p>
                            <p>Empsalary :- {val.empsalary}</p>
                            <p>Empdepartment :- {val.empdepartment}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Record
