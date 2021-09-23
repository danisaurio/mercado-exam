import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import freeShippingIcon from "../assets/images/shippingIcon.png"

function ResultCard({ item }) {
  return (
    <Link to={`/items/${item.id}`} className="search-result-link">
        <Grid container justifyContent="center" alignItems="center" >
            <Card className="search-result-card" variant="outlined">
                <CardContent>
                    <Grid container direction="row">
                        <Grid item md={2}>
                            <img src={item.picture} alt="" className="search-result-image"/>
                        </Grid>
                        <Grid item md={8}>
                            <Typography variant="h4" variantMapping="h2" color="text.secondary">
                                $ {item.price.amount} {item.price.currency} 
                                { item.free_shipping ? (
                                    <img src={freeShippingIcon} alt="Envío gratis" className="free-shipping-icon"/>
                                    ) : null
                                }
                            </Typography>
                            <Typography variant="body2" variantMapping="h1" component="div">
                                {item.title}
                            </Typography>
                        </Grid>
                        <Grid item md={2} textAlign="center" alignSelf="center">
                            <Typography variant="body2" color="text.secondary">
                                Detalles
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    </Link>
  );
}

export default ResultCard;
