
import './App.css';
import compress from "./icons/compress.svg"
import expand from "./icons//expand.svg"
import { Actual_view_action, Full_view_action } from './redux/action';
// import {useDispatch}
import {useDispatch , useSelector} from 'react-redux'

function App() {
  // call screen view value
  const state = useSelector(val=>val.screen_view_reducer.screen_view)

  // dispatch screen view value
  const dispatch = useDispatch()
  
  // screen view - event handler
  const screen_view_handler = (e) => {
    // condition with handler value for max screen view
    if(e.target.value==="max"){
      // by default max view and actual view's value is false
      if(state.full_view===false){
        // if max screen value is false then it will call full screen
        // then it will dispatch new true value to the reducer
        dispatch(Full_view_action(true,true))
        document.getElementById("app").requestFullscreen().catch(()=>{ })
      }
      // condition with handler value for actual screen view
    }else if(e.target.value==="min"){
      // if actual screen value is true then it will call actual screen ot exit full screen
      // then it will dispatch false value to the reducer
      if(state.actual_view===true){
        dispatch(Actual_view_action(false, false))
        document.exitFullscreen()
      }
    }
  }
  
  return (
    <div id="app" className="App">
        <nav className="nav">
          <ul className="nav_left">

            <input 
            type="image"
            value="min"
            onClick={screen_view_handler}
            src={compress}
            alt=""
            className="screen_view_button min"
            />

            <input 
            type="image"
            value="max"
            onClick={screen_view_handler}
            src={expand}
            alt=""
            className="screen_view_button max"
            />

          </ul>
          <ul className="nav_center">center</ul>
          <ul className="nav_left">right</ul>
        </nav>
        <div className="body">
              <h1>hello</h1>
        </div>
    </div>
  );
}

export default App;
