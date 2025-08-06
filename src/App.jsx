import {Routes, Route} from `react-router-dom`;
import Posts from `/components/posts`
import Post from `/components/post`

function App(){
 return (
<Route>
  <Route path = "/" element = {<Posts/>}/>
 <Route path = "/posts/:id" element = {<Post/>}/>



</Route>

 );
}

export default App;