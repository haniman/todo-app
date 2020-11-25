import React, { useState, useEffect, ComponentProps } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

//belum siap
function TaskPie (props) {

  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [task, setTask] = useState(props.tasks);

  const dataMock= [
    { title: 'completed', value: 5, color: '#5285ec' },
    { title: 'undone', value: 15, color: '#e8ecec' },
  ];

  return (

    <div className="col-lg-4 col-xs-12 col-sm-12 pr-1 d-flex">
      <div className="card card-body flex-fill">
          <div className="card-body">
          <h5>Unfinished Test</h5>
          <div data-tip="" data-for="chart">
              <PieChart style={{ height: '100px' }}
                data={dataMock}
              />;
            </div>
           
          </div>
      </div>
    </div>
    
  );
}

export default TaskPie;

