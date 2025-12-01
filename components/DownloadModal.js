"use client";

import { useEffect } from "react";
import Image from "next/image";
import { BrandLogoIcon } from "./icons";

export default function DownloadModal({ open, onClose }) {
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose?.();
        };
        if (open) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className=" fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />
            <div className="downloadPopUp relative mx-4 w-full max-w-[705px] md:h-[469px] h-[525px] rounded-2xl bg-green">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute md:right-10 md:top-9 right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full text-[#164925]"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="#164925" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="#164925" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <div className="flex gap-3 h-full px-4 py-5 md:p-10  justify-between">
                    <div className="hidden md:block basis-[220px] grow-0 shrink-0">
                    </div>
                    <div className="text-left flex flex-col md:pl-[60px] justify-between">
                        <div className="mb-20">
                            <Image className=" " src="/images/growniq-green-logo.svg" alt="Logo" width={80} height={24} />
                        </div>
                        <div className="mt-20 md:mt-0">
                            <h3 className="!text-[18px] font-semibold text-[#164925] mb-5 !text-left">
                                You are in the right place,
                                Growniq app is sprouting soon
                            </h3>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="mt-6  w-full"
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="mb-4 w-full rounded-lg text-green border border-green bg-white px-4 py-3 text-sm outline-none placeholder:text-green"
                                    required
                                />
                                <button
                                    type="submit"
                                    className=" rounded-lg bg-[#164925] px-6 py-3 text-sm font-medium text-white hover:opacity-90 w-full"
                                >
                                    Notify Me
                                </button>
                            </form>
                        </div>
                        <div className="md:mt-20 border-t border-dashed border-green pt-4 text-sm text-[#164925]">
                            <div className="flex gap-2 justify-between items-center">
                                <div className="flex items-center gap-1.5 justify-start">
                                    <span className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 12" fill="none">
                                            <path d="M10.9997 8.98431V10.7908C11.0003 10.9585 10.9687 11.1245 10.907 11.2781C10.8453 11.4318 10.7548 11.5697 10.6413 11.6831C10.5278 11.7965 10.3938 11.8828 10.2479 11.9365C10.102 11.9903 9.94736 12.0102 9.79395 11.9951C8.09204 11.7938 6.45724 11.1606 5.0209 10.1465C3.68457 9.22196 2.55159 7.98843 1.70244 6.53351C0.767723 4.96259 0.186033 3.17405 0.00448916 1.31277C-0.00933195 1.14625 0.0088446 0.978426 0.0578613 0.819976C0.106878 0.661526 0.185661 0.515923 0.289194 0.392439C0.392728 0.268955 0.518743 0.170295 0.659217 0.10274C0.799691 0.0351852 0.951545 0.000215834 1.10511 5.83809e-05H2.76434C3.03276 -0.00281781 3.29297 0.100667 3.49649 0.291223C3.7 0.481779 3.83293 0.746405 3.8705 1.03578C3.94053 1.61389 4.07041 2.18152 4.25765 2.72785C4.33206 2.94338 4.34817 3.17761 4.30406 3.4028C4.25995 3.62799 4.15747 3.83469 4.00877 3.99841L3.30636 4.76315C4.09369 6.27069 5.24017 7.51891 6.62482 8.37612L7.32723 7.61138C7.4776 7.44948 7.66746 7.33791 7.87429 7.28988C8.08112 7.24185 8.29626 7.25939 8.49422 7.3404C8.99601 7.54427 9.51738 7.68567 10.0484 7.76192C10.317 7.80318 10.5624 7.95052 10.7378 8.1759C10.9132 8.40128 11.0064 8.68899 10.9997 8.98431Z" fill="#164925" />
                                        </svg>
                                    </span>
                                    <span className="text-green text-[13px]">+91 9717104342</span>
                                </div>
                                <div className="flex items-center gap-1.5 justify-end">
                                    <span className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                                            <path d="M15 2.65125V9.75C15 10.3239 14.7808 10.8761 14.387 11.2937C13.9933 11.7112 13.4549 11.9626 12.882 11.9962L12.75 12H2.25C1.67609 12 1.12386 11.7808 0.706304 11.387C0.288745 10.9933 0.0374194 10.4549 0.00375009 9.882L0 9.75V2.65125L7.08375 7.37399L7.17075 7.4235C7.27328 7.47359 7.38589 7.49963 7.5 7.49963C7.61411 7.49963 7.72672 7.47359 7.82925 7.4235L7.91625 7.37399L15 2.65125Z" fill="#164925" />
                                            <path d="M12.7497 0C13.5597 0 14.27 0.4275 14.666 1.07025L7.49975 5.84775L0.333496 1.07025C0.521544 0.764826 0.779906 0.508801 1.08703 0.323537C1.39415 0.138273 1.74112 0.0291422 2.099 0.00524998L2.24975 0H12.7497Z" fill="#164925" />
                                        </svg>
                                    </span>
                                    <span>contact@growniq.in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
