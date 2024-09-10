import React from "react";
const Event = () => {
    return (
        <div className=" flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10">
            <div className="relative mb-4 flex h-full w-full items-center justify-center overflow-hidden [mask:linear-gradient(black_70%,transparent)]">
               
            </div>
            <div className="mt-auto w-full space-y-4 px-8 pb-8">
                <h3 className="text-lg/none font-medium text-zinc-200">
                    Insights at your fingertips
                </h3>
                <p className="max-w-sm text-sm text-zinc-400/80">
                    All your data and finances in one place to provide quick
                    answers and make decisions instantly.   
                </p>
            </div>
        </div>
    );
};

export default Event;
