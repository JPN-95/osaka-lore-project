import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import locations from "./data/locations.json"
const options = [
];

for(var i in locations)
    options.push(i);
const ITEM_HEIGHT = 48;

function LongMenu({onSelect}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (name) => {
    onSelect(name);
    setAnchorEl(null);
  };
  return (
    <div className='map-menu'>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
          list: {
            'aria-labelledby': 'long-button',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem value={option} key={option} selected={option === 'Pyxis'} onClick={() => handleClose(option)}>
            {option} 
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default LongMenu