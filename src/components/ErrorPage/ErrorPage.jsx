import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h1 className=" text-5xl font-bold">404 Not Found</h1>      
      <Link to="/"><button className="">Go back</button></Link>
    </div>
  );
};

export default ErrorPage;