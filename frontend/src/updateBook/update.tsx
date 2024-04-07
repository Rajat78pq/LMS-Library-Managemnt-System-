import './update.css';
import Sidebar from '../sidebar/sidebar';
import '../issueBook/issue.css';

const Update = () => {
  return (
     <>
     <div className="Update-book">
    <div className="left-box">
    <Sidebar />
    </div>
    <div className="issue-book-content">
        <h2>Update Books</h2>
        
        <form>
        <div className="form">
          <div className="form-style">
          <label htmlFor="Resistration">Enter Resistration No</label>
          <input type="text" placeholder='Resistration No.'  required/>
          <label htmlFor="Branch">Enter Branch</label>
          <input type="text" placeholder='Branch' required/>
          </div>
          <div className="form-style">
          <label htmlFor="RollNo">Roll No</label>
          <input type="text" placeholder='Roll no' required/>
          <label htmlFor="Book Name">Book Name</label>
          <input type="text" placeholder='Book Name' required/>
          </div>
          <div className="form-style">
          <label htmlFor="Author">Author Name</label>
          <input type="text" placeholder='Author' required/>
          <label htmlFor="Issue Date">Issue Date</label>
          <input type="date" name="Issue Date" id="issueDAte" required/>
          </div>
        </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Update