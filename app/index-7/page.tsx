import Layout from "@/components/layout/Layout"
import Section1 from '@/components/sections/home7/Section1'
import Section2 from '@/components/sections/home7/Section2'
import Section3 from '@/components/sections/home7/Section3'
import Section4 from '@/components/sections/home7/Section4'
import Section5 from '@/components/sections/home7/Section5'
import Section6 from '@/components/sections/home7/Section6'
import Section7 from '@/components/sections/home7/Section7'
import Section8 from '@/components/sections/home7/Section8'
export default function Home7() {

	return (
		<>

			<Layout headerStyle={7} footerStyle={7}>
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
				<Section7 />
				<Section8 />
			</Layout>
		</>
	)
}