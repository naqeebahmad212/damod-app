export default function Footer() {
    return(
        <>
            <div className="flex justify-between bg-gray-200 p-3 font-Fahkwang flex-col md:flex-row">
                <div className="text-center md:text-left">
                    <p className="text-base">&copy; All Rights Reserve by Caretino</p>
                </div>
                <div className="flex justify-center text-black gap-4 text-base font-semibold order-first">
                    <a href="/terms" className="hover:text-opacity-50">Terms & Condition</a> | 
                    <a href="/policy">Privacy Policy</a>
                </div>
            </div>
        </>
    );
}