import Head from "next/head";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>EveryFootball</title>
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

export default App;
