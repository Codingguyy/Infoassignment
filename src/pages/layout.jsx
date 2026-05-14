import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { UserPlus } from "lucide-react";
import { LogIn } from "lucide-react";
import { User } from "lucide-react";
export default function Layout() {
  return (
    <div className="h-full w-full relative flex justify-center items-center min-h-screen">
      <Outlet/>
      </div>
  );
}