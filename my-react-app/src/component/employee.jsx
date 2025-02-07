import EmployeeEdit from "./employeeEdit";

function Employee(props){
    return (
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
            <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img} alt="image" />
                <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">{props.name}</p>
      <p className="font-medium text-gray-500">{props.role}</p>
    </div>
    <EmployeeEdit id={props.id} name={props.name} role={props.role} updateEmployee={props.updateEmployee}/>
    
  </div>
</div>
    )

}
export default Employee;