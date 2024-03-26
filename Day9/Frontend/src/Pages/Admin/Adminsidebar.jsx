import React from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Input,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
  } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
// import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Adminsidebar = () => {
  const navigate=useNavigate();
 
  const gotobirthdaygifts=()=>{
      navigate('/birthdaygifts');
  }
  const gotoweddingpage=()=>{
      navigate('/weddingpage');
  }
  const gotoframes=()=>{
      navigate('/framespage');
  }
  const gotoflowerbokkey=()=>{
      navigate('/flowerbokkey');
  }
  const gotologin=()=>{
    navigate('/login');
  }
  const gotoadmindetails=()=>{
    navigate('/admindetails');
  }
  const gotoadminpayemntdetails=()=>{
    navigate('/adminpaymenthistory');
  }
  const gotoadminvieworders=()=>{
    navigate('/adminvieworders');
  }
  const gotoproduct=()=>{
    navigate('/product');
  }
  const gotoadmingifts=()=>{
    navigate('/admingifts');
  }
 
    const [open, setOpen] = React.useState(0);
    // const [openAlert, setOpenAlert] = React.useState(true);
   
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
   
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] fixed mt-20 p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 flex items-center gap-4 p-4">
        <a href="#" class="flex items-center ml-10 text-2xl font-semibold text-gray-900 dark:text-black">
                    <img class="w-14 h-14 mr-2" src="https://res.cloudinary.com/doz5njr9h/image/upload/v1710735031/Gift-logo-design-template-on-transparent-background-PNG_llwcnh.png" alt="logo"/>
                    Gifty  
             </a>
        </div>
        <div className="p-2">
          <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography onClick={gotoadmingifts} color="blue-gray" className="mr-auto font-normal">
                  Gifts
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem onClick={gotobirthdaygifts}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Birthday Gifts
                </ListItem>
                <ListItem onClick={gotoweddingpage}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Aniversary Gifts
                </ListItem>
                <ListItem onClick={gotoframes}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Frames
                </ListItem>
                <ListItem onClick={gotoflowerbokkey}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Bokkey
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  E-Commerce
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem onClick={gotoadminvieworders}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem onClick={gotoproduct}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Products
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem onClick={gotoadminpayemntdetails}>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Payment
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem onClick={gotoadmindetails}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem onClick={gotologin} >
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
        {/* <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
          <CubeTransparentIcon className="mb-4 h-12 w-12" />
          <Typography variant="h6" className="mb-1">
            Upgrade to PRO
          </Typography>
          <Typography variant="small" className="font-normal opacity-80">
            Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
            and premium.
          </Typography>
          <div className="mt-4 flex gap-3">
            <Typography
              as="a"
              href="#"
              variant="small"
              className="font-medium opacity-80"
              onClick={() => setOpenAlert(false)}
            >
              Dismiss
            </Typography>
            <Typography as="a" href="#" variant="small" className="font-medium">
              Upgrade Now
            </Typography>
          </div>
        </Alert> */}
      </Card>
  );
}
  

export default Adminsidebar