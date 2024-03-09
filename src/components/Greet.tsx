type userProfile={
    name?:string
}


function Greet(props:userProfile) {
  return (
    <div>Hello {props.name}</div>
  )
}

export default Greet