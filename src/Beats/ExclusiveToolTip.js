import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from '@mui/material/IconButton';


const EToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function ExclusiveToolTip() {
  return (
    <div>
      <EToolTip
        title={
            <Typography color="inherit">Exclusive Price
            {"Instrumental can only be sold once. Once a buyer purchases the exclusive version, this instrumental will become unavailable to subscribed and unsubscribed buyers. For this reason, you must select a price for this instumental between $1,000 - $10,000."}
          </Typography>
        }
      >
         <IconButton>
            <HelpOutlineIcon />  
            </IconButton>
      </EToolTip>
    </div>
  );
}
