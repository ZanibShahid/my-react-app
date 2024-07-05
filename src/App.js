import './App.css';


function App() {
  const colors = [
    <h3>Red</h3>,
    <h3>Green</h3>,
    <h3>Blue</h3>,
    <h3>Brown</h3>]
  // const element = <h1>Hello</h1>
  // console.log(element)
  // const nums = [1, 2, 3, 4, 5]
  // const squared = nums.map(nums => nums*nums)
  // console.log(squared)


  // const names = ["Alina", "Zanib", "Irfan", "Sufyan"]
  // const newarr = names.map((name) => {
  //   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  // })
  // console.log(newarr)



  // const names = ["Alina", "Zanib", "Irfan", "Sufyan"]
  // const newarr = names.map(name => {
  //     return `<p>${name}</p>`
  //   })
  // console.log(newarr)

  return (
   <div>
    {colors}

   </div>
   
  );
}

export default App;
