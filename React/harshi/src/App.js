
function App() {
  

  function change(){
    const name = ["earn","learn","make"];
    const number = Math.floor(Math.random()*3);
    return name[number]
  }
  return (
    <div>
            Sirikira nee 
            <p>lets {change()} money</p>
    </div>
  );
}

export default App;
