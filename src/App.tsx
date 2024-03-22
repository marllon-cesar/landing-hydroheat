import { Box, Container, Divider, Typography } from '@mui/material';
import './App.css';
import logo from './assets/logo_hydroheat.png';
import bar from './assets/footer_bar.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        position: 'relative',
        backgroundColor: '#204572',
        padding: '0 0px !important',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '200px', sm: '300px', lg: '340px' },
          height: { xs: '130px', sm: '150px', lg: '160px' },
          marginBottom: { xs: '8%', sm: '3%' },
        }}
      >
        <img
          style={{
            width: '100%',
            height: '100%',
          }}
          src={logo}
          alt='logo_hydroheat'
        />
      </Box>
      <Typography
        sx={{
          fontFamily: 'Eastman trial, sans serif',
          color: '#fff',
          fontSize: { sm: '20px', lg: '30px' },
          letterSpacing: { xs: '11px', sm: '25px', lg: '30px' },
          marginleft: { lg: '10px' },
        }}
      >
        LOADING...
      </Typography>
      <Box
        sx={{
          border: '1px solid #fff',
          height: { xs: '25px', sm: '40px', lg: '50px' },
          width: { xs: '200px', sm: '350px', lg: '450px' },
          borderRadius: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '68%',
            backgroundColor: '#06A596',
            borderRadius: { xs: 2, sm: 3 },
          }}
        ></Box>
      </Box>
      <Typography
        sx={{
          fontFamily: 'Eastman trial, sans serif',
          color: '#fff',
          fontSize: { xs: '25px', sm: '30px', lg: '40px' },
          textAlign: 'center',
          marginTop: '5%',
          lineHeight: 0.5,
        }}
      >
        NOVO
        <br />
        <Typography
          sx={{
            fontFamily: 'Eastman trial, sans serif',
            color: '#fff',
            fontSize: { xs: '25px', sm: '30px', lg: '40px' },
            fontWeight: 600,
          }}
        >
          SITE EM BREVE
        </Typography>
      </Typography>

      <Divider
        orientation='horizontal'
        sx={{ backgroundColor: '#fff', width: '50px', my: 4 }}
      />
      <Typography
        sx={{
          fontFamily: 'Eastman trial, sans serif',
          color: '#4ACDD9',
          fontSize: '25px',
          textShadow: '0px 4px 4px #0000003a',
        }}
      >
        CONTATO
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <WhatsAppIcon sx={{ color: '#4ACDD9', fontSize: '30px' }} />
          <Typography
            sx={{
              fontFamily: 'Proxima Nova Rg Regular',
              fontSize: '23px',
              color: '#fff',
            }}
          >
            +55 (45) 9 9152-2710
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <EmailOutlinedIcon sx={{ color: '#4ACDD9', fontSize: '30px' }} />
          <Typography
            sx={{
              fontSize: '23px',
              fontFamily: 'Eastman trial, sans serif',
              color: '#fff',
            }}
          >
            contato@hydroheat.com.br
          </Typography>
        </Box>
      </Box>
      <img
        style={{ position: 'absolute', left: 0, bottom: 0, width: '100%' }}
        src={bar}
        alt='footer bar'
      />
    </Container>
  );
}

export default App;
