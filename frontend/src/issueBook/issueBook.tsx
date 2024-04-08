import { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import './issue.css';
import axios from 'axios';
const IssueBook = () => {
  const [Registration, setRegistration] = useState('');
  const [Branch, setBranch] = useState('');
  const [RollNo, setRollNo] = useState('');
  const [Book, setBook] = useState('');
  const [Author, setAuthor] = useState('');
  const [Date, setDate] = useState('');


  const AddBooks = async(e: any) => {
    e.preventDefault();

    try {
    const Response = await axios.post(`http://localhost:2000/add-book`, { Registration: Registration, Branch: Branch, RollNo: RollNo, BookName: Book, Author: Author, Date: Date })
      if(Response.data.succes == true){
        alert("Data Stored");
      }
    } catch (error) {
      console.log(`Error from frontend ${error}`);
    }
  }


  return (
    <>
      <div className="issue-book">
        <div className="left-box">
          <Sidebar />
        </div>
        <div className="issue-book-content">
          <h2>Issue Books</h2>

          <form>
            <div className="form">
              <div className="form-style">
                <label htmlFor="Registration">Enter Registration No</label>
                <input onChange={(e) => { setRegistration(e.target.value) }} type="text" placeholder='Registration No.' required />
                <label htmlFor="Branch">Enter Branch</label>
                <input onChange={(e) => { setBranch(e.target.value) }} type="text" placeholder='Branch' required />
              </div>
              <div className="form-style">
                <label htmlFor="RollNo">Roll No</label>
                <input onChange={(e) => { setRollNo(e.target.value) }} type="text" placeholder='Roll no' required />
                <label htmlFor="Book Name">Book Name</label>
                <input onChange={(e) => { setBook(e.target.value) }} type="text" placeholder='Book Name' required />
              </div>
              <div className="form-style">
                <label htmlFor="Author">Author Name</label>
                <input onChange={(e) => { setAuthor(e.target.value) }} type="text" placeholder='Author' required />
                <label htmlFor="Issue Date">Issue Date</label>
                <input onChange={(e) => { setDate(e.target.value) }} type="date" name="Issue Date" id="issueDAte" required />
              </div>
              <button onClick={AddBooks}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default IssueBook