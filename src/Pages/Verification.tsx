import React from 'react';
import Verify from '../components/Verify';
import Response from '../components/Response';
// import Footer from '../components/Footer';
import { useMediaQuery } from 'usehooks-ts';

const Verification = () => {
    const isTab = useMediaQuery("(max-width:768px)");
  return (
    <div>
        {!isTab ? (
            <>
            <section>
                <div className="footerish">
                    <Verify />
                </div>
            </section>
            </>
        ) : (
            <Response />
        )}
    </div>
  )
}

export default Verification