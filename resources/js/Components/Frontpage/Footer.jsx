import { Grid } from "@mui/material";
import { FaEnvelopeOpen, FaFacebook, FaFax, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import PresentedLogo from "../PresentedLogo";

export function Footer({props, themeGrid, className}) {
    return (
        <div className={"mt-10 pb-10 " + className}>
            <Grid container spacing={12} className={'pt-10 px-20 text-light-gray'}>
                <Grid theme={themeGrid} item md={4} xs={12} className={'relative font-Proxima-Nova text-[16px] font-bold'}>
                    <PresentedLogo />
                    <p className='text-[18px] text-title mt-8 font-Gilroy-Light font-bold'>
                        Ikuti kami di
                            <FaFacebook className='inline ml-3'/>
                            <FaInstagram className='inline ml-3'/>
                            <FaTwitter className='inline ml-3'/>
                    </p>
                    <img 
                                src="/assets/images/max_net.png" 
                                alt="" 
                                className="w-[250px] mt-5" 
                            />
                </Grid>
                <Grid theme={themeGrid} item md={4} xs={12} className={' font-Proxima-Nova text-[16px]'}>
                    <p className='text-[20px] text-title font-Gilroy-Light font-extrabold'>
                        Hubungi Kami di
                    </p>
                    <hr className='h-[4px] bg-title w-[100px] mt-4' />
                    <p className='text-[16px] mt-8 font-Proxima-Nova text-light-gray'>
                        <FaPhone className='inline mr-3'/> (0271)-340-6262 , 0899-106-6262
                    </p>
                    <p className='text-[16px] mt-2 font-Proxima-Nova text-light-gray'>
                        <FaFax className='inline mr-3'/> Ruko Puri Indrasta No.1 Jl. Mangesti Raya, Gentan, Solo
                    </p>
                    <p className='text-[16px] mt-2 font-Proxima-Nova text-light-gray'>
                        <FaEnvelopeOpen className='inline mr-3'/> info@maxnetplus.id
                    </p>
                </Grid>
                <Grid theme={themeGrid} item md={4} xs={12} className={' font-Proxima-Nova text-[16px] text-end'}>
                    <img src="/assets/images/welcome-footer-googleplay.png" alt="" className='ml-auto' />
                    <p className='text-[18px] mt-2 font-Proxima-Nova text-light-gray font-bold'>
                        <span className='mr-10'>FAQ</span> <span>Term and Conditions</span>
                    </p>
                    <p className='text-[16px] mt-4 font-Proxima-Nova text-gray font-bold'>
                        Copyright © 2024. . All Right Reserved.
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}