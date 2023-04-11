export const metadata = {
  title: "AboutPage",
  description: "In AboutPage",
};

const AboutLayout = ({ children }) => {
  return (
    <div>
      <h1>AboutPage from AboutLayout</h1>
      {children}
    </div>
  );
};

export default AboutLayout;
