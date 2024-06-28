import './App.css';


function App() {
  // const nums = [1, 2, 3, 4, 5]
  // const squared = nums.map(nums => nums*nums)
  // console.log(squared)


  // const names = ["Alina", "Zanib", "Irfan", "Sufyan"]
  // const newarr = names.map((name) => {
  //   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  // })
  // console.log(newarr)



  const names = ["Alina", "Zanib", "Irfan", "Sufyan"]
  const newarr = names.map(name => {
      return `<p>${name}</p>`
    })
  console.log(newarr)

  return (
   <div>
    <h1></h1>

   </div>
   
  );
}

export default App;
