import {Link} from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
    
  return (
    <>
    <div className="sidebar">
        <div ><Link style={{textDecoration:'none', color:'#fff'}} to={"/issue-book"}>Issue Book</Link></div>
        <div><Link style={{textDecoration:'none', color:'#fff'}} to={"/update-book"}>Update Book</Link></div>
        <div>Delete Book</div>
        <div>All Books</div>
    </div>
    </>
  )
}

export default Sidebar