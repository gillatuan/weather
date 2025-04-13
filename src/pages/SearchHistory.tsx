import { Container, Typography } from "@mui/material";
import History from "../components/History";
import Search from "../components/Search";

export const SearchHistory = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Search & History
      </Typography>
      <Search />
      <History />
    </Container>
  );
};