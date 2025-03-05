import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import mainImg from "../assets/about_img.png";
import SubscriptionForm from "../components/SubscriptionForm";
import DescribedImage from "../components/DescribedImage";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="about-page text-center py-3 pt-5"
		>
			<div className="container">
				{/* Page header with dashed styling */}
				<HeaderDashed head1="ABOUT" head2="US" classStyle="fw-normal fs-3" />
				
				{/* Main image with descriptive text */}
				<DescribedImage img={mainImg} imgTitle="clothes image" 
				styleInLarge="column-gap-xl-4"
				styleImg="col-xl-5"
				styleText="col-xl-6"
				sideText={					
					<>
					<p>
						DadyBux emerged from a vision to transform online shopping by offering 
						a platform where customers can effortlessly discover, explore, and 
						purchase a wide array of products from the comfort of their homes.
						<br />
						<br />
						Since our inception, we've dedicated ourselves to curating a diverse selection 
						of high-quality products that cater to various tastes and preferences. Our 
						offerings range from fashion and beauty to electronics and home essentials, 
						all sourced from trusted brands and suppliers.
					</p>
					{/* Mission statement */}
					<div className="mission">
						<h4 className="my-3 mt-4 c-black">Our Mission</h4>
						<p className="mb-0">
							At DadyBux, our mission is to empower customers with choice, convenience, 
							and confidence. We're committed to providing a seamless shopping experience 
							that exceeds expectations—from browsing and ordering to delivery and beyond.
						</p>
					</div>
					</>}/>

				{/* Why Choose Us section */}
				<section className="choose-us mt-6">
					<HeaderDashed head1="WHY" head2="CHOOSE US" />
					<div className="pros mt-4">
						<div className="row row-gap-4">
							{/* Each article represents a benefit */}
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Quality Assurance:</h4>
								<p className="c-mm-gray mb-0 mt-4">
									We meticulously select and vet each product to ensure it meets
									our stringent quality standards.
								</p>
							</div>
							</article>
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Convenience:</h4>
								<p className="c-mm-gray mb-0 mt-4">
								We meticulously select and vet each product to ensure it meets
								our stringent quality standards.
								</p>
							</div>
							</article>
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Exceptional Customer Service:</h4>
								<p className="c-mm-gray mb-0 mt-4">
								Our team of dedicated professionals is here to assist you the
									way, ensuring your satisfaction is our top priority.
								</p>
							</div>
							</article>
						</div>
					</div>
				</section>

				{/* Subscription form for users */}
				<SubscriptionForm />
			</div>
		</motion.div>
	);
};

export default About;
