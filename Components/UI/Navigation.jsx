import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";

import Logo from ".././../public/Logo.svg";
import ReadingProgressBar from "./ReadingProgressBar";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0}>
          <Toolbar sx={{ height: "64px", "&.MuiToolbar-root": { padding: 0 } }}>
            <Grid container direction="row" spacing={0}>
              {/* Display the About me Section in the HomePage */}
              <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
                {/* Extra Space On The Left Side */}
              </Grid>

              <Grid item xs={12} sm={11} md={10} lg={9} sx={{ pl: { xs: 1 }, pr: { xs: 2 } }}>
                {/* Center Container */}
                <Grid container>
                  <Grid item xs={6} sm={6} md={10} lg={10}>
                    <Box sx={{ display: { xs: "none", lg: "block", md: "block" }, marginLeft: "-12px" }}>
                      <Link href="/">
                        <Image alt="Logo" src={Logo} width={180} height={42} />
                      </Link>
                    </Box>
                    {/* For Mobile Phones */}
                    <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
                      <Link href="/">
                        <Image alt="Logo" src={Logo} width={152} height={35} />
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={2} lg={2}>
                    <Stack direction="row" spacing={4} sx={{ float: "right" }}>
                      <Link href="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23.088"
                          height="38.304"
                          viewBox="0 0 43.088 38.304"
                        >
                          <path
                            id="house-chimney"
                            d="M40.683,21.516a2.412,2.412,0,0,0,2.394-2.4,2.049,2.049,0,0,0-.823-1.8L38.3,13.84V4.788A2.391,2.391,0,0,0,35.91,2.394H33.516a2.391,2.391,0,0,0-2.394,2.394V7.534L23.154.524A2.485,2.485,0,0,0,21.583,0a2.158,2.158,0,0,0-1.646.6L.748,17.319A2.432,2.432,0,0,0,0,19.114a2.37,2.37,0,0,0,2.394,2.4H4.788V26.73a1.891,1.891,0,0,0-.007.209v8.371A2.992,2.992,0,0,0,7.773,38.3h1.2c.09,0,.18-.007.269-.015.112.007.224.015.337.015h4.189a2.992,2.992,0,0,0,2.992-2.992V28.728a2.391,2.391,0,0,1,2.394-2.394H23.94a2.391,2.391,0,0,1,2.394,2.394v6.583A2.992,2.992,0,0,0,29.326,38.3h4.227c.1,0,.209,0,.314-.007.082.007.165.007.247.007h1.2A2.992,2.992,0,0,0,38.3,35.311V34.1a5.271,5.271,0,0,0,.037-.606l-.052-11.985h2.394Z"
                            // fill="#848ab4"
                            fill={router.pathname === "/" ? "rgb(255, 202, 62)" : "#848ab4"}
                          />
                        </svg>
                      </Link>
                      <Link href="/Blog">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="33" viewBox="0 0 43 43">
                          <path
                            id="blog"
                            d="M16.125,2.688a2.685,2.685,0,0,0,2.688,2.688A18.814,18.814,0,0,1,37.625,24.188a2.688,2.688,0,0,0,5.375,0A24.183,24.183,0,0,0,18.813,0,2.685,2.685,0,0,0,16.125,2.688Zm0,8.063a2.685,2.685,0,0,0,2.688,2.688,10.749,10.749,0,0,1,10.75,10.75,2.687,2.687,0,1,0,5.375,0A16.129,16.129,0,0,0,18.813,8.063,2.685,2.685,0,0,0,16.125,10.75ZM8.063,12.094a4.031,4.031,0,0,0-8.062,0V30.906A12.094,12.094,0,1,0,12.094,18.813H10.75v8.063h1.344a4.031,4.031,0,1,1-4.031,4.031Z"
                            // fill="#848ab4"
                            fill={router.pathname.includes("/Blog") ? "rgb(255, 202, 62)" : "#848ab4"}
                          />
                        </svg>
                      </Link>
                      <Link href="/about">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="23"
                          width="23"
                          style={{ marginTop: "6px" }}
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                            fill={router.pathname.includes("/about") ? "rgb(255, 202, 62)" : "#848ab4"}
                          />
                        </svg>
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
                {/* Extra Space On The Right Side */}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <ReadingProgressBar />
    </>
  );
};

export default Navigation;
