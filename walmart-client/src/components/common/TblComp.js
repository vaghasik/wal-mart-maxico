const TblComp = ({user, hName1, hName2, status}) => {
  //console.log(user)
    return (
    <table>
        <thead>
            <tr>
                <td>{hName1}</td>
                <td>{hName2}</td>
            </tr>
        </thead>
        <tbody >
        { status ==='default'? user && user.map((data, i) => (
          <tr key={i}> 
            <td>{data.username}</td>
            <td>{data.age}</td>
          </tr>
      )):
      user && Object.keys(user).map((key, i) => (
        <tr key={i}> 
          <td>{key}</td>
          <td>{user[key]}</td>
        </tr>
      )) }   
        </tbody>
        
    </table>)
}
export default TblComp;