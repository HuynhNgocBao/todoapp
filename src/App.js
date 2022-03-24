import {useState, useRef} from 'react'
import JobList from './components/JobList';
import { useDispatch } from 'react-redux';
import { addJob } from './features/jobsSlice';
import './App.css';

function App() {
  const jobInputRef = useRef();
  const [completed, setCompleted] = useState(false);
  const [jobName, setJobName]= useState('');
  const dispatch = useDispatch();
  function handleAddJob(){
    dispatch(addJob(jobName));
    setJobName('');
    jobInputRef.current.focus();
  }

  return (
    <div className='container'>
      <div className='appTitle'>Ứng dụng quản lý công việc</div>
      <div className='jobInputWrap'>
        <input className='jobInput' placeholder='Nhập công việc muốn thêm' value={jobName} ref={jobInputRef}
        onChange={(e)=>setJobName(e.target.value)}
        />
        <button className='addJobButton' onClick={handleAddJob}>Thêm công việc</button>
      </div>
      <ul className='jobTabList'>
        <li className='jobTabItem' onClick={()=>setCompleted(false)}>Chưa hoàn thành</li>
        <li className='jobTabItem' onClick={()=>setCompleted(true)}>Đã hoàn thành</li>
      </ul>
      {!completed && <div className='jobTabTitle'>Danh sách công việc chưa hoàn thành</div>}
      {completed && <div className='jobTabTitle'>Danh sách công việc đã hoàn thành</div>}
      <JobList completed={completed}></JobList>
    </div>
  );
}

export default App;
