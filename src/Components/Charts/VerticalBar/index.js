 
import React from 'react';
import {Bar} from 'react-chartjs-2';





const  VerticalChart = (props) => {
    const data = {
        labels: props.labels,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: props.metrics
          }
        ]
      };

    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }


  export default VerticalChart