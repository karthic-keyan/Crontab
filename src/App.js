import { cron } from "node-cron";

/**
 * 
import { CronJob } from 'cron';

const job = new CronJob(
	'* * * * * *', // cronTime
	function () {
		console.log('You will see this message every second');
    }, // onTick
    null, // onComplete
    true, // start
    'America/Los_Angeles' // timeZone
    );
    */
function App() {
  console.log("cron", cron);
  return <div className="App">Hello</div>;
}

export default App;
