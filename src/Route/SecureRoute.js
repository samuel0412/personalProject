import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
export const SecureRoute = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state?.AuthMain?.data?.token);
  const xsrfToken = useSelector((state) => state?.AuthMain?.data?.xsrfToken);
  useEffect(() => {
    if (!token && !xsrfToken) {
      navigate("/");
    }
  }, [token, xsrfToken]);
  return (
    <div>
      <Outlet />
    </div>
  );
};
