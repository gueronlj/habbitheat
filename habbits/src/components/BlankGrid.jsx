
const BlankGrid = () => {

   //render squares in a grid. The grid should be 7 rows and clumns should be enough to fit 366 squares
   //each square should be 1rem by 1rem
   const squaresToRender = []

   for (let i = 0; i < 53; i++) {

      //render a 7 squares in a column
      for(let j = 0; j < 7; j++) {
         console.log("rendering a square")
         //render a square
         squaresToRender.push(
            <div 
               className="square"
               style={{
                  backgroundColor: "white",
               }}/>
         )

      }

   }

   return (
      <div className="grid">{squaresToRender}</div>
   )
}

export default BlankGrid;