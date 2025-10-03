import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import RainyBackground from "../components/RainyBackground";
import { AssetImg } from "../common/AssetImg";

const ContentBlock = lazy(() => import("../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../components/MiddleBlock"));
const Container = lazy(() => import("../common/Container"));

const Router = () => {
  const showLanding = false;
  return showLanding ? (
    <Suspense fallback={null}>
      <RainyBackground />
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  ) : (
    <Suspense fallback={null}>
      <RainyBackground />
      <Styles />
      
      <Container>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '3rem'
        }}>
          <AssetImg src="logo_gray.png" width="20%" height="20%" type="png" />
        </div>
        <MiddleBlock
        title={`Próximamente`}
        japaneseText="ゴーシュート"
        subTitle={`en Chile`}
        content={`El futuro del Beyblade estará en tus manos`}
        button={`Nuestro Instagram`}
        glow={true}
      />
       
      </Container>
      
    </Suspense>
  );
};

export default Router;
