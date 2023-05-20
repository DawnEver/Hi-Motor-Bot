// components/PageMeta.tsx
import Head from "next/head";

interface Props {
  title: string;
  description: string;
  cardImage: string;
  url: string;
}

const MetaTags = ({ title, description, cardImage, url }: Props) => (
<Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={cardImage} />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
      </Head>
)

export default MetaTags;