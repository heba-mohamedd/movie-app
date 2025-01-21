import MovieList from "./views/MovieList"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header";
import Main from "./components/Main"

function App() {
  return (
    <div className="body" >
      <div className="container">
        <Header />
        <div className="row mt-4">
          <p><h3>Explore</h3>
            <span style={styles.span}>What are you gonna watch today?</span></p>
        </div>
        
        
        <MovieList />
      </div>






    </div>
  );
}


const styles = {
  span: {
    color: "gray",
  }

}

export default App;
