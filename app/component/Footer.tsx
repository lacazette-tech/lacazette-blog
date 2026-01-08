
const year = new Date().getFullYear();
export default function () {
    return (
        <footer className="w-[1260] h-[350] bg-black text-white">

            <div className="flex items-center justify-around">
                <div className="mt-[30]">
                    <h3 className="font-bold">COMPANY</h3>
                    <ul>
                        <li>Our Story</li>
                        <li>Careers</li>
                        <li>Accesibility</li>
                        <li>Give where you live</li>
                    </ul>
                </div>

                <div className="mt-[30]">
                    <h3 className="font-bold">HELP</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Hire an Expert</li>
                        <li>Help Center</li>
                        <li>Talk to sales</li>
                    </ul>
                </div>

                <div className="mt-[30]">
                    <h3 className="font-bold">RESOURCES</h3>
                    <ul>
                        <li>Marketing library</li>
                        <li>Marketing Tools</li>
                        <li>Marketing glossary</li>
                    </ul>
                </div>

                <div className="mt-[30]">
                    <h3 className="font-bold">LOCATION</h3>
                    <ul>
                        <li>Ikeja</li>
                        <li>Ojodu</li>
                        <li>Omole</li>
                        <li>Ogba</li>
                    </ul>
                </div>


            </div>
                <div className="border-t border-grey-800 mt-8 pt-8 text-center text-grey-400">
                    <p>&copy; {year} Lacazette. All rights reserved </p>
                </div>






        </footer>
    )
}