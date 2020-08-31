import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';



 const HorizontalChart = (props) => {
    const data = {
        labels: [ ...props.labels ],
        datasets: [
          {
            label: props.title,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [...props.metrics]
          }
        ]
      };
      

    return (
      <div className='chart'>
        <HorizontalBar data={data} />
      </div>
    );
  }

  export default HorizontalChart