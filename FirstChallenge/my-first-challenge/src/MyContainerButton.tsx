// import MyButton from "./MyButton"

import "./TagButtonStyle.css"
import TagButton from "./TagButton"

// const MyContainerButton = () => {
//   return (
//     <div
//     style=
//     {
//         {
//             margin:"40px 100px 0px 0px",
//             //padding:"10px 120px 10px 70px",
//             border:"3px solid green",
//             width:"250px"
//         }
//     }>
//         <MyButton/>
//     </div>
//   )
// }

// export default MyContainerButton



const MyContainerButton = () => {
      return (
      <div style={{margin:"25px",border:"solid teal 5px"}}>
            <div style={{display:"flex"}}>
                  
                        <TagButton/>
                  
                        <TagButton/>
                  
            </div>
            <div style={{display:"flex"}}>
                  
                        <TagButton/>
                  
                        <TagButton/>
                  
            </div>
            <div style={{display:"flex"}}>
                  
                        <TagButton/>
                  
                        <TagButton/>
                  
            </div>
            <div style={{display:"flex"}}>
                  
                        <TagButton/>
                  
                        <TagButton/>
                        
            </div>
            <div style={{display:"flex"}}>
                  
                        <TagButton/>
                  
                        <TagButton/>
                  
            </div>
            <div style={{display:"flex"}}>
                  
                        <TagButton/>
            
                        <TagButton/>
            
            </div>
            <div >
                  
                        <TagButton/>
                  
            </div>
            
            
            
      </div>
      )
}

export default MyContainerButton