import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from '@mui/material/IconButton';


const NEToolTip = styled(({ className, ...props }) => (
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

export default function NonExclusiveToolTip() {
  return (
    <div>
      <NEToolTip
        title={
            <Typography color="inherit">Exclusive Price
            {"Instrumental can only be sold a total of 4 times to unsubsribed buyers. There is not a limit on the number of times this instrumental can be sold to subscribed buyers. For this reason, you must select a price for this instumental between $100 - $500."}
        </Typography>
        }
      >
         <IconButton>
            <HelpOutlineIcon />  
            </IconButton>
      </NEToolTip>
    </div>
  );
}
