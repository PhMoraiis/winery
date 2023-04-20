import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";


const LoginModal = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className="block py-3 px-6 text-center text-white gradient rounded-lg shadow md:inline"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Login
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl bg-[#f6f6f6] rounded-xl">
                        <div className="flex items-center justify-end p-6 mb-[-3.5rem] rounded-b">
                                <button
                                    className="text-[#ae1b1e] bg-transparent uppercase px-6 py-2 outline-none focus:outline-none mr-1"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    <AiOutlineClose size={25} />
                                </button>
                            </div>
                            <div className="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                    <h2 className="mt-6 text-3xl font-extrabold text-center paragraph font-naveidBd">Olá, faça seu login</h2>
                                </div>

                                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                                    <div className="px-4 py-8 sm:px-10">
                                        <form className="space-y-6" action="#" method="POST">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-gilroyLt text-black"> Email </label>
                                                <div className="mt-1">
                                                    <input id="email" name="email" type="email" required className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="password" className="block text-sm font-gilroyLt text-black"> Senha </label>
                                                <div className="mt-1">
                                                    <input id="password" name="password" type="password" required className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                                </div>
                                            </div>

                                            <div>
                                                <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base  text-center text-white transition duration-500 ease-in-out transform gradient rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 font-gilroyLt">Entrar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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