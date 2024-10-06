
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Use your primary color
  color: '#fff',
  padding: '12px 24px',
  fontSize: '1.2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main, // Use your secondary color for hover
    transform: 'scale(1.05)',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 4px ${theme.palette.primary.light}`, // Highlight on focus
  },
}));

const ShopNowButton = () => {
  return (
    <StyledButton variant="contained">
      Shop Now
    </StyledButton>
  );
};

export default ShopNowButton;
