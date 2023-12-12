const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  // Green color palette
  const greenPalette = {
    main: "#143601",    // Dark Green
    lighter: "#1A4301", // Light Green
    darker: "#245501",  // Deep Green
    accent: "#538D22",  // Green Accent
    vibrant: "#73A942", // Vibrant Green
    pale: "#AAD576",    // Pale Green
  };

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200">
      <div className="max-w-screen-lg w-full p-8 bg-white rounded-md shadow-md overflow-hidden">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-5xl font-bold text-green-700">Welcome to SquadFlow</h1>
          <p className="text-gray-700">Your Collaborative Project Management Platform</p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left side content */}
          <div className="flex-1">
            {children}
          </div>

          {/* Right side card with project details */}
          <div className="w-full md:w-1/3 p-6 bg-green-200 rounded-md shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-4 text-green-700">Discover SquadFlow</h2>
            <p className="text-gray-800 mb-4">
              An online platform that simplifies project management. Intuitively simple boards, lists, and cards empower you to visualize your ideas and streamline your workflow. Enjoy seamless collaboration, even offline!
            </p>

            {/* Additional Features List */}
            <ul className="list-disc text-gray-800 ml-6 mb-4">
              <li>Collaborative Boards</li>
              <li>Efficient Workflow</li>
              <li>Offline Access</li>
              <li>Integration with Popular Apps</li>
            </ul>

            {/* Action Button */}
            <button className={`bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-green-300`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClerkLayout;
