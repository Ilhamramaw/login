import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
	const token = localStorage.getItem("Token");

	return token ? <Outlet /> : <Navigate to='/' />;
};
