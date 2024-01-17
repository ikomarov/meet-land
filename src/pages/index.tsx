import React, {Suspense} from 'react';
import Header from "../components/Header/index.server";
import '../app/globals.css'
import {HtmlHead} from "@/components/HtmlHead";
import YaScript from "@/components/YaScript/index.server";
import JsonLdScript from "@/components/JsonLdScript/index.server";

const Footer = React.lazy(() => import('../components/Footer/index.server'));
const FeaturesAndBenefits = React.lazy(() => import('../components/FeaturesAndBenefits/index.server'));
const SuccessStories = React.lazy(() => import('../components/SuccessStories/index.server'));
const HowItWorks = React.lazy(() => import('../components/HowItWorks/index.server'));
const FAQ = React.lazy(() => import('../components/FAQ'));
const ContactUs = React.lazy(() => import('../components/ContactUs/index.server'));

const LandingPage = () => {
    return (
        <div>
            <JsonLdScript/>
            <YaScript/>
            <HtmlHead/>
            <Header/>
            <Suspense>
                <FeaturesAndBenefits/>
            </Suspense>
            <Suspense>
                <SuccessStories/>
            </Suspense>
            <Suspense>
                <HowItWorks/>
            </Suspense>
            <Suspense>
                <FAQ/>
            </Suspense>
            <Suspense>
                <ContactUs/>
            </Suspense>
            <Suspense>
                <Footer/>
            </Suspense>
        </div>
    );
};

export default LandingPage;
