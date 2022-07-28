
export const JumbotronPage: React.FC = () => (
    <Jumbotron className="text-center text-white bg-gradient-to-r from-gray-900 via-gray-800 to-slate-800">
      <h1 className="text-2xl md:text-4xl mb-3">Our Team</h1>
      <p className="mb-3">
            This page was built with React and Tailwind CSS!
      </p>
      <p>This is some text.</p>
      <p>This is another text.</p>
      <button className="text-sm px-6 py-1 mt-4 text-white active:bg-yellow-500 focus:outline-none border-solid border">
        Learn more
      </button>
    </Jumbotron>
  );
  
  function Jumbotron({ children, className }:{children:any, className:any}) {
    return (
      <div
        className={`${className} shadow-lg border font-light border-solid rounded-sm py-12 px-8 mb-8`}
      >
        {children}
      </div>
    );
  }