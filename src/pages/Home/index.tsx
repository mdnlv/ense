import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const PesniGoda = lazy(() => import("../../components/PesniGoda"));
const OpenCall = lazy(() => import("../../components/OpenCall"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      
      <PesniGoda id="pesni" />
      
      <OpenCall id="open" />

    </Container>
  );
};

export default Home;
