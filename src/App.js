import './App.css';
import Add from "./components/Add";
import sdata from "./sdata"

function card(value){
  return(
     <Add
     imgsrc={value.imgsrc}
     cardTitle={value.cardTitle}
     cardText={value.cardText}
     link={value.link}
   />);
}
function App() {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-4">
          { sdata.map(card)[0]}
          </div>
          <div className="col-4">
          { sdata.map(card)[1]}
          </div>
          <div className="col-4">
          { sdata.map(card)[2]}
          </div>
          </div>
          <div className="row">
          <div className="col-4">
          { sdata.map(card)[0]}
          </div>
          <div className="col-4">
          { sdata.map(card)[1]}
          </div>
          <div className="col-4">
          { sdata.map(card)[2]}
          </div>
          </div>
          <div className="row">
          <div className="col-4">
          { sdata.map(card)[0]}
          </div>
          <div className="col-4">
          { sdata.map(card)[1]}
          </div>
          <div className="col-4">
          { sdata.map(card)[2]}
          </div>
          </div>
          <div className="row">
          <div className="col-4">
          { sdata.map(card)[0]}
          </div>
          <div className="col-4">
          { sdata.map(card)[1]}
          </div>
          <div className="col-4">
          { sdata.map(card)[2]}
          </div>
          </div>
          </div>
    </>
  );
}

export default App;
