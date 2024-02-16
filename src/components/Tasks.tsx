import React from 'react';
import {DataType} from '../App';

type PropsType = {
  data: DataType
}

const Tasks = (props: PropsType) => {
  return (
    <div>
      <h2>{props.data.title}</h2>
      <ul>
        {
          props.data.tasks.map(t => {
            return (
              <li key={t.taskId}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
              </li>
            )
          })
        }
      </ul>
      <ul>
        {
          props.data.students.map(s => <li>{s}</li>)
        }
      </ul>
    </div>
  );
};

export default Tasks;
