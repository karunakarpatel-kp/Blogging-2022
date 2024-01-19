import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

import coding from "@Public/coding.jpg";

import Paragraph from "@Elements/Paragraph/Paragraph";
import Subtitle from "@Elements/Subtitle/Subtitle";

import FullPageBlogPostLayout from "@Layout/FullPageBlogPostLayout";
import HeaderImageFullBlogPost from "@UI/ImageCards/HeaderImageFullBlogPost";
import HeaderSection from "@SEO/Head";
import LastUpdateTags from "@UI/LastUpdate&Tags/LastUpdateTags";
import HeadingOne from "@Elements/Headings/HeadingOne";
import Scrollspy from "react-scrollspy";
import HeadingTwo from "@Elements/Headings/HeadingTwo";
import HeadingThree from "@Elements/Headings/HeadingThree";
import HeadingFour from "@Elements/Headings/HeadingFour";
import HeadingFive from "@Elements/Headings/HeadingFive";
import HeadingSix from "@Elements/Headings/HeadingSix";
import Link from "next/link";
import SyntaxHighlight from "@SyntaxHighlighter/SyntaxHighlight";
import SandboxCode from "@Sandbox/SandboxCode";

import { NextPageWithLayout } from "../_app";
import {
  LineShareButton,
  LineIcon,
  FacebookMessengerShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import Sharing from "@Components/SocialShare/Sharing";
import { blogPostsObj, blogPostURLS, DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightTexts";
import { Ccode as C } from "@SyntaxHighlighter/Ccode";
import { CLink as Li } from "@Components/SyntaxHighlighter/CLink";

interface TableOfContentsListProps {
  id: string;
  title: string;
  targetElement: string;
}

interface ArticleDetailsListProps {
  id: string;
  title: string;
}

export const TableOfContentsList: TableOfContentsListProps[] = [
  { id: "1", title: "This Is One", targetElement: "lastItem" },
  { id: "2", title: "This Is Two", targetElement: "headingNumberOne" },
  { id: "3", title: "This Is Three", targetElement: "lastItem" },
];

export const ArticleDetailsList: ArticleDetailsListProps[] = [
  { id: "1", title: "Published By: Karunakar Patel" },
  { id: "2", title: "Last Updated On: Karunakar Patel" },
  { id: "3", title: "Read Time: 3mins" },
];

export const BlogPostTags: { id: string }[] = [{ id: "One" }];

export const code1 = `
            What is your project named? my-app 
            Would you like to use TypeScript? No / Yes 
            Would you like to use ESLint? No / Yes 
            Would you like to use Tailwind CSS? No / Yes 
            Would you like to use src/ directory? No / Yes 
            Would you like to use App Router? (recommended) No / Yes 
            Would you like to customize the default import alias (@/*)? No / Yes 
            What import alias would you like configured? @/*
            `;
export const code2 = `{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}`;

export const code3 = `export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`;

export const code4 = `export default function Page() {
  return <h1>Hello, Next.js!</h1>
}`;

const NextjsVsReact: NextPageWithLayout = () => {
  const scrollIntoView = () => {
    window.scrollTo({
      top: 0,
      left: window.innerHeight,
      behavior: "smooth",
    });
  };

  const pageUrl = useRouter();
  const url = "https://www.karunakarpatel.com";

  return (
    <>
      <HeaderSection
        title={SEO_OBJ.NEXTJS_INSTALLATION.title}
        description={SEO_OBJ.NEXTJS_INSTALLATION.description!}
        image={SEO_OBJ.NEXTJS_INSTALLATION.featuredImage}
        url={SEO_OBJ.NEXTJS_INSTALLATION.absoluteURL}
        publishedTime={SEO_OBJ.NEXTJS_INSTALLATION.publishedTime}
        lastUpdatedTime={SEO_OBJ.NEXTJS_INSTALLATION.lastUpdateTime}
      />

      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>

      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.NEXTJS_INSTALLATION.title} id="title" />
          <Subtitle text={SEO_OBJ.NEXTJS_INSTALLATION.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.NEXTJS_INSTALLATION.lastUpdateTime)}
            tags={SEO_OBJ.NEXTJS_INSTALLATION.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.NEXTJS_INSTALLATION.featuredImage}
            alt={SEO_OBJ.NEXTJS_INSTALLATION.featuredImageAltText}
          />
        </Grid>
        <Grid item md={2} lg={4}>
          {/* Empty Space */}
        </Grid>
      </Grid>

      <Divider sx={{ mt: 4, mb: 4 }} />

      <Grid
        container
        direction="row"
        spacing={3}
        sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
      >
        <Grid item md={8} lg={8}>
          <Paragraph>
            Within the dynamic world of internet improvement, choosing the proper framework is pivotal for fulfillment.
            Two contenders, Next.js and React, usually dominate discussions. This weblog submission explores their
            options, efficiency, group assistance, and real-world functions to assist builders in making a knowledgeable
            alternative.
          </Paragraph>

          <HeadingTwo title=" Introduction" id="introduction" />

          <HeadingThree title="Overview" id="overview" />

          <Paragraph>
            React, a robust JavaScript library, and Next.js, a framework constructed upon React, play essential roles in
            fashionable internet improvement. Selecting the best framework is important for venture success.
          </Paragraph>

          <HeadingTwo title="Understanding React" id="understanding-react" />

          <HeadingThree title="Core Ideas" id="core-ideas" />

          <Paragraph>
            React facilities around a digital DOM, facilitating the creation of reusable UI parts with a declarative
            syntax.
          </Paragraph>

          <HeadingThree title="Execs and Cons" id="exces-and-cons" />

          <Paragraph>
            React's component-based construction enhances code maintainability. Nevertheless, challenges could come up
            with Search engine optimization optimization and server-side rendering.
          </Paragraph>

          <HeadingTwo title=" Introduction to Next.js" id="introduction" />

          <HeadingThree title="A. Key Options" id="key-options" />

          <Paragraph>
            Next.js introduces server-side rendering, enhancing efficiency and Search engine optimization capabilities.
            It builds upon React, offering built-in routing and a simplified improvement course of.
          </Paragraph>

          <HeadingThree title="Extending React" id="extending-react" />

          <Paragraph>
            Next.js extends React's capabilities, providing an extra opinionated construction and extra instruments for
            server-side rendering and routing.
          </Paragraph>

          <HeadingTwo title="Efficiency Comparability" id="efficiency-comparability" />

          <HeadingThree title="Server-Aspect Rendering (SSR)" id="server-aspect-rendering" />

          <Paragraph>
            Next.js excels in SSR, bettering preliminary web page load instances and Search engine optimization by
            delivering totally rendered pages to the consumer.
          </Paragraph>

          <HeadingThree title="Consumer-Aspect Rendering (CSR)" id="consumer" />

          <Paragraph>
            React primarily depends on CSR, doubtlessly leading to longer preliminary web page load instances and
            requiring extra optimization for Search engine optimization.
          </Paragraph>

          <HeadingThree title="Affect on Web page Load Instances" id="affect" />

          <Paragraph>
            Next.js performs effectively in situations prioritizing fast web page hundreds and Search engine
            optimization, giving it an edge over React in particular use circumstances.
          </Paragraph>

          <HeadingTwo title="Search engine optimization Issues" id="search-engine-optimization" />

          <HeadingThree title="Search engine optimization Advantages of Next.js" id="search-engine" />

          <Paragraph>
            Next.js, with its SSR capabilities, offers an extra Search engine optimization-friendly atmosphere by
            serving fully-rendered pages to search engines like Google and Yahoo.
          </Paragraph>

          <HeadingThree title="Methods for React" id="methods" />

          <Paragraph>
            React functions could be optimized for Search engine optimization, however, builders should implement
            methods like pre-rendering and server-side rendering for comparable outcomes to Next.js.
          </Paragraph>

          <HeadingTwo title="Growth Expertise" id="growth" />

          <HeadingThree title="Developer-Pleasant Options in Next.js" id="developer" />

          <Paragraph>
            Next.js streamlines improvement with options like automated code splitting and sizzling module alternatives,
            enhancing the general expertise.
          </Paragraph>

          <HeadingThree title="React's Developer Expertise" id="react's" />

          <Paragraph>
            React presents a versatile improvement expertise however could require extra configuration for certain
            options, making it barely difficult for newcomers.
          </Paragraph>

          <HeadingTwo title=" Routing and Navigation" id="routing" />

          <HeadingThree title=" Routing in Next.js" id="routing-in-next.js" />

          <Paragraph>
            Next.js simplifies routing with a file-based system, making it intuitive for builders to prepare and
            navigate by way of their functions.
          </Paragraph>

          <HeadingThree title="React's Strategy for Routing" id="reacts-strategy" />

          <Paragraph>
            React depends on third-party libraries for routing, requiring builders to arrange and configure options
            based mostly on their venture wants.
          </Paragraph>

          <HeadingTwo title="Scalability" id="scalability" />

          <HeadingThree title=" Dealing with Giant-Scale Purposes" id="dealing" />

          <Paragraph>
            Next.js presents scalability benefits, making it appropriate for big functions with built-in options for
            server-side rendering and automated code splitting.
          </Paragraph>

          <HeadingThree title="Challenges in Scaling React" id="challenges" />

          <Paragraph>
            Scaling React functions would possibly require extra concerns, particularly when coping with massive
            codebases and complicated personal interfaces.
          </Paragraph>

          <HeadingTwo title="Neighborhood and Ecosystem" id="neighborhood" />

          <HeadingThree title="Neighborhood Assist" id="assist" />

          <Paragraph>
            Each Next.js and React boast lively communities, offering ample assets and assistance for builders.
          </Paragraph>

          <HeadingThree title="Libraries and Plugins" id="libraries" />

          <Paragraph>
            The React ecosystem is huge, with quite a few libraries and plugins. Next.js seamlessly integrates with this
            wealthy ecosystem.
          </Paragraph>

          <HeadingTwo title="Actual-World Use Instances" id="actual-world" />

          <HeadingThree title="Next.js Purposes" id="next.js" />

          <Paragraph>
            Excessive-profile functions leverage Next.js for efficiency and Search engine optimization advantages,
            making it appropriate for content-heavy websites and e-commerce platforms.
          </Paragraph>

          <HeadingThree title="React-Primarily Based Initiatives" id="react-primarly" />

          <Paragraph>
            React's flexibility has led to the event of varied functions, showcasing its versatility in tasks starting
            from social media platforms to interactive dashboards.
          </Paragraph>

          <HeadingTwo title="Future Developments" id="future" />

          <HeadingThree title="Next.js Growth Developments" id="growth" />

          <Paragraph>
            Next.js continues to evolve, with developments like improved TypeScript assist and enhanced developer
            instruments shaping its future.
          </Paragraph>

          <HeadingThree title=" React's Evolution" id="evolution" />

          <Paragraph>
            React's improvement, pushed by FB, focuses on optimizing efficiency and simplifying certain points, making
            certain a strong and regularly bettering library.
          </Paragraph>

          <HeadingTwo title="Resolution-Making Standards" id="standards" />

          <HeadingThree title=" Components to Take into account" id="account" />

          <Paragraph>
            Builders ought to weigh venture necessities, group experience, and particular use circumstances when
            deciding between Next.js and React.
          </Paragraph>

          <HeadingThree title="Tailoring Decisions" id="tailoring-decisions" />

          <Paragraph>
            The selection ought to align with the distinctive wants and objectives of every venture, ensuring seamless
            integration with improvement goals.
          </Paragraph>

          <HeadingTwo title="Case Research" id="case-research" />

          <HeadingThree title="Next.js Success Tales" id="success" />

          <Paragraph>
            Exploring case research of profitable functions developed with Next.js offers insights into its real-world
            effectiveness.
          </Paragraph>

          <HeadingThree title="React's Affect" id="affect" />

          <Paragraph>
            Understanding React's effect on style functions highlights its versatility and widespread adoption.
          </Paragraph>

          <HeadingTwo title="Consumer Suggestions" id="consumer" />
          <HeadingThree title="Next.js Developer Opinions" id="opinions" />

          <Paragraph>
            Gathering suggestions from builders utilizing Next.js presents insights into its strengths and potential
            drawbacks.
          </Paragraph>

          <HeadingThree title="React Consumer Experiences" id="exper" />

          <Paragraph>
            Understanding the widespread experiences of builders working with React offers a holistic view of its
            usability and challenges.
          </Paragraph>

          <HeadingTwo title="Conclusion" id="conclusions" />

          <HeadingThree title="Recap" id="recap" />

          <Paragraph>
            Each Next.js and React have deserves. A cautious analysis of efficiency, Search engine optimization
            necessities, and improvement expertise is essential.
          </Paragraph>

          <HeadingThree title="Encouragement" id="endouragement" />

          <Paragraph>
            The selection between Next.js and React ought to align with venture wants, making certain a framework that
            seamlessly suits improvement goals.
          </Paragraph>

          <Divider variant="fullWidth" />

          <HeadingOne title="FAQs" id="faq" />

          <List>
            <ListItem>
              <ListItemText>
                <strong>Which is best for Search engine optimization: Next.js or React?</strong>
              </ListItemText>
            </ListItem>
          </List>

          <Paragraph>&nbsp;</Paragraph>
        </Grid>

        <Grid item md={4} lg={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
          <Box position="sticky" top={70}>
            {/* <Stack direction="column" spacing={1}>
              <TableOfContents TableOfContentsList={TableOfContentsList} />
              <ArticleDetails ArticleDetailsList={ArticleDetailsList} />
            </Stack> */}
            <Box mb={1} pl={2}>
              <Typography variant="body2" fontSize="large">
                CONTENTS
              </Typography>
            </Box>
            <Box pl={2}>
              <Scrollspy
                items={[
                  "introduction",
                  "what_is_next.js",
                  "install_next.js",
                  "automatic_installation_of_next.js",
                  "manual_installation_of_next.js",
                  "create_app_directory",
                  "run_the_development_server_of_next.js",
                  "frequently_asked_questions",
                  "discussions",
                ]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#introduction" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#what_is_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    What is Next.js?
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#install_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    Install Next.js
                  </a>
                </li>
                {/* Inner Container */}
                <li className="listItemContent inside_ele">
                  <a href="#automatic_installation_of_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    Automatic installation of Next.js
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#manual_installation_of_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    Manual installation of Next.js
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#create_app_directory" onClick={scrollIntoView} className="listItemLinkContent">
                    Create App Directory
                  </a>
                </li>
                <li className="listItemContent">
                  <a
                    href="#run_the_development_server_of_next.js"
                    onClick={scrollIntoView}
                    className="listItemLinkContent"
                  >
                    Run the development server
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#frequently_asked_questions" onClick={scrollIntoView} className="listItemLinkContent">
                    Frequently Asked Questions
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#discussions" onClick={scrollIntoView} className="listItemLinkContent">
                    Discussions
                  </a>
                </li>
              </Scrollspy>

              {/* Social Sharing Icons Are below */}
              <Box>
                <Sharing />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default NextjsVsReact;

NextjsVsReact.getLayout = function getLayout(page) {
  return (
    <>
      <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>
    </>
  );
};
