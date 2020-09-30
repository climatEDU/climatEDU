/** @jsx jsx */
import { Box, IconButton, Image, Flex, jsx } from 'theme-ui'
import useAuth from '../util/auth'
import logo from '../media/climatedu.png'
import { useStaticQuery, graphql } from 'gatsby'

import { DesktopNavButton, MobileNavButton } from './navbutton'

import { IoMdPerson, IoMdMenu, IoMdClose } from 'react-icons/io'

import Container from './container'

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
  const user = useAuth()
  const {
    site: {
      siteMetadata: { navLinks: links },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          navLinks {
            location
            text
            dropdown {
              location
              text
            }
          }
        }
      }
    }
  `)

  return (
    <Container
      as='nav'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '12rem',
        py: 4,
      }}
    >
      <Image src={logo} alt='climatedu logo' sx={{ maxHeight: '100%' }} />
      <Flex
        as='ul'
        sx={{
          listStyle: 'none',
          display: ['none', null, 'flex'],
          alignItems: 'baseline',
          p: 0,
        }}
      >
        {links.map((props, i) => (
          <DesktopNavButton key={i} as='li' sx={{ mr: 3 }} {...props} />
        ))}

        <DesktopNavButton as='li' location='/login' text='Login'>
          <IoMdPerson
            sx={{
              fontSize: '125%',
              verticalAlign: 'text-top',
              ml: 1,
            }}
          />
        </DesktopNavButton>
      </Flex>
      <IconButton
        sx={{
          p: 3,
          height: '5em',
          width: '5em',
          color: 'primary',
          display: ['inline-flex', null, 'none'],
        }}
        onClick={() => {
          setNavbarOpen(true)
        }}
      >
        <IoMdMenu size='100%' />
      </IconButton>
      <Box
        sx={{
          display: navbarOpen ? 'block' : 'none',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        onClick={() => setNavbarOpen(false)}
      />
      <Box
        sx={{
          display: ['block', null, 'none'],
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: 'mobileNav',
          backgroundColor: 'background',
          boxShadow: '-6px 4px 24px rgba(0,0,0,.15)',
          overflowX: 'hidden',
          overflowY: 'auto',
          transition: 'transform .3s',
          transform: `translateX(${navbarOpen ? 0 : '100%'})`,
          zIndex: 999,
        }}
      >
        <IconButton
          sx={{
            p: 3,
            height: '5em',
            width: '5em',
            color: 'primary',
          }}
          onClick={() => {
            setNavbarOpen(false)
          }}
        >
          <IoMdClose size='100%' />
        </IconButton>
        <Box
          as='ul'
          sx={{
            listStyle: 'none',
            fontWeight: 'bold',
            p: 0,
          }}
        >
          {links.map((props, i) => (
            <MobileNavButton key={i} as='li' {...props} />
          ))}
          <MobileNavButton
            as='li'
            location='/login/'
            text={user?.displayName ?? 'Login'}
          >
            <IoMdPerson size='1.5em' />
          </MobileNavButton>
        </Box>
      </Box>
    </Container>
  )
}

export default Navbar
