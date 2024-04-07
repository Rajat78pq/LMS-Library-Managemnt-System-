import {Route, Routes} from 'react-router-dom';
import Login from './component/login';
import Forget from './component/ForgetPsw'
import ChangePass from './component/ChangePass';
import IssueBook from './issueBook/issueBook';
import Update from './updateBook/update';


function App() {

  return (
     <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Forget' element={<Forget />}/>
      <Route path='/changePassword' element={<ChangePass />}/>
      <Route path='/issue-book' element={<IssueBook/>}/>
      <Route path='/update-book' element={<Update/>}/>
     </Routes>
  )
}

export default App
