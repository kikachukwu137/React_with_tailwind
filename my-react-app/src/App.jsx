
import Welcome from "./component/welcome";
import Employee from "./component/employee";
import { useState } from "react";

function App(){
  const [role, setRole] =useState('dev')
  
  function UpdateEmployee(id, newName,newRole){
   console.log("hello dear")
  }
  const [employees,setEmployees] = useState([
    {
      id:1,
      name : "Daniel",
      role: 'Developer',
      img : 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
    },
    
    {
      id:2,
      name : "frank",
      role: 'Developer',
      img : 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
    },
    {
      id:3,
      name : "Dave",
      role: 'Developer',
      img : 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
    },
    {
      id:4,
      name : "jude",
      role: 'cloud engineer',
      img : 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
    },
    {
      id:5,
      name : "Daniella",
      role: 'senior developer',
      img : 'https://images.pexels.com/photos/1616015/pexels-photo-1616015.jpeg?auto=compress&cs=tinysrgb&w=400'
    }, {
      id:6,
      name : "David",
      role: 'manager',
      img : 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
    },
  ])

// function UpdateEmployee(id, newName, newRole){
  
//   const updateEmployee = employees.map((employee)=>{
//     if(id == employee.id){
//       return{ ...employee, name: newName, role: newRole}
//     }
//     return employee

//   })
//   setEmployees(updateEmployee)
// }
function updateEmployee(id, newName, newRole) {
  const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
          return { ...employee, name: newName, role: newRole };
      }
      return employee;
  });
  setEmployees(updatedEmployees);
}






  const showList = true
  // const image = "data:image/jpeg;base64,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"
  return(
    <div>
      {showList? 
      (<>

      <input type="text" onChange={(e)=>{setRole(e.target.value)}}/>
      <div className="flex flex-wrap justify-center">
        
        {/* <Employee name="Daniel" role="interm"img={image}/> */}
        {/* <Employee name="Mike" role={role} img='https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'/> */}
        {/* <Employee name="Mike" role={role} img='https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'/> */}
        {/* <Employee name="Mike" role={role} img='https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'/> */}        
        {/* <Employee name="John" role="team lead"/>  */}
        
        {employees.map((employee)=>{
          return<Employee 
          key={employee.id}
          id ={employee.id}
          name={employee.name}
           role={employee.role}
           img={employee.img}
            updateEmployee ={updateEmployee} 
            />

        }) }     

      </div>  
      

      <div/>
      </>)
      
      : (<Welcome/>)}

    </div>
    
  )
}


export default App;