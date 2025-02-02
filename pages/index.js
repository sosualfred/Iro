import Head from "next/head";
import Image from "next/image";
import { dummyCelebrities } from "#/dummy";
import { signs } from "#/signs";
import Celebrity from "~/Cards/Celebrity";
import Button from "~/core/Button";
import CategoryCard from "~/Cards/CategoryCard";
import { heroCategories } from "#/dummy";
import Layout from "~/layout/Layout";
import Autoscroll from "~/core/Autoscroll";
import { XataClient } from "$$/xata";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Home({ ariesData, scorpioData, libraData }) {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Iro</title>
				<meta
					name="description"
					content="Welcome to Iro, the astrology-based motivation platform to help you reach your goals and dreams and stay inspired."
				/>
				<meta
					name="keywords"
					content="Motivation, Inspiration, Achievement. Zodiac Sign"
				/>
				{/* facebook */}
				<meta property="og:url" content="https://iro-ecru.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Iro" />
				<meta
					property="og:description"
					content="Welcome to Iro, the astrology-based motivation platform to help you reach your goals and dreams and stay inspired."
				/>
				<meta property="og:image" content="/open-graph.webp" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="iro-ecru.vercel.app" />
				<meta property="twitter:url" content="https://iro-ecru.vercel.app/" />
				<meta name="twitter:title" content="Iro" />
				<meta
					name="twitter:description"
					content="Welcome to Iro, the astrology-based motivation platform to help you reach your goals and dreams and stay inspired."
				/>
				<meta name="twitter:image" content="/open-graph.webp" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<main id="main-content">
					<section
						id="hero"
						className="grid grid-cols-2 lg:grid-cols-1 items-center px-24 md:px-12 sm:px-5 lg:py-20 md:py-8 mx-auto background-gradient lg:h-fit h-[calc(100vh-80px)]"
					>
						<div className="space-y-4 lg:mb-10 sm:mb-10">
							<h1 className="text-6xl sm:text-[28px] leading-[72px] sm:leading-normal text-left text-white font-display font-bold mb-10 sm:mb-5">
								<span>Iro is here to</span>
								<br />
								<span>motivate and</span> <br />
								<span>inspire</span>
							</h1>
							<p className="text-lg text-white w-3/4 sm:w-full">
								Are you ready to become a hero of your own life? Look no further
								than Iro, the premier motivation website that uses astrology and
								your zodiac sign to inspire and guide you on your journey.
							</p>
						</div>
						<div className="w-full grid grid-cols-3 gap-6 sm:gap-4">
							{heroCategories.map((categoryData) => (
								<Link
									href={`/category/${categoryData.name}`}
									key={categoryData.id}
								>
									<CategoryCard data={categoryData} key={categoryData.id} />
								</Link>
							))}
						</div>
					</section>
					<Autoscroll />
					<section
						id="aries-celebrities"
						className="px-24 md:px-12 sm:px-5 my-20"
					>
						<div className="flex justify-center space-x-3 leading-tight my-4 sm:my-2">
							<Image
								src="/aries.svg"
								alt="Aries symbol"
								width={35}
								height={35}
							/>
							<h2 className="sm:text-xl md:text-2xl text-4xl text-center font-semibold font-display">
								Aries Celebrities
							</h2>
						</div>
						<p className="text-center w-3/4 sm:w-full mx-auto mb-8 text-xl md:text-base font-medium">
							Aries is a passionate, motivated, and confident leader who builds
							community with their cheerful disposition and relentless
							determination.
						</p>
						<div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
							{ariesData.map((celebrity) => {
								return <Celebrity celebrity={celebrity} key={celebrity.id} />;
							})}
						</div>
						<Button
							className="mt-8 sm:w-full font-bold py-3 px-10 w-[30%]"
							onClick={() => router.push("/category/Aries")}
						>
							More
						</Button>
					</section>
					<Autoscroll />
					{/* Scorpio */}
					<section
						id="scorpio-celebrities"
						className="px-24 md:px-12 sm:px-5 my-20"
					>
						<div className="flex justify-center items-center space-x-3 leading-tight my-4 sm:my-2">
							<Image
								src="/scorpio.svg"
								alt="Scorpio symbol"
								width={35}
								height={35}
							/>
							<h2 className="sm:text-xl md:text-2xl text-4xl text-center font-semibold font-display">
								Scorpio Celebrities
							</h2>
						</div>
						<p className="text-center w-3/4 sm:w-full mx-auto mb-8 text-xl font-medium md:text-base">
							Scorpios are known for being tough-minded and biting, but they
							also have lots of positive qualities that make them great friends
							and successful people overall.
						</p>
						<div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
							{scorpioData.map((celebrity) => {
								return <Celebrity celebrity={celebrity} key={celebrity.id} />;
							})}
						</div>
						<Button
							className="my-8 sm:w-full font-bold py-3 px-10 w-[30%]"
							onClick={() => router.push("/category/Scorpio")}
						>
							More
						</Button>
						<section
							id=""
							className="grid grid-cols-2 lg:grid-cols-1 items-center mt-20 mb-40 sm:mt-10 sm:mb-20"
						>
							<div className="w-[70%] sm:w-full space-y-6 lg:mb-10">
								<h1 className="text-3xl sm:text-[28px] font-display font-bold sm:text-center">
									Recommendation
								</h1>
								<p className="font-medium text-xl md:text-base">
									The fact that people have achieved a great deal for themselves
									shows you that you can achieve the same thing.
								</p>
								<p className="font-medium text-xl md:text-base">
									There are a number of categories of signs that you can explore
									in order to get inspiration and motivation.
								</p>
							</div>
							<div className="w-full grid grid-cols-3 gap-10 sm:gap-4">
								{heroCategories.map((categoryData) => (
									<Link
										href={`/category/${categoryData.name}`}
										key={categoryData.id}
									>
										<CategoryCard data={categoryData} key={categoryData.id} />
									</Link>
								))}
							</div>
						</section>
					</section>
					<Autoscroll />
					{/* Libra */}
					<section
						id="libra-celebrities"
						className="px-24 md:px-12 sm:px-5 my-20"
					>
						<div className="flex justify-center items-center space-x-3 leading-tight my-4 sm:my-2">
							<Image
								src="/libra.svg"
								alt="Scorpio symbol"
								width={35}
								height={35}
							/>
							<h2 className="sm:text-xl md:text-2xl text-4xl text-center font-semibold font-display">
								Libra Celebrities
							</h2>
						</div>
						<p className="text-center w-1/2 md:w-3/4 sm:w-full text-xl md:text-base mx-auto mb-8 font-medium">
							Scorpios are known for being tough-minded and biting, but they
							also have lots of positive qualities that make them great friends
							and successful people overall.
						</p>
						<div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
							{libraData.map((celebrity) => {
								return <Celebrity celebrity={celebrity} key={celebrity.id} />;
							})}
						</div>
						<Button
							className="my-8 sm:w-full py-3 px-10 w-[30%]"
							onClick={() => router.push("/category/Libra")}
						>
							More
						</Button>
					</section>
				</main>
			</Layout>
			<style jsx>
				{`
					.gradient-text {
						background: linear-gradient(
							95.01deg,
							#ef8cff -2.22%,
							rgba(59, 93, 215, 0.630208) 38.73%,
							rgba(61, 186, 89, 0.79) 73.42%,
							rgba(41, 49, 42, 0.79) 106.98%
						);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						background-clip: text;
						text-fill-color: transparent;
					}

					.background-gradient {
						background: linear-gradient(
							90deg,
							#12c2e9 0%,
							#c471ed 45.31%,
							#f64f59 100%
						);
					}
					@media screen and (max-width: 900px) {
						.background-gradient {
							background: linear-gradient(
								162.92deg,
								#0c99c1 0%,
								#b12dd6 52.6%,
								#ef273d 100%
							);
						}
					}
				`}
			</style>
		</>
	);
}

const xata = new XataClient();

export const getServerSideProps = async () => {
	const [ariesData, scorpioData, libraData] = await Promise.all([
		xata.db.Aries.getMany(),
		xata.db.Scorpio.getMany(),
		xata.db.Libra.getMany(),
	]);

	return {
		props: {
			ariesData: JSON.parse(JSON.stringify(ariesData)),
			scorpioData: JSON.parse(JSON.stringify(scorpioData)),
			libraData: JSON.parse(JSON.stringify(libraData)),
		},
	};
};
