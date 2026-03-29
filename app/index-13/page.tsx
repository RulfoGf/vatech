import Layout from "@/components/layout/Layout"
import Section1 from '@/components/sections/home13/Section1'
import Section2 from '@/components/sections/home13/Section2'
import Section3 from '@/components/sections/home13/Section3'
import Section4 from '@/components/sections/home13/Section4'
import Section5 from '@/components/sections/home13/Section5'
import Section6 from '@/components/sections/home13/Section6'
import Section7 from '@/components/sections/home13/Section7'
export default function Home13() {

	return (
		<>

			<Layout headerStyle={13} footerStyle={13}>
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
				<Section7 />
			</Layout>
		</>
	)
}