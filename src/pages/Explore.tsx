
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to full course by default
    navigate("/explore/full-course", { replace: true });
  }, [navigate]);

  return null; // This component will redirect immediately
};

export default Explore;
