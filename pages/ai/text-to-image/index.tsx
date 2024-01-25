import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";

import HeaderSection from "@SEO/Head";
import Theme, { themeColors } from "@Theme/Theme";
import { NextPageWithLayout } from "pages/_app";
import { DateMonthYearForBlogPost, SEO_OBJ, blogPostsObj } from "Essentials";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import Footer from "@Components/UI/Footer";
import Navigation from "@Components/UI/Navigation";
import Sharing from "@Components/SocialShare/Sharing";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/centralStore";
import ModalContainer from "@Components/UI/Modals/ModalContainer";
import Image from "next/image";

import CustomSnackBar from "@Components/UI/Snackbars/CustomSnackBar";
import { callTextToImageService } from "store/ai/TextToImageSlice/TextToImageSlice";
import TextToImageConverter from "@Components/AI/TextToImage/TextToImageConverter";
import WelcomeScreen from "@Components/UI/WelcomeScrn/WelcomeScreen";

const TextToImage: NextPageWithLayout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const text2ImageData = useSelector((state: RootState) => state.TextToImageSlice.textToImageData);
  const text2ImageLoadingStatus = useSelector((state: RootState) => state.TextToImageSlice.textToImageLoadingStatus);

  const onBtnClickHandler = () => {
    dispatch(callTextToImageService());
  };

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
            md={6}
            lg={6}
            p={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="95%">
              <TextToImageConverter />
            </Box>
          </Grid>
          {/* RightContent */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            border={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {(text2ImageData === null && text2ImageLoadingStatus === null) || text2ImageLoadingStatus === "" ? (
              <WelcomeScreen AlertMSG="Welcome Message of Text To Image Generator" />
            ) : text2ImageLoadingStatus === "PENDING" ? (
              <CircularProgress />
            ) : (
              text2ImageData !== null && <Image src={text2ImageData!} alt="generated-image" width={600} height={360} />
            )}
          </Grid>
        </Grid>

        <Footer />
        <ModalContainer />
      </ThemeProvider>
      <CustomSnackBar />
    </>
  );
};

export default TextToImage;
