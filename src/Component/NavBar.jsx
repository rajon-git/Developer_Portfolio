import {
    Box,
    Flex,
    Text,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    useDisclosure
  } from '@chakra-ui/react'
import { useRef} from 'react'
import logo from './sumat-low-resolution-logo-color-on-transparent-background.png'
import { HamburgerIcon } from '@chakra-ui/icons'



  
  export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
   

   return (<Box id="nav-menu">
        <Box  backdropFilter='auto' backdropBlur='10px' pt='5px' pb='15px' top='0px' position='fixed' w='100%'  display={{base:'none',sm:'none',md:'none',lg:'inline-block'}} zIndex='99'>
        <Flex w='92%' m='auto' textAlign='center' justify='space-between' align='center' mt='10px'>
          <Box >
            <Box w='25%' >
            <img width='80%' src={logo} />
             </Box>
          </Box>
          <Flex   w='55%' justify='space-between' letterSpacing='1px' >

          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='#1976D2'>
            <Text className="nav-link home">HOME</Text>
          </Box>
          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'>
            <Text className="nav-link about">ABOUT</Text>
          </Box>
          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'>
            <Text className="nav-link skills">SKILLS</Text>
          </Box>
          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'>
            <Text className="nav-link projects">PROJECTS</Text>
          </Box>
          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'>
            <Text className="nav-link contact">CONTACT</Text>
          </Box>
          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'>
           <a href='./../Banner/RAJON_MERN.pdf' download> <Text className="nav-link resume" id="resume-button-1">RESUME</Text></a>
          </Box>

          </Flex>
        </Flex>
        </Box>
        <Box  backdropFilter='auto' backdropBlur='10px' pt='5px' pb='15px' top='0px' position='fixed' w='100%'  display={{base:'block',sm:'block',md:'block',lg:'none'}}>
          <Flex  w='92%' m='auto' textAlign='center' justify='space-between' align='center' mt='10px'>
             {/* for icon  */}
             <Box w='25%' >
            <img width='50%' src={logo} />
             </Box>
    {/* for slider hamburger menu*/}
          <Box  w='5%' ref={btnRef} onClick={onOpen}>
            <HamburgerIcon color='white' fontSize='35px'/>
          </Box>  
          </Flex>
        </Box>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent mt={{base:'12%',sm:'9%' , md:'8%'  }} backdropFilter='auto' background='' backdropBlur='10px' pt='5px'>
          <DrawerBody>

            <Box p='5px 15px' bg='#57BB99' color='#004D40'fontWeight='bolder'  m='10px 0'>
              <Text>HOME</Text>
            </Box>
            <Box p='5px 15px' bg='#57BB99' color='#004D40' fontWeight='bolder'   m='10px 0' >
              <Text>ABOUT</Text>
            </Box>
            <Box p='5px 15px' bg='#57BB99' color='#004D40' fontWeight='bolder'   m='10px 0'>
              <Text>SKILLS</Text>
            </Box>
            <Box p='5px 15px' bg='#57BB99' color='#004D40' fontWeight='bolder'   m='10px 0'>
              <Text>PROJECTS</Text>
            </Box>
            <Box p='5px 15px' bg='#57BB99' color='#004D40' fontWeight='bolder'   m='10px 0'>
              <Text>CONTACT</Text>
            </Box>
            <Box p='5px 15px' bg='#57BB99' color='#004D40' fontWeight='bolder'   m='10px 0'>
            <a href='./../Banner/RAJON_MERN.pdf' download> <Text className="nav-link resume" id="resume-button-1">RESUME</Text></a>
            </Box>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
    )
  }