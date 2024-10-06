import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}));

const categories = [
  {
    title: "Men's Shoes",
    image: 'https://images.unsplash.com/photo-1602424166795-9bba999cb5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxzaG9lcyUyMG1lbnxlbnwwfHx8fDE2ODQ3NTc2OTU&ixlib=rb-4.0.3&q=80&w=400',
    link: '/MenShoes',
  },
  {
    title: "Men's Apparel",
    image: 'https://images.unsplash.com/photo-1501171677305-6c2d3a1347f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI2fHx0ZWV8ZW58MHx8fHwxNjg0NzU3NzI3&ixlib=rb-4.0.3&q=80&w=400',
    link: '/men-apparel',
  },
  {
    title: "Women's Shoes",
    image: 'https://images.unsplash.com/photo-1575466092620-1ebc4bcb89e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxzaG9lcyUyMHdlbWVufGVufDB8fHx8MTY4NDc1NzgyMw&ixlib=rb-4.0.3&q=80&w=400',
    link: '/women-shoes',
  },
  {
    title: "Women's Apparel",
    image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI1fHx3b21lJTIwYXBwYXJlbHxlbnwwfHx8fDE2ODQ3NTc4MTg&ixlib=rb-4.0.3&q=80&w=400',
    link: '/women-apparel',
  },
  {
    title: "Kids' Shoes",
    image: 'https://images.unsplash.com/photo-1587081658763-33c1c3e06f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIxfHxraWRzJTIwc2hvZXxlbnwwfHx8fDE2ODQ3NTc4NjA&ixlib=rb-4.0.3&q=80&w=400',
    link: '/kids-shoes',
  },
  {
    title: "Kids' Apparel",
    image: 'https://images.unsplash.com/photo-1560887300-f7778d29917e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDg0fHxraWRzJTIwYXBwYXJlbHxlbnwwfHx8fDE2ODQ3NTc4OTk&ixlib=rb-4.0.3&q=80&w=400',
    link: '/kids-apparel',
  },
  {
    title: "New Arrivals",
    image: 'https://images.unsplash.com/photo-1602009436766-5c5c8ed76f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDExOXx8bmV3JTIwYXJyYWl2YWxzfGVufDB8fHx8MTY4NDc1NzkwNA&ixlib=rb-4.0.3&q=80&w=400',
    link: '/new-arrivals',
  },
  {
    title: "Sale",
    image: 'https://images.unsplash.com/photo-1611682051485-bd1138ff6dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0Mnx8c2FsZXxlbnwwfHx8fDE2ODQ3NTc5MTQ&ixlib=rb-4.0.3&q=80&w=400',
    link: '/sale',
  },
];

const FeaturedCategories = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Shop by Category
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.title}>
            <Link to={category.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <StyledCard>
                <CardMedia
                  component="img"
                  image={category.image}
                  alt={category.title}
                  height="200"
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {category.title}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedCategories;
