import React , {useState} from 'react';
//import Logo from "../Assets/Screenshot 2023-11-21 153534.svg";
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
}from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
const Navbar = () => {
    const[openMenu,setOpenMenu]=useState(false)
    const menuOptions =[
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon/>
        },
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>

        },
        {
            text:"Login/Signup",
            icon:<PhoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>
        },
    ]
    const navigate=useNavigate();
  return (
    <nav>
        <p className='q'>AccountX</p>
        <div className='navbar-links-container'>
         <button className='primary-button' onClick={()=>(navigate("/Login"))}>Login</button>
         <button className='primary-button' onClick={()=>(navigate("/"))}>Home</button>
         <button className='primary-button' onClick={()=>(navigate("/About"))}>Trends</button>
         <button className='primary-button' onClick={()=>(navigate("/Work"))}>work</button>
            <BsCart2 className='navbar-cart-icon'/>
            
            <button className='primary-button'>
                Join Now
            </button>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={ () => setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onclose={() => setOpenMenu(false)} anchor="right">
            <Box sx={{width:250}}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
            >
                <list>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding >
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>

                    ))}
                </list>
            </Box>
        </Drawer>
    </nav>
      
  )
}

export default Navbar
