import { useState } from "react";


const LoginModal = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className="block py-3 px-6 font-medium text-center text-white gradient rounded-lg shadow md:inline"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Login
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl bg-[#f6f6f6]">
                            <section>
                                <div className="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
                                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                        <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">Sign in to your account</h2>
                                    </div>

                                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                                        <div className="px-4 py-8 sm:px-10">
                                            <form className="space-y-6" action="#" method="POST">
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email address </label>
                                                    <div className="mt-1">
                                                        <input id="email" name="email" type="email" required className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password </label>
                                                    <div className="mt-1">
                                                        <input id="password" name="password" type="password" required className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>
    );
}

export { LoginModal }