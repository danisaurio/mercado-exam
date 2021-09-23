import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

function ProductDetail({ item }) {
    const handleClick = () =>{
        window.alert('Comprado!')
    }
    return (
        <Grid container justifyContent="center" alignItems="center" >
            <Card className="product-detail-card" variant="outlined">
                <CardContent>
                    <Grid container justifyContent="center">
                        <Grid item md={6} className="product-detail-description">
                            <img src={item.picture} alt="" className="product-detail-image"/>
                            <Grid item md={12} textAlign="left" alignSelf="center" >
                                <Typography variant="h5" variantMapping={{h5:"h2"}}  color="text.secondary" className="product-detail-description-title">
                                    Descripcion del producto
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className="product-detail-description-text">
                                    { item.description }
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item md={6} textAlign="left">
                            <Typography variant="caption"  color="text.secondary">
                            {
                                item.condition === "new" ? (
                                    'Nuevo '
                                ) : (
                                    'Usado '
                                )
                            }
                            -
                            {
                                ` ${item.sold_quantity} vendidos`
                            }
                            </Typography>
                            <Typography variant="h5" variantMapping={{h5:"h1"}}  color="text.secondary">
                                {item.title}
                            </Typography>
                            <Typography variant="h5" variantMapping={{h5:"h1"}}  color="text.secondary">
                                $ {item.price?.amount} {item.price?.currency}
                            </Typography>
                            <Button variant="contained" onClick={handleClick} className="product-detail-button">
                                Comprar
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
  );
}

export default ProductDetail;
