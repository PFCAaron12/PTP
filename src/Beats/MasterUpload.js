import { Component, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { common } from '@mui/material/colors';
import ExclusiveToolTip from './ExclusiveToolTip'
import NonExclusiveToolTip  from './NonExclusiveToolTip'
import Checkbox from '@mui/material/Checkbox';

export class MasterUpload extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  

  render() {
    const { values, handleChange } = this.props;
    const [genre, setGenre] = useState();
    const [checked, setChecked] = useState(false);
    const checkboxChange = (event) => {
      setChecked(event.target.checked);
    };

    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Master Instrumental Details" />
            <p> The master instrumental MUST have the producer tag inserted. </p>
            <TextField
              placeholder="Enter Title of Instrumental"
              label="Title"
              onChange={handleChange('title')}
              defaultValue={values.title}
              margin="normal"
              fullWidth
            />
        
            <p> Select a Genre </p>
            <select value={values.genre} onChange={(e) => {setGenre(e.target.value);}}>
              <option></option>
              <option>HipHop</option>
              <option>R&B</option>
              <option>Pop</option>
              <option>Other</option>
            </select>
            <br />

            <Checkbox 
            checked={checked}
            onChange={checkboxChange}
            inputProps={{ 'aria-label': 'controlled' }}
            value={values.exclusiveChecked}
            />
            <p> Exclusive Price
            <ExclusiveToolTip />
            </p>
            <TextField
              type="number"
              min="1000" 
              max="10000"
              placeholder="$1,000-$10,000"
              label="Exclusive Price"
              onChange={handleChange('exclusivePrice')}
              defaultValue={values.exclusivePrice}
              margin="normal"
              fullWidth
            />
            <br />

            <Checkbox 
            checked={checked}
            onChange={checkboxChange}
            inputProps={{ 'aria-label': 'controlled' }}
            value={values.nonExclusiveChecked}
            />
            <p> Non Exclusive Price 
            <NonExclusiveToolTip />
            </p>
            <TextField
              type="number"
              min="100" 
              max="500"
              placeholder="$100-$500"
              label="Non Exclusive Price"
              onChange={handleChange('nonExclusivePrice')}
              defaultValue={values.nonExclusivePrice}
              margin="normal"
              fullWidth
            />

            <br />
            <Button
              variant="contained"
              onClick={this.continue}
              sx={{ color: common.black }}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default MasterUpload;