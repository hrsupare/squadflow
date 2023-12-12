import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-white py-16 px-6">
      <div className={cn(
        "flex items-center justify-center flex-col",
        headingFont.className,
      )}>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-extrabold mb-4">
          Simplify Your Workflow with SquadFlow
        </h1>
        <div className="text-lg md:text-xl lg:text-2xl text-center mb-8 max-w-3xl">
          Visualize Ideas, Streamline Workflow, Work Offline.
        </div>
      </div>

      <div className="text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-3xl text-center mx-auto mb-12">
        Our intuitive boards, lists, and cards help you organize ideas effortlessly. Integrate your favorite apps and work seamlessly online or offline with SquadFlow.
      </div>

      <Button className="bg-lime-500 hover:bg-lime-600" size="lg" asChild>
        <Link href="/sign-up">
          Get Started SquadFlow for Free
        </Link>
      </Button>

      {/* Additional Sections */}
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-green-500">Visualize Ideas</h3>
            <p className="text-neutral-700">
              Effortlessly create boards, lists, and cards to visualize and organize your ideas.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-green-500">Streamline Workflow</h3>
            <p className="text-neutral-700">
              Integrate with your favorite apps and tools to streamline your team's workflow.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-green-500">Offline Access</h3>
            <p className="text-neutral-700">
              Work seamlessly even when offline. Access your tasks and projects anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-extrabold mb-4">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <blockquote className="text-neutral-700 italic">
              "SquadFlow has transformed the way our team collaborates. The intuitive interface and powerful features make it a must-have for any project."
            </blockquote>
            <p className="text-right mt-4">- John Doe, CEO</p>
          </div>
          {/* Testimonial 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <blockquote className="text-neutral-700 italic">
              "The offline access feature has been a game-changer for us. We can keep working, no matter where we are or whether we have an internet connection."
            </blockquote>
            <p className="text-right mt-4">- Jane Smith, Project Manager</p>
          </div>
          {/* Testimonial 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <blockquote className="text-neutral-700 italic">
              "I love how SquadFlow integrates with our existing tools. It has made our workflow more efficient and saved us a lot of time."
            </blockquote>
            <p className="text-right mt-4">- Alex Johnson, Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;

 
 
