import myImage from '../assets/LoveBattle.png'

export default function LoginFormInput() {
    return (
        <div className="flex items-center">
            <div className="w-full">
                <div className="flex justify-center">
                    <img src={myImage} alt="My Image" className='mt-7 h-18' />
                </div>
                <div className='w-full h-fit mt-3'>
                    <p className='text-2xl ml-24 font-extrabold text-white font-mono '>Sign In</p>
                </div>
                <div className="flex justify-start w-full h-fit ">
                    <p className="font-thin font-mono text-sm text-white opacity-50 ml-24">Login to manage your account</p>
                </div>
                <div className="w-full h-fit ">
                    <p className="text-white font-mono flex justify-start ml-24 mt-7">Username</p>
                </div>
                <div className="h-fit w-72 ml-24 mt-1 ">
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                </div>
                <div className="w-full h-fit mt-3">
                    <p className="text-white font-mono flex justify-start ml-24">Password</p>
                </div>
                <div className="h-fit w-72 ml-24 mt-1">
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                </div>
                <div className="h-fit w-72 ml-24 mt-5">
                    <button type="button" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </div>
                <div className="w-full h-fit flex">
                    <div>
                        <p className="text-white text-xs font-mono font-thin flex justify-start ml-24 opacity-70">You don't have an account?</p>
                    </div>
                    <div className="list-none">
                        <li className="text-xs text-blue-500 ml-2">Sign Up</li>
                    </div>
                </div>
            </div>
        </div>

    )
}