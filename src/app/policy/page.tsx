"use client"
import Header from "../header/page";

export default function policy(){
    return(
        <>
            <div className="bg-gray-200">
            <Header/>
            </div>
            <div className="p-5 max-w-7xl mx-auto">
                <h1 className="text-3xl font-Fahkwang font-bold">Privacy Policy</h1>
                <div className="mt-10 font-Fahkwang mb-5">
                    <p className="font-bold mb-2">Welcome to the  Caretino</p>
                    <p>You can browse to find the diamonds you need, select and Contact us them on this site. Kindly go through the following Privacy and Policy . It is necessary for you to agree to the Policy to enable us to permit access to the site.</p>
                </div>
                <div className="mt-10 font-Fahkwang mb-5">
                    
                    <ul className="pl-5 list-disc space-y-4 text-base">
                        <li>we are strongly committed to protecting the personal information that you submit to us. This information is provided by you when you register yourself on caretino, to access our online diamond inventory.</li>
                        <li>Your privacy is most important to us. This privacy policy is intended to give you confidence in protecting the privacy and security of your personal information with us.</li>
                        <li>However, please note that we are not responsible for any use of the personal information you provide to third-party applications or websites that may be accessed via the Products or Websites. We recommend that you review the privacy policy of any third-party applications or websites that you use.</li>
                        
                    </ul>
                </div>
            </div>
        </>
    );
}