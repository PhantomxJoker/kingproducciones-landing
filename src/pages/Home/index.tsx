import { lazy } from "react";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const openWeb = (web: string) => {
  window.open(web, "_blank");
};

const scrollTo = (id: string) => {
  const element = document.getElementById(id) as HTMLDivElement;
  element.scrollIntoView({
    behavior: "smooth",
  });
};

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        japaneseText="ゴーシュート"
        title={"Go Shoot!"}
        content={`Intro Content`}
        button={[
          {
            "title": `Buy your tickets`,
            "clickAction": () => openWeb("#"),
          },
          {
            "title": `Check our bases`,
            "color": "#fff",
            "clickAction": () => scrollTo("bases"),
          }
        ]}
        icon="logo_color.png"
        iconMobile="logo_color.png"
        id="intro"
        glow={true}
      />
      <MiddleBlock
        title={`Because a convention was needed where`}
        subTitle={`The cosplay be the protagonist`}
        content={`Description main phrase`}
        button={`Check our sponsors`}
        glow={true}
      />
      <ContentBlock
        direction="left"
        japaneseText="ほうてき こんきょ,"
        title={`Participate`}
        subTitle={`With us`}
        content={`Check our bases detailed`}
        section={[
          {
            "title": `Stands and Foodtrucks Bases`,
            "htmlContent": '<a class="download-anchor" target="_blank" href="/pdf/bases_food.pdf">► Bases foodtruck & foodstand</a><br /><a class="download-anchor" target="_blank" href="/pdf/bases_stand.pdf">► Bases stand emprendedores</a>',
            "icon": "notes.svg"
          },
          {
            "title": `Stands and Foodtrucks Bases`,
            "htmlContent": '<a class="download-anchor" target="_blank" href="/pdf/bases_food.pdf">► Bases foodtruck & foodstand</a><br /><a class="download-anchor" target="_blank" href="/pdf/bases_stand.pdf">► Bases stand emprendedores</a>',
            "icon": "notes.svg"
          }
        ]}
        icon="logo_color.png"
        iconMobile="logo_color.png"
        id="bases"
        glow={false}
      />
      <ContentBlock
        direction="right"
        japaneseText="スポンサー"
        title="Sponsor"
        content={`Sponsor Text`}
        icon="hasbro_logo.png"
        iconMobile="hasbro_logo.png"
        id="sponsor-hasbro"
        glow={false}
        button={[
          {
            "title": `Visit our page`,
            "clickAction": () => openWeb("https://hasbro.cl"),
          }
        ]}
      />
      <ContentBlock
        direction="left"
        japaneseText="スポンサー"
        title="Sponsor"
        content={`Sponsor Text`}
        icon="hasbro_logo.png"
        iconMobile="hasbro_logo.png"
        id="sponsor-hasbro"
        glow={false}
        button={[
          {
            "title": `Visit our page`,
            "clickAction": () => openWeb("https://hasbro.cl"),
          }
        ]}
      />
      <Contact
        title={`Contact Form`}
        content={`Contact Form Description`}
        id="contact"
      />
    </Container>
  );
};

export default Home;
