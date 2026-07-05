
// import './App.css'
// import Header from './Header'
// import Posts from './Posts'
// import SideMenu from './SideMenu'

// function App() {
//   return (
//     <>
//       <div>
//             <Header/>
//             <div style={{display:"flex"}}>
//             <div style={{width:"70%",color:"black"}}>
                    
//                     <Posts FirstTitle="20" SecondTitle="أكاديمية ترميز" /*Paragraph="أكاديمية متخصصة لتعليم البرمجة بمختلف لغاتها وتقنياتها"*/>
//                         <p style={{fontSize:"10px", margin:"0px 0px 10px 0px"}}>
//                           أكاديمية متخصصة لتعليم البرمجة بمختلف لغاتها وتقنياتها
//                         </p>
//                     </Posts>
                    
//                     <Posts SecondTitle="hello world" /*Paragraph="this is the hello world article"*/>
//                         <p style={{fontSize:"10px", margin:"0px 0px 10px 0px"}}>
//                           this is the hello world article
//                         </p>
//                     </Posts>

//                     <Posts SecondTitle="Post 3" /*Paragraph="this is the hello world article"*/>
//                         <p style={{fontSize:"10px", margin:"0px 0px 10px 0px"}}>
//                           this is the body of post 3
//                         </p>
//                     </Posts>
                    
                    
//             </div>
//             <div style={{width:"40%"}}>
//                 <SideMenu/>
//             </div>
//             </div>
//      </div>
//      </>
            
      
//   )
// }

// export default App




const App = () => {
  return (
    <div>
      <Header/>
      {/* POST CONTAINER */}
      <div style={{display:"flex",justifyContent:"center"}}>
        <div style={{width:"60%",display:"flex",justifyContent:"center"}}>

        </div>

      </div>
    </div>
  )
}

export default App