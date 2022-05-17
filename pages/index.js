

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-tr from-gray-100 to-theme-dark overflow-hidden">

    <div className="box-wrapper relative w-1/2 h-4/5   select-none">

        <div className="left-circle rounded-full border border-white w-6 h-6 absolute left-0 top-12"></div>        

        <div className="two-circle w-10 h-10 absolute right-0 top-0">
            <div className="rounded-full border border-white w-full h-full absolute right-0 top-0"></div>        
            <div className="rounded-full border-2 border-white w-6 h-6 absolute left-6 top-4"></div>        
        </div>        

        <div className="two-circle w-8 h-8 absolute left-0 bottom-0">
            <div className="absolute left-6 top-0 text-white">
                <svg className="fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M466.271 21.333L256 21.354l-210.271-.021C20.521 21.333 0 41.979 0 67.375c0 6.938 1.583 13.667 4.688 20 34.083 69.958 91.25 169.167 141.688 256.708 26.354 45.75 51.25 88.958 69.25 121.792 8.521 15.521 23.604 24.792 40.396 24.792 16.771 0 31.854-9.271 40.375-24.792 17.979-32.813 42.854-76 69.188-121.708 50.458-87.563 107.625-186.813 141.729-256.75C510.417 81.063 512 74.313 512 67.375c0-25.396-20.521-46.042-45.729-46.042z"/></svg>
            </div>
            <div className="absolute left-16 top-5 text-white">
                <svg className="fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M466.271 21.333L256 21.354l-210.271-.021C20.521 21.333 0 41.979 0 67.375c0 6.938 1.583 13.667 4.688 20 34.083 69.958 91.25 169.167 141.688 256.708 26.354 45.75 51.25 88.958 69.25 121.792 8.521 15.521 23.604 24.792 40.396 24.792 16.771 0 31.854-9.271 40.375-24.792 17.979-32.813 42.854-76 69.188-121.708 50.458-87.563 107.625-186.813 141.729-256.75C510.417 81.063 512 74.313 512 67.375c0-25.396-20.521-46.042-45.729-46.042z"/></svg>
            </div>
        </div>        

            <div className="box rounded-2xl w-full h-full bg-gray-100 flex flex-wrap shadow-theme-1">

            <div className="left-side bg-gradient-to-tr from-theme-dark to-theme-medium w-1/2 h-full rounded-2xl transform scale-105 shadow-theme-2">

                <div className="nike-logo w-20 text-white absolute left-8 top-0">
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.013 512.013"><path d="M287.757 225.794l-31.808 8.352-88.256 23.104c-31.168 7.712-58.432 17.984-84.704 8.992-35.712-15.424-35.072-55.552-8.448-98.24C27.469 206.85-57.235 331.074 57.325 343.618c14.592 1.92 40.576-3.2 68.8-15.072l129.824-53.28 256.064-104.704-224.256 55.232z"/></svg>
                </div>

                <div className="big-number absolute -right-12 top-0 leading-none">
                    <span className="text-16xl pt-font bg-gradient-to-tr from-gray-100 to-theme-medium text-transparent bg-clip-text text-shadow">32</span>
                </div>

                <div className="shoe h-full w-full flex items-end justify-center group">
                    <div className="relative">
                        <img src="https://i.ibb.co/HgNtS7C/shoe.png" alt="shoe" className="transition-all duration-500 transform group-hover:-rotate-45 group-hover:scale-125"/>

                        <div className="dots w-full absolute left-0 bottom-12 flex items-center justify-center space-x-3">
                            <span className="hover:bg-white transition-all cursor-pointer shadow-2xl w-4 h-4 bg-white rounded-full block"></span>
                            <span className="hover:bg-white transition-all cursor-pointer shadow-2xl w-4 h-4 bg-gray-300 rounded-full block"></span>
                            <span className="hover:bg-white transition-all cursor-pointer shadow-2xl w-4 h-4 bg-gray-300 rounded-full block"></span>
                        </div>

                        <div className="icon w-10 h-10 cursor-pointer transition-all hover:scale-125 hover:shadow-3xl transform absolute left-32 -top-5 group-hover:left-0 group-hover:top-10 duration-500 bg-theme-dark p-2 text-white rounded-full z-2">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/></svg>
                        </div>

                        <div className="icon w-10 h-10 cursor-pointer transition-all hover:scale-125 hover:shadow-3xl transform absolute right-10 bottom-32 group-hover:right-0 group-hover:bottom-48 duration-500 bg-theme-medium p-2 text-white rounded-full z-2">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/></svg>
                        </div>
                    </div>

                </div>
            </div>
            <div className="left-side bg-gray-200 w-1/2 h-full rounded-2xl pl-20 pr-8 py-6">
                <div className="text-logo flex justify-end mr-3 text-lg pt-font">
                    <span>Nike</span>
                </div>

                <div className="paragraph py-3">
                    <span className="font-bold text-3xl text-gray-600">₹199</span>
                    <p className="leading-6 mt-3 text-gray-700 text-lg">Experience sports, traning, shopping and everything else that&apos;s new at Nike from any country in the world.</p>
                </div>

                <div className="filter mt-10">
                    <div className="w-full flex flex-col space-y-8 text-xl text-gray-600">

                        <div className="flex leading-none">
                            <div className="w-1/3">Size</div>
                            <div className="w-2/3 flex space-x-6 justify-center">
                                <label className="cursor-pointer hover:text-theme-dark">
                                    <span>S</span>
                                    <input type="radio" className="hidden" name="size"/>
                                </label>
                                <label className="cursor-pointer hover:text-theme-dark">
                                    <span>M</span>
                                    <input type="radio" className="hidden" name="size"/>
                                </label>
                                <label className="cursor-pointer hover:text-theme-dark">
                                    <span>L</span>
                                    <input type="radio" className="hidden" name="size"/>
                                </label>
                                <label className="cursor-pointer hover:text-theme-dark">
                                    <span>XL</span>
                                    <input type="radio" className="hidden" name="size"/>
                                </label>
                                <label className="cursor-pointer hover:text-theme-dark">
                                    <span>XXL</span>
                                    <input type="radio" className="hidden" name="size"/>
                                </label>
                            </div>
                        </div> 

                        <div className="flex leading-none">
                            <div className="w-1/3">Colour</div>
                            <div className="w-2/3 flex justify-center space-x-8">

                                <label className="cursor-pointer hover:text-theme-dark flex items-center justify-center">
                                    <span className="w-3 h-3 ring-2 ring-theme-medium rounded-full flex items-center justify-center">
                                    </span>
                                    <input type="radio" className="hidden" name="size"/>
                                </label>

                                <label className="cursor-pointer hover:text-theme-dark flex items-center justify-center">
                                    <span className="w-3 h-3 ring-2 ring-theme-dark rounded-full flex items-center justify-center">
                                    </span>
                                    <input type="radio" className="hidden" name="size"/>
                                </label>

                                <label className="cursor-pointer hover:text-theme-dark flex items-center justify-center">
                                    <span className="w-3 h-3 ring-2 ring-green-500 rounded-full flex items-center justify-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full block"></span>
                                    </span>
                                    <input type="radio" className="hidden" name="size"/>
                                </label>
                
                            </div>
                        </div> 

                        <div className="flex leading-none">
                            <div className="w-1/3">Amount</div>
                            <div className="w-2/3 flex space-x-6 justify-center">
                                
                                <div className="increment-input flex space-x-3 bg-gray-100 rounded-full overflow-hidden">
                                    <span className="flex items-center justify-center px-3 cursor-pointer hover:bg-theme-medium hover:text-white select-none">
                                        <svg className="fill-current w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6"><path d="M392.533 187.733H17.067C7.641 187.733 0 195.374 0 204.8s7.641 17.067 17.067 17.067h375.467c9.426 0 17.067-7.641 17.067-17.067s-7.642-17.067-17.068-17.067z"/></svg>                                        
                                    </span>
                                    <span><input type="text" value="1" className="bg-gray-100 w-10 focus:outline-none active:outline-none text-center text-md"/></span>
                                    <span className="flex items-center justify-center px-3 cursor-pointer hover:bg-theme-dark hover:text-white select-none">
                                        <svg className="fill-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/></svg>
                                    </span>
                                </div>

                            </div>
                        </div> 

                        <div className="buy-now ">
                            <button className="relative bg-theme-dark text-white p-3 w-4/5 mx-auto flex items-center justify-center shadow-2xl rounded-full uppercase group transition-all hover:bg-theme-medium-dark">
                                <span>Buy now</span> 
                                <span className="shadow-xl bg-theme-medium-dark group-hover:bg-theme-dark transition-all transform group-hover:rotate-90 duration-500 text-white block w-10 h-10 p-2 rounded-full absolute right-2">
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/></svg>
                                </span>
                            </button>
                        </div>
                </div>

                </div>
            </div>


            <div className="text-center w-full mt-12 uppercase text-xl tracking-more-wide text-white">Copyright 2022 by JP</div>
     </div>

</div>
</div>
  )
}
