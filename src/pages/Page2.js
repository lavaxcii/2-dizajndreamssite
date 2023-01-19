import { motion as m } from 'framer-motion';
import { useEffect } from 'react';

function Page2() {
  useEffect(() => {
    document.title = 'DesignDreamsSite - Page2';
  })

  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }}>
      <h2 className='headerStyle'>Here be something utterly woderfull and befiting page two content</h2>
      <p className="paragraphStyle">Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Eleifend quam adipiscing vitae proin sagittis. Ac placerat vestibulum lectus mauris ultrices eros in. Donec massa sapien faucibus et. Elementum integer enim neque volutpat ac tincidunt. Arcu vitae elementum curabitur vitae nunc. Mi ipsum faucibus vitae aliquet nec. Felis donec et odio pellentesque diam volutpat commodo. Cursus turpis massa tincidunt dui ut ornare. Fermentum posuere urna nec tincidunt praesent semper. Vitae justo eget magna fermentum iaculis eu non diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing at in tellus integer. Enim ut sem viverra aliquet eget sit amet tellus. Quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Pretium nibh ipsum consequat nisl vel pretium lectus. Molestie ac feugiat sed lectus vestibulum mattis. Urna porttitor rhoncus dolor purus non enim praesent. Pulvinar elementum integer enim neque. Felis bibendum ut tristique et. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. </p>
    </m.div>
  )
}
export default Page2