
import './App.css'
import Header from './Header'
import Posts from './Posts'
import SideMenu from './SideMenu'


const showCategories=true;

function App() {

  const posts=
  [
    {id:1,postName:"أكاديمية ترميز",postBody:" أكاديمية متخصصة لتعليم البرمجة بمختلف لغاتها وتقنياتها"},
    {id:2,postName:"this is the hello world article",postBody:"this is the hello world article"},
    {id:3,postName:"this is the hello world article",postBody:"this is the body of post 3"},
    
  ]


  const myPostsLiist=posts.map((post) => {
    return(
      <Posts postName={post.postName} postBody={post.postBody} key={post.id}></Posts>
    )
  });

  return (
    <>
      <div>
            <Header/>
            <div style={{display:"flex"}}>
            <div style={{width:"70%",color:"black"}}>
              {myPostsLiist}
            </div>
            <div style={{width:"40%"}}>
                <AppSideMenu/>
            </div>
            </div>
     </div>
     </>
            

  )
}

const AppSideMenu = () => {
  
  if(showCategories==true){
    return (
              <SideMenu/>
    )
  }
  else{
    return(
              null
    )
  }
}

export default App




// const App = () => {
//   return (
//     <div>
//       <Header/>
//       {/* POST CONTAINER */}
//       <div style={{display:"flex",justifyContent:"center"}}>
//         <div style={{width:"60%",display:"flex",justifyContent:"center"}}>

//         </div>

//       </div>
//     </div>
//   )
// }

// export default App


/*============= RENDERING LIST IN REACT =========*/

// const App = () => {

// const tasks=[ 
//               {id:1,title:"doing my homeworks"},
//               {id:2,title:"reding a book"},
//               {id:3,title:"studying"},
//               {id:4,title:"cleaning my room"},
//               {id:5,title:"go to sleep"}
//             ];

// const myTasksList=tasks.map((task) => {
//   return(
//   <div style={{background:"green"}} key={task.id}>
//     <h1>
//       {task.title}
//     </h1>
//   </div>
//   )
// });

//   return (
//     <div>
//       <ul>
//         {myTasksList}
//         {/* <li style={{background:"green",color:"black"}}>doing my homework</li>
//         <li style={{background:"green",color:"black"}}>reading a book</li>
//         <li style={{background:"green",color:"black"}}>studying</li>
//         <li style={{background:"green",color:"black"}}>cleaning my room</li> */}
//       </ul>
//     </div>
//   )
// }

// export default App