"use client";

export const dynamic = "force-dynamic";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import styles from "./NewsArticle.module.scss";

const query = gql`
  query MyQuery {
    posts {
      nodes {
        latestNews {
          title
          newsImage {
            sourceUrl
          }
          newsLink {
            url
            title
          }
        }
      }
    }
  }
`;

function NewsArticle() {
  const { data }: { data: NewsData } = useSuspenseQuery(query);
  return (
    <article className={styles.articlesContainer}>
      {data.posts.nodes.map((article: NewsArticle, i: number) => (
        <Box
          key={i}
          sx={{
            p: 2,
            border: "0.05em solid rgba(255, 255, 255, 0.589)",
            borderRadius: "0.3em",
          }}
          id={styles.boxContainer}
        >
          <div id={styles.imageContainer}>
            <Image
              src={article.latestNews.newsImage.sourceUrl}
              alt="news article"
              fill
            />
          </div>
          <div className={styles.articleDetails}>
            <h1>{article.latestNews.title}</h1>
            <div className={styles.articleCta}>
              <Link href={article.latestNews.newsLink.url}>View</Link>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0035 19.3163H11.0485C10.9656 19.3163 10.8861 19.2833 10.8274 19.2247C10.7688 19.166 10.7359 19.0865 10.7359 19.0036C10.7359 18.9207 10.7688 18.8411 10.8274 18.7825C10.8861 18.7239 10.9656 18.6909 11.0485 18.6909L18.2489 18.6909L9.05979 9.50184C9.00119 9.44323 8.96826 9.36375 8.96826 9.28087C8.96826 9.19799 9.00119 9.1185 9.05979 9.0599C9.1184 9.00129 9.19788 8.96837 9.28076 8.96837C9.36364 8.96837 9.44313 9.00129 9.50173 9.0599L18.6908 18.249L18.6908 11.0486C18.6908 10.9657 18.7237 10.8862 18.7824 10.8275C18.841 10.7689 18.9206 10.736 19.0035 10.736C19.0864 10.736 19.1659 10.7689 19.2246 10.8275C19.2832 10.8862 19.3162 10.9657 19.3162 11.0486L19.3162 19.0036C19.3162 19.0447 19.3081 19.0853 19.2924 19.1233C19.2767 19.1612 19.2537 19.1957 19.2246 19.2247C19.1956 19.2538 19.1611 19.2768 19.1232 19.2925C19.0852 19.3082 19.0445 19.3163 19.0035 19.3163Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </Box>
      ))}
    </article>
  );
}

export default NewsArticle;
