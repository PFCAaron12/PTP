import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {MasterAndStemsUpload} from './MasterAndStemsUpload';
import styled from 'styled-components';
import { useState } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
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

function ExclusiveUpload() {
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
          flexWrap: 'wrap',
      }}>
        <div>
        <Tooltip placement="right" arrow
        title={
            <Typography color="inherit">
            {"Instrumental can only be sold once. Once a buyer purchases the exclusive version, this instrumental will become unavailable to subscribed and unsubscribed buyers. For this reason, you must select a price for this instumental between $1,000 - $10,000."}
          </Typography>
        }
      >
        <Button  onClick={handleClickOpen}>Exclusive Upload </Button>
        </Tooltip>
        </div>
        <br/>  
          </div>

          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth='md'
          >
            
             <DialogContent
              style={{height:'900px'}}>
             <Form>
               <div
               style={{
                 position: 'relative',
                 top: -10,
                 left: 10,
               }}>
            <DialogTitle id="max-width-dialog-title">Exclusive Upload</DialogTitle>
            </div>
            <br/>
            <MasterAndStemsUpload />
            <br/>
           
            </Form>
            </DialogContent>
              
          </Dialog>
         
        </>
      </MuiThemeProvider>
     
    )
}

export default ExclusiveUpload
