import React from 'react'

function Protectedroute({ islogin ,children}) {
 if (islogin) {
  return children
 }
  return (
    <div>Protectedroute</div>
  )
}

export default Protectedroute