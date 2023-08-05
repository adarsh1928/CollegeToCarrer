import "./App.css";
import { Route, Routes } from "react-router-dom";


import Navbar from "./components/Navbar";
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyEmail from "./Pages/VerifyEmail";
import UpdatePassword from "./Pages/UpdatePassword";
import HomePage from "./Pages/HomePage";
import Error from "./Pages/Error";
import Contact from "./Pages/ContactUs";
import InternshipsExp from "./Pages/InternshipsExp";
import InternshipsInfo from "./Pages/InternshipsInfo";
import Forms from "./Pages/Forms";
import AskToProfessors from "./Pages/AskToProfessor";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./components/Auth/PrivateRoute";
import OpenRoute from "./components/Auth/OpenRoute";
import GetInternships from "./components/DashBoard/GetInternships";
import GetPlacements from "./components/DashBoard/GetPlacements";
import GetQueries from "./components/DashBoard/GetQueries";
import Profile from "./components/DashBoard/Profile";
import SolveQuery from "./Pages/SolveQuery";
import Research from "./Pages/Research";


function App() {

    return (
        <div className=" w-screen min-h-screen bg-richblue-25 flex flex-col font-inter">

            <div className="bg-richblack-5" style={{ opacity: "0.93", position: "sticky", top: 0 }}>
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="signup"
                    element={
                        <OpenRoute>

                            <Signup />
                        </OpenRoute>

                    }
                />
                <Route
                    path="login"
                    element={
                        <OpenRoute>
                            <Login />
                        </OpenRoute>

                    }
                />

                <Route
                    path="forgot-password"
                    element={

                        <ForgotPassword />

                    }
                />
                <Route
                    path="forms"
                    element={

                        <Forms />

                    }
                />

                <Route
                    path="verify-email"
                    element={

                        <VerifyEmail />
                    }
                />

                <Route
                    path="update-password/:id"
                    element={

                        <UpdatePassword />

                    }
                />
                <Route
                    path="contact"
                    element={

                        <Contact />

                    }
                />
                <Route
                    path="AskToProfessors"
                    element={
                        <PrivateRoute>
                            <AskToProfessors />
                        </PrivateRoute>

                    }
                />
                <Route
                    path="Research"
                    element={
                        <PrivateRoute>
                            <Research />
                        </PrivateRoute>

                    }
                />


                <Route
                    path="internship/experience"
                    element={
                        <PrivateRoute>

                            <InternshipsExp />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="internship/informations"
                    element={
                        <PrivateRoute>

                            <InternshipsInfo />
                        </PrivateRoute>

                    }
                />
                <Route
                    path="solveQuery"
                    element={
                        <PrivateRoute>

                            <SolveQuery/>
                        </PrivateRoute>

                    }
                />
                <Route
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                >
                    <Route
                        path="dashboard/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/dashboard/my-internships"
                        element={
                            <PrivateRoute>

                                <GetInternships />
                            </PrivateRoute>

                        }
                    />
                    <Route
                        path="/dashboard/my-placement"
                        element={
                            <PrivateRoute>

                                <GetPlacements />
                            </PrivateRoute>

                        }
                    />
                    <Route
                        path="/dashboard/queries"
                        element={
                            <PrivateRoute>

                                <GetQueries />
                            </PrivateRoute>

                        }
                    />
                </Route>

                <Route path="*" element={<Error />} />


            </Routes>

        </div>
    );
}

export default App;
