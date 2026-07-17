function EmployeeListItem({ name, title }) {
  return (
    <div className="employeeCard">
      <div className="avatar"></div>

      <div>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;