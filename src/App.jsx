import "./App.css";
import { useLoaderData } from "react-router";

function App() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Lawyers data={data}></Lawyers>
      <Services></Services>
    </div>
  );
}

export default App;
