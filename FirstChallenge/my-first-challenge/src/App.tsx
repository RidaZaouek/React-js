
// import './App.css'
// import MyContainerButton from './MyContainerButton'
// import MyHeader from './MyHeader'
// import MyPostTitle from './MyPostTitle'

import MyContainerButton from "./MyContainerButton"
import MyHeader from "./MyHeader"
import MyPostTitle from "./MyPostTitle"

// const App = () => {
//   return(
//     <div
//     style=
//     {
//       {
//         background:"white",
//       }
//     }>
//       <MyHeader/>
//       <div
//       style=
//       {
//         {
//           display:"flex",
//           justifyContent:"space-between"
//         }
//       }
//       >
//         <MyPostTitle/>
//         <MyContainerButton/>
//       </div>
//     </div>
//   )
// }

// export default App




const App = () => {
  return (
    <div>
      <MyHeader/>
      <div style={{display:"flex",justifyContent:"center"}}>
      {/*POSTS & SIDE MENU CONTAINER */}
      <div style={{display:"flex",width:"60%"}}>
          {/*POSTS CONTAINER */}
          <div style={{width:"70%"}}>
                      <MyPostTitle/>
                      <MyPostTitle/>
                      <MyPostTitle/>
                      <MyPostTitle/>
                      <MyPostTitle/>
          </div>
          {/*==POSTS CONTAINER ==*/}

          {/*SIDE MENU CONTAINER */}
          <div style={{width:"40%"}}>
                <MyContainerButton/>
          </div>
          {/*==SIDE MENU CONTAINER ==*/}

      </div>
      {/*==POSTS & SIDE MENU CONTAINER ==*/}
      </div>


      
    </div>
  )
}

export default App