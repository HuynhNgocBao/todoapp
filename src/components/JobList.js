import { useSelector, useDispatch } from 'react-redux'
import {removeJob, completeJob} from '../features/jobsSlice'

function JobList({ completed }) {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.value);
    function handleCompleteJob(index){
        dispatch(completeJob(index));
    }
    function handleRemoveJob(index){
        dispatch(removeJob(index));
    }
    return (
        <ul className='jobList'>
            {
                jobs.map((job, index) => 
                    job.completed===completed && <li className='jobItem' key={index}>
                        <div className='jobName'>{job.jobName}</div>
                        <div className='jobButtonWrap'>
                            {!completed && <button className='jobButton jobButtonCompleted'
                            onClick={()=>handleCompleteJob(index)}>Hoàn thành</button>}
                            {completed && <button className='jobButton jobButtonRemove'
                            onClick={()=>handleRemoveJob(index)}>Xóa bỏ</button>}
                        </div>
                    </li>
                )
            }
        </ul>
    )
}

export default JobList;