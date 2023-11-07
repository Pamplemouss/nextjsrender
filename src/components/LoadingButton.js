import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function LoadingButton(props) {
    return (
        <button onClick={props.handleClick} className="group uppercase w-[8.5rem] mt-2 p-0.5 rounded-lg shadow shadow-black/50 inline float-right overflow-hidden relative active:translate-y-0.5">
            <motion.div
                initial={{ rotate: 0, x: "-50%", y:"-50%" }}
                animate={{ rotate: 360, x: "-50%", y:"-50%" }}
                transition={{ ease: "linear", duration: 1.8, repeat: Infinity }}
                className={`${props.isLoading ? "bg-slate-200" : "bg-gradient-to-r from-indigo-400 via-white to-indigo-400 from-30% via-50% to-60%"} absolute top-1/2 left-1/2 h-36 w-36`}
            >
                <div className={`${props.isLoading ? "bg-slate-200" : "bg-indigo-400"} h-1/2 w-full`}></div>
            </motion.div>
            <div className={`${props.isLoading ? "bg-slate-200 text-slate-400" : "bg-indigo-700 text-white hover:bg-indigo-500 duration-200"} py-2 px-2 rounded-lg relative`}>
                {props.isLoading ? (
                    <>
                        <FontAwesomeIcon className="text-lg" icon={faSpinner} spin />
                        <span className="text-xs ml-3">Loading</span>
                    </>
                ) : (
                    <>
                        <div className="text-lg group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:rotate-[-15deg] duration-200 inline-block">
                            <FontAwesomeIcon icon={faDice} />
                        </div>
                        <span className="text-[0.75rem] ml-3">New Fact</span>
                    </>
                )}
            </div>
        </button>
    )
}