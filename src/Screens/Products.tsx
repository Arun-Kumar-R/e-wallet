import { Container, Grid } from "@mui/material";
import Product from "../Components/Shared/Product";
import { ProductsData } from "../mock_data/products";
import Layout from "../Components/Shared/Layout";

export default function Products() {
  return (
    <Layout>
      <Container>
        <div className="product-grid">
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent="center"
          >
            {ProductsData.map((item: any, index: number) => (
              <Product item={item} key={index} />
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
