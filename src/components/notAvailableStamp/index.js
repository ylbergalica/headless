import React from "react";

const NotAvailableStamp = ({ display }) => {
	return (
		<div className={display + " absolute h-full w-full z-30 bg-[#0000003a] items-center rounded-md"}>
			<div className="w-full h-10 text-lg text-zinc-200 flex items-center justify-center bg-red-900 border-y-2 border-zinc-300">
				OUT OF STOCK
			</div>
		</div>
	)
}

export default NotAvailableStamp;