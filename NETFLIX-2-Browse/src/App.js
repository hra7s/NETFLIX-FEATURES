
import Body from "./components/Body.js"
import {Provider} from "react-redux"
import appStore from "./utils/appStore"

function App() {
  return (
    <Provider store={appStore}>
       <Body/>
    </Provider>
  
  );
}

export default App;