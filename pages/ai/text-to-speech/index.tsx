import React, { useEffect, useState } from "react";
import { Alert, AlertTitle, Box, Button, Grid, Paper, Stack, ThemeProvider, Typography } from "@mui/material";

import HeaderSection from "@SEO/Head";
import Theme, { themeColors } from "@Theme/Theme";
import { NextPageWithLayout } from "pages/_app";
import { DateMonthYearForBlogPost, SEO_OBJ, blogPostsObj } from "Essentials";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import Footer from "@Components/UI/Footer";
import Navigation from "@Components/UI/Navigation";
import Sharing from "@Components/SocialShare/Sharing";
import { useSelector } from "react-redux";
import { RootState } from "store/centralStore";
import ModalContainer from "@Components/UI/Modals/ModalContainer";
import Image from "next/image";
import WelcomeSVG from "@Public/welcome.svg";
import TextToImage from "@Components/AI/TextToImage/TextToImage";
import WelcomeScrn from "@Components/AI/TextToImage/WelcomeScrn";
import LoadingScrn from "@Components/AI/TextToImage/LoadingScrn";
import HeadingOne from "@Components/Elements/Headings/HeadingOne";

const TextToSpeech: NextPageWithLayout = () => {
  const getDataLoadingStatus = useSelector((state: RootState) => state.YTAPISlice.status);
  return (
    <>
      <ThemeProvider theme={Theme}>
        <HeaderSection
          // title={SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.title}
          title="Text To Speech"
          description={SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.description!}
          image={SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.ogImageURL}
          url={SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.absoluteURL}
          publishedTime={SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.publishedTime}
          lastUpdatedTime={SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.lastUpdateTime}
        />
        <Navigation />
        <Grid container direction="row" spacing={0} mt={8} border={0}>
          <Box
            sx={{
              border: "1",
              backgroundColor: "primary.main",
              p: 3,
              textAlign: "center",
              position: "relative",
              width: "100%",
            }}
          >
            <Typography
              variant="blogPostBrandTitle"
              sx={{ mb: { xs: 2, sm: 2, md: 3, lg: 3, color: "white" } }}
              id="title"
            >
              {/* {SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.title} */}
              Text To Speech Service
            </Typography>
            <Box
              margin="auto"
              border={0}
              borderColor="white"
              sx={{ width: { xs: 5 / 5, sm: 5 / 5, md: 3 / 5, lg: 3 / 5 } }}
            >
              <Typography variant="blogPostBrandSubheading" mb={6} mt={5}>
                {SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.description}
              </Typography>
              <LastUpdateTags
                lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.lastUpdateTime)}
                tags={SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.tags!}
              />
              {/* <DownloadPlugin /> */}
            </Box>
          </Box>
        </Grid>

        <Grid
          container
          border={0}
          mt={1}
          // direction={{ xs: "column-reverse", sm: "column-reverse", md: "row", lg: "row" }}
          direction="row"
          minHeight="70vh"
        >
          {/* Left Content */}
          <Grid
            item
            border={0}
            xs={12}
            sm={12}
            md={5}
            lg={3}
            p={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <HeadingOne title="Text to Image" id="title" />
              <TextToImage />
            </Box>
          </Grid>
          {/* RightContent */}
          <Grid item xs={12} sm={12} md={7} lg={9} display="flex" justifyContent="center" alignItems="center">
            {getDataLoadingStatus === null && <WelcomeScrn />}
            {false ? <LoadingScrn /> : null}
          </Grid>
        </Grid>

        <Footer />
        <ModalContainer />
      </ThemeProvider>
    </>
  );
};

export default TextToSpeech;
