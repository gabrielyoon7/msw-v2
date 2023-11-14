import {Outlet, useNavigate} from "react-router-dom";

function Layout(){
  const navigate = useNavigate();

  return(
    <div>
      <button onClick={()=>navigate('/')}>go home</button>
      <div style={{padding:'20px'}}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
