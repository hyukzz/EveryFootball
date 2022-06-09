import Head from "next/head";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>EveryFootball</title>
			</Head>
			<Component {...pageProps} />;
		</div>
	);
}

export default App;
