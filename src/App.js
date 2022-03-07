import logo from './logo.svg';
import './App.css';
import SelectTextFields from './form';
import { DatePicker } from '@material-ui/pickers';
import FormA from './form2';
import Test from './test';




function App() {

  return (
    <div className="App">
      <h1>DATIM DATA FETCHER</h1>
      <SelectTextFields>


 


      </SelectTextFields>

      <table>
        <tr>
          <th>Indicator</th>
          <th>County</th>
          <th>Period from</th>
          <th>Period to</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
     
    </div>
  );
}

export default App;
