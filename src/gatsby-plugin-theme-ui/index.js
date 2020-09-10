import 'fontsource-manrope/400.css'
import 'fontsource-manrope/700.css'

export default {
  colors: {
    primary: '#1F7240',
    secondary: '#EAF2D9',
    background: '#FBFFF1',
    darkBackground: '#EAF2D9',
    text: '#57AC79',
    error: '#F44336',
  },
  fonts: {
    body: 'Manrope, system-ui, sans-serif',
    heading: 'Manrope, system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    debug: '2px solid red',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: '960px',
    mobileNav: '250px',
  },
  images: {
    avatar: {
      width: '200px',
      marginTop: '20px',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      overflowX: 'hidden',
    },
  },
  buttons: {
    primary: {
      borderWidth: 3,
      borderRadius: 10,
      borderColor: 'text',
      borderStyle: 'solid',
      backgroundColor: 'secondary',
      px: 3,
      py: 2,
      color: 'text',
      fontSize: 3,
      bg: 'text',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none',
      },
    },
    icon: {
      cursor: 'pointer',
      borderRadius: 999,
      '&:focus': {
        outline: 'none',
      },
      '&:active': {
        borderColor: 'primary',
        color: 'primary',
      },
    },
  },
  text: {
    heading: {
      color: 'primary',
    },
  },
  forms: {
    input: {
      borderWidth: 3,
      borderRadius: 10,
      borderColor: 'text',
      bg: 'secondary',
      px: 3,
      py: 2,
      color: 'text',
      fontSize: 3,
      '&:focus': {
        color: 'primary',
        borderColor: 'primary',
        outline: 'none',
      },
      '&::placeholder': {
        color: 'text',
      },
    },
    checkbox: {
      outline: 'none',
      '&:focus': {
        borderColor: 'primary',
        outline: 'none',
      },
    },
    select: {
      borderWidth: 3,
      borderRadius: 10,
      borderColor: 'text',
      backgroundColor: 'secondary',
      px: 3,
      py: 2,
      color: 'text',
      fontSize: 3,
      bg: 'secondary',
      '&:focus': {
        borderColor: 'primary',
        outline: 'none',
        color: 'primary',
      },
    },
    textarea: {
      borderWidth: 3,
      borderRadius: 10,
      borderColor: 'text',
      bg: 'secondary',
      fontFamily: 'body',
      px: 3,
      py: 2,
      color: 'text',
      fontSize: 3,
      '&:focus': {
        borderColor: 'primary',
        outline: 'none',
        color: 'primary',
      },
      '&::placeholder': {
        color: 'text',
      },
    },
    slider: {
      bg: 'text',
    },
  },
}
