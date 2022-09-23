import { useEffect, useState } from 'react';
import Form from './components/form/Form'
import { useDispatch } from 'react-redux';
import  { getPosts } from './actions/posts'
import Posts from './components/posts/Posts'



function App() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0)

  useEffect(()=>{
    dispatch(getPosts())
  }, [dispatch])
  
  
  return (
    <div >
      <h1>Post App</h1>
      <Posts setId={setId} />
      <Form setId={setId} getId={id} />
    </div>
  );
}

export default App;
