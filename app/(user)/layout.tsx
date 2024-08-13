const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container w-full max-w-screen-xl mx-auto py-10">
      {children}
    </div>
  );
};

export default Layout;
