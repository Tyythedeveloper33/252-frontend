import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}));

const menShoesData = [
  // Add your product data here with id, title, price, image etc.
];

const MenShoesPage = () => {
  const [priceRange, setPriceRange] = React.useState([0, 200]); // Example range

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Men&apos;s Shoes
      </Typography>

      {/* Filtering System */}
      <div style={{ marginBottom: '20px' }}>
        <Typography variant="h6">Filter by:</Typography>

        {/* Brand Filter (checkboxes) */}
        <div>
          <Typography variant="subtitle1">Brand</Typography>
          {/* Replace with actual brand data */}
          <label>
            <input type="checkbox" /> Nike
          </label>
          <label>
            <input type="checkbox" /> Adidas
          </label>
          <label>
            <input type="checkbox" /> Puma
          </label>
        </div>

        {/* Size Filter (dropdown or checkboxes) */}
        <div>
          <Typography variant="subtitle1">Size</Typography>
          <select>
            <option value="all">All Sizes</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        {/* Price Range Slider */}
        <div>
          <Typography variant="subtitle1">Price Range</Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
          />
        </div>
      </div>

      {/* Product Display */}
      <Grid container spacing={2}>
        {menShoesData.map((shoe) => (
          <Grid item xs={12} sm={6} md={4} key={shoe.id}>
            <StyledCard>
              <CardMedia
                component="img"
                image={shoe.image}
                alt={shoe.title}
                height="200"
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {shoe.title}
                </Typography>
                <Typography variant="body1" align="center">
                  ${shoe.price}
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Add to Cart
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MenShoesPage;
