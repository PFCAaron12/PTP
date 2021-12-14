import { Component, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { common } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class StemsUpload extends Component {
   

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const [fileName, setFileName] = useState([
        { id: uuidv4(), stem: null },
      ]);
    const selectedBeat = (id, event) => {
        const newFileName = fileName.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        setFileName(newFileName);
      } 
      const handleAddBeat = () => {
        setFileName([...fileName, { id: uuidv4(), stem: null }])
      }
    
      const handleRemoveBeat = id => {
        const values  = [...fileName];
        values.splice(values.findIndex(value => value.id === id), 1);
        setFileName(values);
      }
     



    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
              <div>
            <AppBar title="Add Stems/Multitracks" />
            </div>

            <div>
            { fileName.map(fileName => (
          <div key={fileName.id}>
            <label for="file-input">
            <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
            <Input
            type='file' 
            accept='beat/wav' 
            value={fileName.stem}
            onChange={event => selectedBeat(fileName.id, event)}
            /> 
            </label>
            <IconButton disabled={fileName.length === 1} onClick={() => handleRemoveBeat(fileName.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddBeat}
            >
              <AddIcon />
            </IconButton>
            </div>
            )) }
            </div>
            <br />

            <Button
              variant="contained"
              onClick={this.back}
              sx={{ color: common.black }}
            >Back</Button>

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

export default StemsUpload;
