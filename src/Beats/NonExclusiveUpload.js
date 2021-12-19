import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import MasterUpload from './MasterUpload';
import styled from 'styled-components';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


const Form = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
  z-index: 1000;
  left: 45px;
  top: 1px;
`;

const Button = styled.button`
	border: none;
	display: flex;
	margin-top: 8px;
	cursor: pointer;
	padding: 6px 16px;
	border-radius: 6px;
	align-items: center;
	justify-content: center;
	background: darkslategray;
`;

function NonExclusiveUpload() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
    
        return (
    
            <MuiThemeProvider>
            <>
            <div
        style={{
          display: 'flex',
          alignItems: 'center',
          
      }}>
        <div>
        <Tooltip placement="right" arrow
        title={
            <Typography color="inherit">
            {"Instrumental can only be sold a total of 4 times to unsubsribed buyers. There is not a limit on the number of times this instrumental can be sold to subscribed buyers. For this reason, you must select a price for this instumental between $100 - $500."}
        </Typography>
        }
      >
        <Button  onClick={handleClickOpen}>Non Exclusive Upload </Button>
        </Tooltip>
        </div>
          </div>
          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth='md'
            sx={{height:'2000px'}}
          >
            <DialogContent
              style={{height:'350px'}}>
                 <Form>
              
            <DialogTitle id="max-width-dialog-title">Non Exclusive Upload</DialogTitle>
            
                <br />
                <MasterUpload />
                </Form>
                </DialogContent>
              </Dialog>
            </>
          </MuiThemeProvider>
        )
}

export default NonExclusiveUpload
