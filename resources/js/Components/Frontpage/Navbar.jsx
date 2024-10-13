import { Link } from "@inertiajs/inertia-react";
import { Grid } from "@mui/material";
import { FaBell, FaShoppingCart } from "react-icons/fa";
import MenuBurger from "../MenuBurger";
import PresentedLogo from "../PresentedLogo";

export default function Navbar({ props, themeGrid, className }) {
    return (
        <div
            className={`mb-2 bg-white py-4 align-middle items-center ${className}`}
            style={{ boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)' }}
        >
            {/* Desktop view */}
            <div className="hidden md:flex items-center">
                <Grid container spacing={2} className="items-center">
                    {/* Logo Section */}
                    <Grid theme={themeGrid} item md={4} xs={12} className="m-0">
                        <PresentedLogo className="pl-8" />
                        <div className="ml-10">
                            <img
                                src="/assets/images/max_net.png"
                                alt="Logo"
                                className="w-[250px]"
                            />
                        </div>
                    </Grid>

                    {/* Navigation Section */}
                    <Grid theme={themeGrid} item md={8} xs={12}>
                        <div className="flex flex-row justify-end items-center pr-10 space-x-6">
                            <a href="/map" className="w-[100px]">
                                Cek Lokasi
                            </a>
                            <a href="/paket" className="w-[90px]">
                                Paket
                            </a>
                            <a href="/contact" className="w-[90px]">
                                Contact
                            </a>

                            {props.auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="mr-4 py-2 px-6 font-Gilroy-ExtraBold rounded-xl hover:bg-[#EFF1FB]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="mr-4 py-2 px-6 font-Gilroy-ExtraBold rounded-xl hover:bg-[#EFF1FB]"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="mr-4 py-2 px-6 font-Gilroy-ExtraBold rounded-xl hover:bg-[#EFF1FB]"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </div>

            {/* Mobile view */}
            <div className="md:hidden flex flex-row justify-between">
                <div>
                    <MenuBurger auth={props.auth} />
                </div>
                <div className="flex flex-row items-center">
                    <FaShoppingCart className="text-xl mr-8" />
                    <FaBell className="text-xl mr-8" />
                </div>
            </div>
        </div>
    );
}
