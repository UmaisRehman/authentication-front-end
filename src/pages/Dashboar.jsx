import React, { useEffect, useState } from "react";
import { getUserData } from "../services/api";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const response = await getUserData(token);
        setUserData(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {userData ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome, {userData.email}!</h2>
        </div>
      ) : (
        <h2 className="text-2xl font-bold">Please log in.</h2>
      )}
    </div>
  );
};

export default Dashboard;
