import { useState, useEffect } from "react";

function Clock(props) {
  const [date, setDate] = useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     //This declared the state of time at the very beginning
//     this.state = {
//       time: new Date().toLocaleTimeString(),
//     };
//   }
//   //This happens when the component mount and the setInterval function get called with a call back function updateClock()
//   componentDidMount() {
//     this.intervalID = setInterval(() => this.updateClock(), 1000);
//   }
//   //This section clears setInterval by calling intervalID so as to optimise memory
//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }
//   //This function set the state of the time to a new time
//   updateClock() {
//     this.setState({
//       time: new Date().toLocaleTimeString(),
//     });
//   }
//   render() {
//     return (
//       <div className="Time">
//         <p> {this.state.time}</p>
//       </div>
//     );
//   }
// }
// export default Clock;
