import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-8">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-flex items-center text-primary hover:underline">
        <ArrowLeft className="mr-2" />
        Go back home
      </Link>
    </div>
  );
};