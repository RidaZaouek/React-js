

const Person = ({sayhello,name,question}) => {
    console.log("THE PROPS ARE : "+sayhello,name,question);
  return (
        <div style={{margin:"25px",color:"black",background:"red"}}>
            <h1>
                {sayhello}
            </h1>
            <h2>
                {name}
            </h2>
            <h3>
                {question}
            </h3>
        </div>
    
  )
}

export default Person