import WebLinks from "../components/WebLinks";
import Seo from "../components/Seo";
import seoData from "../next-seo.config";

export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: "home",
    slug: "/",
    coverImage:
      "https://pub-f858c7e521464395920779af297fb1bd.r2.dev/Website-Preview.png",
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
    </>
  );
}
