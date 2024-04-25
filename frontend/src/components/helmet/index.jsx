import { Helmet as HelmetWrapper } from "react-helmet";

const Helmet = ({ title }) => {
  return (
    <HelmetWrapper>
      <title>{title}</title>
      <meta name="title" content={title} />
    </HelmetWrapper>
  );
};

export default Helmet;
