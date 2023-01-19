import { motion as m } from 'framer-motion';
import { useEffect } from 'react';

function Page1() {
  useEffect(() => {
    document.title = 'DesignDreamsSite - Page1';
  })

  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }}>
      <h2 className='headerStyle'>Welcome stranger to the wonder lands of first page</h2>
      <p className="paragraphStyle">Adipiscing elit duis tristique sollicitudin nibh. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed tempus urna et pharetra pharetra. Amet purus gravida quis blandit turpis cursus in hac habitasse. Fames ac turpis egestas sed tempus urna. Mattis enim ut tellus elementum. Arcu vitae elementum curabitur vitae nunc. Mi ipsum faucibus vitae aliquet nec. Felis donec et odio pellentesque diam volutpat commodo. Cursus turpis massa tincidunt dui ut ornare. Fermentum posuere urna nec tincidunt praesent semper. Vitae justo eget magna fermentum iaculis eu non diam. Adipiscing elit duis tristique sollicitudin nibh. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed tempus urna et pharetra pharetra. Amet purus gravida quis blandit turpis cursus in hac habitasse. Fames ac turpis egestas sed tempus urna. Mattis enim ut tellus elementum.</p>
    </m.div>
  )
}
export default Page1